import React, { useState } from 'react';
import { Download, Share2, PlusSquare, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // Fixed dimensions (hidden sm:inline-flex w-[110px] h-8) prevent any CLS when beforeinstallprompt fires asynchronously
  const baseBtnClass =
    'hidden sm:inline-flex items-center justify-center gap-1.5 w-[110px] h-8 rounded-xl text-xs font-semibold shrink-0 transition cursor-pointer';

  if (isInstalled) {
    return (
      <span
        className={`${baseBtnClass} bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-default`}
      >
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">Installed</span>
      </span>
    );
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 3000);
      }
    } else {
      setShowIOSGuide(true);
    }
  };

  if (installSuccess) {
    return (
      <span className={`${baseBtnClass} bg-emerald-500 text-white shadow-md`}>
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">Installed!</span>
      </span>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        className={
          isInstallable
            ? `${baseBtnClass} bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-md shadow-indigo-500/20 border border-indigo-400/30`
            : `${baseBtnClass} border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-300`
        }
        title="Install app to your home screen or desktop for instant offline study"
      >
        <Download className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
        <span className="truncate">Install App</span>
      </button>

      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100 relative">
            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {isIOS ? 'Install on iPhone / iPad' : 'Install FlashMind App'}
                </h3>
                <p className="text-xs text-slate-400">Study anywhere with zero internet required</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300 bg-slate-800/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-slate-700 text-indigo-400 mt-0.5">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white">1. Open browser menu</span> (⋮ in Chrome/Edge or Share in Safari).
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-slate-700 text-indigo-400 mt-0.5">
                  <PlusSquare className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white">2. Select &apos;Install app&apos;</span> or &apos;Add to Home Screen&apos;.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-slate-700 text-indigo-400 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white">3. Confirm install</span> to launch offline anytime.
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition cursor-pointer"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
};

