"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Play, Pause } from "lucide-react";

interface PizzaVideoProps {
  src: string;
  poster?: string;
  /** Playback speed multiplier (default 1). */
  playbackRate?: number;
}

export function PizzaVideo({ src, poster, playbackRate = 1 }: PizzaVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  // Apply playbackRate as soon as the video element is ready, and on every
  // play (some browsers reset rate on reload/seek).
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.playbackRate = playbackRate;
    const onPlay = () => {
      v.playbackRate = playbackRate;
    };
    v.addEventListener("play", onPlay);
    v.addEventListener("loadedmetadata", onPlay);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("loadedmetadata", onPlay);
    };
  }, [playbackRate]);

  const goFullscreen = () => {
    const v = ref.current;
    if (!v) return;
    const req =
      v.requestFullscreen ||
      (v as unknown as { webkitRequestFullscreen?: () => Promise<void> })
        .webkitRequestFullscreen;
    if (req) req.call(v);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <div className="relative aspect-[9/16] w-full max-w-[420px] mx-auto rounded-[8px] overflow-hidden bg-[var(--color-bg-secondary)] group">
      <button
        type="button"
        onClick={goFullscreen}
        aria-label="Expand video to fullscreen"
        className="absolute inset-0 z-0 cursor-zoom-in"
      >
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      </button>

      {/* Controls — bottom-right corner */}
      <div className="absolute bottom-3 right-3 z-10 flex gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={paused ? "Play video" : "Pause video"}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 text-white transition-colors"
        >
          {paused ? (
            <Play size={13} strokeWidth={1.5} />
          ) : (
            <Pause size={13} strokeWidth={1.5} />
          )}
        </button>
        <button
          type="button"
          onClick={goFullscreen}
          aria-label="Expand video to fullscreen"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 text-white transition-colors"
        >
          <Maximize2 size={13} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
