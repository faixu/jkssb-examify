export interface DriveFileItem {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime: string;
  webViewLink?: string;
}

const DRIVE_API_BASE = 'https://www.googleapis.com/drive/v3';
const DRIVE_UPLOAD_BASE = 'https://www.googleapis.com/upload/drive/v3';

/**
 * Searches and lists files in the user's Google Drive
 */
export async function listDriveFiles(
  token: string,
  options?: {
    query?: string;
    folderId?: string;
    pageSize?: number;
  }
): Promise<DriveFileItem[]> {
  const queryParts: string[] = ['trashed = false'];

  if (options?.folderId) {
    queryParts.push(`'${options.folderId}' in parents`);
  }

  if (options?.query && options.query.trim()) {
    const escaped = options.query.replace(/'/g, "\\'");
    queryParts.push(`name contains '${escaped}'`);
  }

  const q = encodeURIComponent(queryParts.join(' and '));
  const fields = encodeURIComponent('files(id, name, mimeType, size, modifiedTime, webViewLink)');
  const pageSize = options?.pageSize || 30;

  const res = await fetch(
    `${DRIVE_API_BASE}/files?q=${q}&pageSize=${pageSize}&orderBy=modifiedTime desc&fields=${fields}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Failed to list files from Google Drive (HTTP ${res.status})`);
  }

  const data = await res.json();
  return data.files || [];
}

/**
 * Finds or creates a specific folder in Google Drive root
 */
export async function getOrCreateFolder(
  token: string,
  folderName: string = 'FlashMind JKSSB Backups'
): Promise<string> {
  // Search for existing non-trashed folder
  const escapedName = folderName.replace(/'/g, "\\'");
  const q = encodeURIComponent(
    `name = '${escapedName}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
  );

  const searchRes = await fetch(`${DRIVE_API_BASE}/files?q=${q}&fields=files(id, name)`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (searchRes.ok) {
    const searchData = await searchRes.json();
    if (searchData.files && searchData.files.length > 0) {
      return searchData.files[0].id;
    }
  }

  // Create folder
  const createRes = await fetch(`${DRIVE_API_BASE}/files`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
    }),
  });

  if (!createRes.ok) {
    const err = await createRes.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Failed to create backup folder on Google Drive');
  }

  const newFolder = await createRes.json();
  return newFolder.id;
}

/**
 * Creates or uploads a new file to Google Drive using multipart upload
 */
export async function uploadDriveFile(
  token: string,
  name: string,
  content: string,
  mimeType: string = 'application/json',
  folderId?: string
): Promise<DriveFileItem> {
  const boundary = '-------314159265358979323846';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const metadata: { name: string; mimeType: string; parents?: string[] } = {
    name,
    mimeType,
  };

  if (folderId) {
    metadata.parents = [folderId];
  }

  const multipartRequestBody =
    delimiter +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadata) +
    delimiter +
    `Content-Type: ${mimeType}\r\n\r\n` +
    content +
    closeDelimiter;

  const res = await fetch(
    `${DRIVE_UPLOAD_BASE}/files?uploadType=multipart&fields=id,name,mimeType,size,modifiedTime,webViewLink`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body: multipartRequestBody,
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Failed to upload file to Google Drive (HTTP ${res.status})`);
  }

  return await res.json();
}

/**
 * Reads text/JSON content of a file from Google Drive
 */
export async function readDriveFileContent(token: string, fileId: string): Promise<string> {
  const res = await fetch(`${DRIVE_API_BASE}/files/${fileId}?alt=media`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Failed to read file from Google Drive (HTTP ${res.status})`);
  }

  return await res.text();
}

/**
 * Deletes a file from Google Drive.
 * NOTE: Callers MUST show explicit confirmation dialog first per Workspace rules!
 */
export async function deleteDriveFile(token: string, fileId: string): Promise<void> {
  const res = await fetch(`${DRIVE_API_BASE}/files/${fileId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok && res.status !== 204) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Failed to delete file from Google Drive (HTTP ${res.status})`);
  }
}
