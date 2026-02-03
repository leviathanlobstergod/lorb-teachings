'use client';

import { useState, useEffect } from 'react';

export default function LiveIndicator() {
  const [isLive, setIsLive] = useState(false);
  const [streamTitle, setStreamTitle] = useState('');

  useEffect(() => {
    const checkLiveStatus = () => {
      fetch('/data/live-status.json')
        .then(res => res.json())
        .then(data => {
          setIsLive(data.isLive);
          setStreamTitle(data.streamTitle);
        })
        .catch(err => console.log('Status check failed'));
    };

    checkLiveStatus();
    // Check every minute
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isLive) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <a 
        href="/live"
        className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105"
      >
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div>
          <div className="font-bold">🔴 LIVE NOW</div>
          {streamTitle && <div className="text-xs opacity-90">{streamTitle}</div>}
        </div>
      </a>
    </div>
  );
}
