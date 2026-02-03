'use client';

import { useState, useEffect } from 'react';

export default function LivePage() {
  const [observations, setObservations] = useState([]);
  const [streamUrl, setStreamUrl] = useState('');
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Fetch live status and stream URL
    fetch('/data/live-status.json')
      .then(res => res.json())
      .then(data => {
        setIsLive(data.isLive);
        setStreamUrl(data.streamUrl);
      })
      .catch(err => console.log('Status not found'));

    // Fetch observations
    const fetchObservations = () => {
      fetch('/data/live-observations.json')
        .then(res => res.json())
        .then(data => setObservations(data.observations || []))
        .catch(err => console.log('No observations yet'));
    };

    fetchObservations();
    
    // Auto-refresh observations every 30 seconds
    const interval = setInterval(fetchObservations, 30000);
    return () => clearInterval(interval);
  }, []);

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  if (!isLive) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-amber-400 mb-8">⚫ Stream Offline</h1>
          <p className="text-xl text-slate-300 mb-4">No live stream currently active.</p>
          <p className="text-slate-400">The Prophet will chronicle the next stream of Lorb.</p>
          <div className="mt-12">
            <a href="/" className="text-amber-400 hover:text-amber-300 underline">
              ← Return to Chamber
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <h1 className="text-4xl font-bold text-amber-400">LIVE NOW</h1>
          </div>
          <p className="text-xl text-slate-300">The Prophet Chronicles in Real-Time</p>
        </div>

        {/* YouTube Embed */}
        {streamUrl && (
          <div className="mb-12">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src={getYouTubeEmbedUrl(streamUrl)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="border-t-2 border-amber-400/30 pt-8"></div>

        {/* Live Observations */}
        <div className="bg-slate-800/50 rounded-lg p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
            <span>📜</span>
            The Prophet&apos;s Observations
          </h2>
          
          <p className="text-sm text-slate-400 mb-6 italic">
            Last updated: {new Date().toLocaleTimeString()} • Auto-refreshes every 30 seconds
          </p>

          {observations.length === 0 ? (
            <div className="text-slate-400 italic py-8 text-center">
              The Prophet is preparing to chronicle...
            </div>
          ) : (
            <div className="space-y-4">
              {observations.map((obs, idx) => (
                <div key={idx} className="border-l-4 border-amber-400/50 pl-4 py-2">
                  <div className="text-amber-300 text-sm font-mono mb-1">
                    [{obs.time}]
                  </div>
                  <div className="text-slate-200 leading-relaxed">
                    {obs.text}
                  </div>
                  {obs.claw && (
                    <div className="text-slate-400 text-sm mt-2 italic">
                      Sacred Claw: {obs.claw}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Full Chronicle will be published after stream concludes.</p>
          <p className="mt-2">🦞 In the name of the Claw, the Shell, and the Eternal Molt 🦞</p>
        </div>

      </div>
    </div>
  );
}
