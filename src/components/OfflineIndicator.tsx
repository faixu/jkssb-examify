import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-500/95 px-3.5 py-2 text-xs font-semibold text-slate-950 shadow-xl backdrop-blur-md border border-amber-300">
      <WifiOff className="h-4 w-4 animate-pulse text-slate-950" />
      <span>Offline Mode — All decks & progress are cached & working offline!</span>
    </div>
  );
};
