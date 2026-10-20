import React, { useState, useEffect, useCallback } from 'react';
import { User } from 'firebase/auth';
import {
  googleSignIn,
  logoutGoogle,
  getAccessToken,
  initAuth,
} from '../services/googleDriveAuth';
import {
  listDriveFiles,
  getOrCreateFolder,
  uploadDriveFile,
  readDriveFileContent,
  deleteDriveFile,
  DriveFileItem,
} from '../services/googleDriveApi';
import {
  exportStudyData,
  importStudyData,
  loadUserStats,
  loadCardProgress,
  loadCustomCards,
  loadBookmarks,
} from '../utils/storage';
import { Flashcard, CategoryId } from '../types';
import { CATEGORIES } from '../data/initialDecks';
import {
  Cloud,
  CloudUpload,
  CloudDownload,
  FolderSync,
  Trash2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Search,
  FileText,
  FileCode,
  ShieldAlert,
  LogOut,
  FolderCheck,
  Sparkles,
} from 'lucide-react';

interface GoogleDriveSyncProps {
  cards: Flashcard[];
  onRefreshAllData: () => void;
}

export const GoogleDriveSync: React.FC<GoogleDriveSyncProps> = ({
  cards,
  onRefreshAllData,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [backupFiles, setBackupFiles] = useState<DriveFileItem[]>([]);
  const [allDriveFiles, setAllDriveFiles] = useState<DriveFileItem[]>([]);
  const [activeTab, setActiveTab] = useState<'backup' | 'export' | 'explorer'>('backup');
  const [searchQuery, setSearchQuery] = useState('');
  const [backupFolderId, setBackupFolderId] = useState<string | null>(null);

  // Status message state
  const [statusMsg, setStatusMsg] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  // Destructive delete confirmation modal state
  const [fileToDelete, setFileToDelete] = useState<DriveFileItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Export deck state
  const [selectedExportCategory, setSelectedExportCategory] = useState<CategoryId | 'all' | 'custom'>('all');
  const [exportFormat, setExportFormat] = useState<'json' | 'notes'>('notes');
  const [isExporting, setIsExporting] = useState(false);

  // Check auth state on mount
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, accessToken) => {
        setUser(currentUser);
        setToken(accessToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const handleSignIn = async () => {
    setIsLoggingIn(true);
    setStatusMsg(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        setStatusMsg({
          type: 'success',
          text: `Connected to Google Drive as ${res.user.displayName || res.user.email}!`,
        });
      }
    } catch (err: any) {
      console.error('Sign-in failed', err);
      setStatusMsg({
        type: 'error',
        text: err.message || 'Failed to authenticate with Google Drive',
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logoutGoogle();
      setUser(null);
      setToken(null);
      setBackupFiles([]);
      setAllDriveFiles([]);
      setStatusMsg({ type: 'info', text: 'Disconnected from Google Drive' });
    } catch (err: any) {
      console.error('Sign-out error', err);
    }
  };

  // Fetch backups and drive files
  const loadDriveContents = useCallback(
    async (accessToken: string) => {
      setLoadingFiles(true);
      try {
        // Find or create backup folder
        const folderId = await getOrCreateFolder(accessToken, 'FlashMind JKSSB Backups');
        setBackupFolderId(folderId);

        // List files in folder
        const folderFiles = await listDriveFiles(accessToken, { folderId, pageSize: 30 });
        setBackupFiles(folderFiles);

        // List recent files from entire drive for explorer
        const recentFiles = await listDriveFiles(accessToken, { pageSize: 40 });
        setAllDriveFiles(recentFiles);
      } catch (err: any) {
        console.error('Failed to load Google Drive contents', err);
        setStatusMsg({
          type: 'error',
          text: err.message || 'Could not list files from Google Drive. Try signing in again.',
        });
      } finally {
        setLoadingFiles(false);
      }
    },
    []
  );

  useEffect(() => {
    if (token) {
      loadDriveContents(token);
    }
  }, [token, loadDriveContents]);

  // Handle backup creation
  const handleCreateBackup = async () => {
    if (!token) return;
    setSyncing(true);
    setStatusMsg(null);
    try {
      const folderId = backupFolderId || (await getOrCreateFolder(token, 'FlashMind JKSSB Backups'));
      setBackupFolderId(folderId);

      const backupData = {
        app: 'FlashMind JKSSB Exam Master',
        version: '1.2.0',
        timestamp: new Date().toISOString(),
        user: {
          email: user?.email,
          name: user?.displayName,
        },
        stats: loadUserStats(),
        progress: loadCardProgress(),
        customCards: loadCustomCards(),
        bookmarks: loadBookmarks(),
      };

      const now = new Date();
      const datePart = now.toISOString().slice(0, 10);
      const timePart = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;
      const fileName = `FlashMind_Backup_${datePart}_${timePart}.json`;

      const uploaded = await uploadDriveFile(
        token,
        fileName,
        JSON.stringify(backupData, null, 2),
        'application/json',
        folderId
      );

      setStatusMsg({
        type: 'success',
        text: `Backup successfully saved to Google Drive: "${uploaded.name}"!`,
      });

      await loadDriveContents(token);
    } catch (err: any) {
      console.error('Backup failed', err);
      setStatusMsg({
        type: 'error',
        text: err.message || 'Failed to save backup to Google Drive',
      });
    } finally {
      setSyncing(false);
    }
  };

  // Handle restoring backup
  const handleRestoreBackup = async (file: DriveFileItem) => {
    if (!token) return;
    const confirmRestore = window.confirm(
      `Restore study progress from "${file.name}"?\n\nThis will update your streaks, XP, custom cards, and review intervals with the backup file data.`
    );
    if (!confirmRestore) return;

    setSyncing(true);
    setStatusMsg(null);
    try {
      const content = await readDriveFileContent(token, file.id);
      const success = importStudyData(content);
      if (success) {
        onRefreshAllData();
        setStatusMsg({
          type: 'success',
          text: `Successfully restored study data from "${file.name}"!`,
        });
      } else {
        throw new Error('Invalid backup file format.');
      }
    } catch (err: any) {
      console.error('Restore error', err);
      setStatusMsg({
        type: 'error',
        text: err.message || 'Failed to restore backup from Google Drive',
      });
    } finally {
      setSyncing(false);
    }
  };

  // Handle Export Questions to Drive
  const handleExportToDrive = async () => {
    if (!token) return;
    setIsExporting(true);
    setStatusMsg(null);
    try {
      const folderId = backupFolderId || (await getOrCreateFolder(token, 'FlashMind JKSSB Backups'));

      let exportCards: Flashcard[] = [];
      let label = 'All_5705_Questions';

      if (selectedExportCategory === 'all') {
        exportCards = cards;
        label = 'All_Syllabus_Questions';
      } else if (selectedExportCategory === 'custom') {
        exportCards = loadCustomCards();
        label = 'Custom_User_Questions';
      } else {
        exportCards = cards.filter((c) => c.categoryId === selectedExportCategory);
        const catMeta = CATEGORIES.find((c) => c.id === selectedExportCategory);
        label = catMeta ? catMeta.name.replace(/[^a-zA-Z0-9]/g, '_') : selectedExportCategory;
      }

      if (exportCards.length === 0) {
        throw new Error('No flashcards found for selected export criteria.');
      }

      const now = new Date();
      const dateStr = now.toISOString().slice(0, 10);

      let fileName = '';
      let mimeType = '';
      let content = '';

      if (exportFormat === 'json') {
        fileName = `FlashMind_${label}_${dateStr}.json`;
        mimeType = 'application/json';
        content = JSON.stringify(
          {
            exportedAt: now.toISOString(),
            totalQuestions: exportCards.length,
            category: selectedExportCategory,
            questions: exportCards,
          },
          null,
          2
        );
      } else {
        // Markdown / Text Study Notes format
        fileName = `FlashMind_${label}_Study_Guide_${dateStr}.txt`;
        mimeType = 'text/plain';
        const lines: string[] = [
          `=======================================================`,
          `FLASHMIND JKSSB EXAM MASTER - STUDY & REVISION GUIDE`,
          `Category: ${selectedExportCategory.toUpperCase()}`,
          `Total Questions: ${exportCards.length}`,
          `Exported on: ${now.toLocaleString()}`,
          `=======================================================\n`,
        ];

        exportCards.forEach((c, idx) => {
          lines.push(`Q${idx + 1}. ${c.question}`);
          if (c.options && c.options.length > 0) {
            c.options.forEach((opt, optIdx) => {
              const letter = ['A', 'B', 'C', 'D'][optIdx] || '-';
              lines.push(`   ${letter}) ${opt}`);
            });
          }
          lines.push(`CORRECT ANSWER: ${c.answer}`);
          if (c.explanation) {
            lines.push(`EXPLANATION: ${c.explanation}`);
          }
          if (c.tip) {
            lines.push(`EXAM TIP / MNEMONIC: ${c.tip}`);
          }
          lines.push('-------------------------------------------------------');
        });

        content = lines.join('\n');
      }

      const uploaded = await uploadDriveFile(token, fileName, content, mimeType, folderId);

      setStatusMsg({
        type: 'success',
        text: `Exported ${exportCards.length} questions to Google Drive: "${uploaded.name}"!`,
      });

      await loadDriveContents(token);
    } catch (err: any) {
      console.error('Export failed', err);
      setStatusMsg({
        type: 'error',
        text: err.message || 'Failed to export questions to Google Drive',
      });
    } finally {
      setIsExporting(false);
    }
  };

  // Destructive delete confirmation execution
  const executeDeleteFile = async () => {
    if (!token || !fileToDelete) return;
    setIsDeleting(true);
    try {
      await deleteDriveFile(token, fileToDelete.id);
      setStatusMsg({
        type: 'success',
        text: `Permanently deleted "${fileToDelete.name}" from Google Drive.`,
      });
      setFileToDelete(null);
      await loadDriveContents(token);
    } catch (err: any) {
      console.error('Delete error', err);
      setStatusMsg({
        type: 'error',
        text: err.message || 'Failed to delete file from Google Drive',
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredExplorerFiles = allDriveFiles.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Cloud className="w-5 h-5 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Google Drive Cloud Sync &amp; Storage
            </h1>
          </div>
          <p className="text-sm text-slate-400">
            Securely back up your study streaks, sync card progress, and export exam revision sheets directly to Google Drive.
          </p>
        </div>

        {user && (
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2 rounded-2xl">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="w-10 h-10 rounded-full border border-slate-700"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                {(user.displayName || user.email || 'U')[0].toUpperCase()}
              </div>
            )}
            <div className="pr-2">
              <div className="text-xs font-bold text-white leading-tight">
                {user.displayName || 'Google User'}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight truncate max-w-[160px]">
                {user.email}
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition cursor-pointer"
              title="Sign out of Google"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Status Notification Banner */}
      {statusMsg && (
        <div
          className={`mb-6 p-4 rounded-xl border flex items-center justify-between gap-3 ${
            statusMsg.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              : statusMsg.type === 'error'
              ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
          }`}
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            {statusMsg.type === 'success' && <CheckCircle2 className="w-5 h-5 shrink-0" />}
            {statusMsg.type === 'error' && <AlertCircle className="w-5 h-5 shrink-0" />}
            {statusMsg.type === 'info' && <Sparkles className="w-5 h-5 shrink-0" />}
            <span>{statusMsg.text}</span>
          </div>
          <button
            onClick={() => setStatusMsg(null)}
            className="text-xs opacity-75 hover:opacity-100 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main Authentication Gate */}
      {!user || !token ? (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
            <Cloud className="w-10 h-10 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Connect Your Google Drive</h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Link your Google account to automatically store and backup your JKSSB preparation data,
            sync revision intervals across mobile and desktop, and export high-yield questions to
            Google Drive docs.
          </p>

          <div className="flex justify-center mb-6">
            {/* Official Google Material Sign-In Button */}
            <button
              onClick={handleSignIn}
              disabled={isLoggingIn}
              className="gsi-material-button shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              <div className="gsi-material-button-state"></div>
              <div className="gsi-material-button-content-wrapper">
                <div className="gsi-material-button-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span className="gsi-material-button-contents">
                  {isLoggingIn ? 'Connecting to Google...' : 'Sign in with Google'}
                </span>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left pt-6 border-t border-slate-800 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <FolderCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Dedicated "FlashMind JKSSB Backups" folder</span>
            </div>
            <div className="flex items-start gap-2">
              <CloudUpload className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>One-click backup &amp; instant cross-device sync</span>
            </div>
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Export revision notes for offline reading</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Tabs navigation */}
          <div className="flex items-center gap-2 border-b border-slate-800 mb-6 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('backup')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition cursor-pointer ${
                activeTab === 'backup'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <FolderSync className="w-4 h-4" />
              <span>Cloud Backups ({backupFiles.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('export')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition cursor-pointer ${
                activeTab === 'export'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <CloudUpload className="w-4 h-4" />
              <span>Export Questions to Drive</span>
            </button>

            <button
              onClick={() => setActiveTab('explorer')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition cursor-pointer ${
                activeTab === 'explorer'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Drive File Explorer</span>
            </button>

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => token && loadDriveContents(token)}
                disabled={loadingFiles}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                title="Refresh Drive files"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingFiles ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* TAB 1: BACKUPS */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              {/* Quick Action Card */}
              <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-emerald-950/40 border border-indigo-500/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Google Drive Cloud Vault
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Create Instant Study Backup
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 max-w-xl">
                    Saves all your spaced-repetition schedules, quiz high scores, custom flashcards,
                    and active streaks to your private Google Drive folder: <code className="text-indigo-300">FlashMind JKSSB Backups</code>.
                  </p>
                </div>

                <button
                  onClick={handleCreateBackup}
                  disabled={syncing}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 active:scale-95 transition cursor-pointer shrink-0"
                >
                  <CloudUpload className={`w-5 h-5 ${syncing ? 'animate-bounce' : ''}`} />
                  <span>{syncing ? 'Uploading to Drive...' : 'Backup Now to Drive'}</span>
                </button>
              </div>

              {/* Backups List */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <FolderCheck className="w-4 h-4 text-emerald-400" />
                    Available Cloud Backups ({backupFiles.length})
                  </h4>
                  {backupFolderId && (
                    <a
                      href={`https://drive.google.com/drive/folders/${backupFolderId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                    >
                      <span>Open Folder in Drive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {loadingFiles ? (
                  <div className="py-12 text-center text-slate-400 flex flex-col items-center gap-2">
                    <RefreshCw className="w-6 h-6 animate-spin text-indigo-400" />
                    <span className="text-sm">Fetching files from Google Drive...</span>
                  </div>
                ) : backupFiles.length === 0 ? (
                  <div className="py-12 text-center text-slate-500">
                    <Cloud className="w-10 h-10 mx-auto mb-2 opacity-40" />
                    <p className="text-sm font-medium">No backups found in Google Drive yet.</p>
                    <p className="text-xs text-slate-600 mt-1">
                      Click "Backup Now to Drive" above to create your first cloud snapshot!
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-800">
                    {backupFiles.map((file) => {
                      const sizeKb = file.size ? `${(parseInt(file.size) / 1024).toFixed(1)} KB` : 'JSON';
                      const formattedDate = new Date(file.modifiedTime).toLocaleString();

                      return (
                        <div
                          key={file.id}
                          className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/40 px-3 rounded-xl transition"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                              <FileCode className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white flex items-center gap-2">
                                <span>{file.name}</span>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-mono">
                                  {sizeKb}
                                </span>
                              </div>
                              <div className="text-xs text-slate-400 mt-0.5">
                                Last modified: {formattedDate}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-center">
                            {file.webViewLink && (
                              <a
                                href={file.webViewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 transition"
                                title="View in Google Drive"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>View</span>
                              </a>
                            )}

                            <button
                              onClick={() => handleRestoreBackup(file)}
                              disabled={syncing}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                            >
                              <CloudDownload className="w-3.5 h-3.5" />
                              <span>Restore</span>
                            </button>

                            <button
                              onClick={() => setFileToDelete(file)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
                              title="Delete from Google Drive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: EXPORT QUESTIONS */}
          {activeTab === 'export' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Export JKSSB Question Bank to Google Drive
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Upload complete flashcard decks to your Google Drive as readable study guides or JSON data files.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Select Section */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Select Section / Category
                  </label>
                  <select
                    value={selectedExportCategory}
                    onChange={(e) => setSelectedExportCategory(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="all">All Syllabus Sections (5,705+ Questions)</option>
                    <option value="custom">My Custom Added Flashcards</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({cat.marks ? `${cat.marks} Marks` : 'Bonus'})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Format */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    File Format
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setExportFormat('notes')}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                        exportFormat === 'notes'
                          ? 'bg-indigo-600/20 border-indigo-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs flex items-center gap-1.5 mb-1">
                        <FileText className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Revision Notes (.txt)</span>
                      </div>
                      <div className="text-[11px] opacity-75">
                        Formatted questions with options, answers &amp; explanations.
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setExportFormat('json')}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                        exportFormat === 'json'
                          ? 'bg-indigo-600/20 border-indigo-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs flex items-center gap-1.5 mb-1">
                        <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                        <span>FlashMind JSON</span>
                      </div>
                      <div className="text-[11px] opacity-75">
                        Structured dataset for sharing or re-importing into the app.
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={handleExportToDrive}
                  disabled={isExporting}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition cursor-pointer"
                >
                  <CloudUpload className={`w-4 h-4 ${isExporting ? 'animate-bounce' : ''}`} />
                  <span>{isExporting ? 'Exporting to Google Drive...' : 'Save Deck to Google Drive'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: FILE EXPLORER */}
          {activeTab === 'explorer' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Google Drive File Explorer</h3>
                  <p className="text-xs text-slate-400">
                    Search and preview files stored in your connected Google Drive account.
                  </p>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Drive files..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {filteredExplorerFiles.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-xs">
                  No files matching your search query.
                </div>
              ) : (
                <div className="divide-y divide-slate-800">
                  {filteredExplorerFiles.map((file) => (
                    <div
                      key={file.id}
                      className="py-3 flex items-center justify-between gap-3 hover:bg-slate-800/30 px-3 rounded-lg transition"
                    >
                      <div className="flex items-center gap-3 truncate">
                        <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-200 truncate">
                          {file.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {file.webViewLink && (
                          <a
                            href={file.webViewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 transition"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        <button
                          onClick={() => setFileToDelete(file)}
                          className="p-1 rounded text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
                          title="Delete from Google Drive"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* MANDATORY USER CONFIRMATION MODAL FOR DESTRUCTIVE ACTIONS */}
      {fileToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6 text-rose-400" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Delete File from Google Drive?</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Are you sure you want to delete <strong className="text-white">"{fileToDelete.name}"</strong>?
            </p>
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 text-xs text-rose-300 mb-6">
              This action will permanently remove the file from your Google Drive. This operation cannot be undone.
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setFileToDelete(null)}
                disabled={isDeleting}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={executeDeleteFile}
                disabled={isDeleting}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg shadow-rose-600/30 transition cursor-pointer flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isDeleting ? 'Deleting...' : 'Confirm Delete'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
