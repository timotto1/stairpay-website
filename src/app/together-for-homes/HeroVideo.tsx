"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Maximize2, Play, Pause } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const IDLE_AFTER_MS = 3000;

const EASE = [0.16, 1, 0.3, 1] as const;

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

interface HeroVideoProps {
  videoSources: string[];
}

export function HeroVideo({ videoSources }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [idle, setIdle] = useState(false);

  // Fade overlay text + controls after a period of mouse inactivity, so the
  // video can take the full viewport. Any movement brings them back.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const wake = () => {
      setIdle(false);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), IDLE_AFTER_MS);
    };
    wake();
    window.addEventListener("mousemove", wake, { passive: true });
    window.addEventListener("touchstart", wake, { passive: true });
    window.addEventListener("keydown", wake);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("mousemove", wake);
      window.removeEventListener("touchstart", wake);
      window.removeEventListener("keydown", wake);
    };
  }, []);

  const goFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    const req =
      v.requestFullscreen ||
      (v as unknown as { webkitRequestFullscreen?: () => Promise<void> })
        .webkitRequestFullscreen;
    if (req) req.call(v);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
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
    <section
      data-theme="dark"
      className="relative min-h-[100vh] flex items-end overflow-hidden bg-[var(--color-bg-primary)]"
    >
      {/* Video background — fixed so it stays while content scrolls over */}
      <button
        type="button"
        onClick={goFullscreen}
        aria-label="Expand video to fullscreen"
        className="fixed inset-0 z-0 cursor-zoom-in group"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {videoSources.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
        {/* Bottom-weighted gradient — keeps the video's centred title clearly
            visible at the top while making the lower-third copy readable. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75 group-hover:from-black/5 group-hover:to-black/65 transition-colors duration-300" />
      </button>

      {/* Floating controls — bottom-right, well clear of the video's centred title.
          Fade out with the rest of the chrome when the user goes idle. */}
      <div
        className={`fixed bottom-6 right-6 z-20 flex gap-2 transition-opacity duration-700 ${
          idle ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={togglePlay}
          aria-label={paused ? "Play video" : "Pause video"}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-colors"
        >
          {paused ? (
            <Play size={14} strokeWidth={1.5} />
          ) : (
            <Pause size={14} strokeWidth={1.5} />
          )}
        </button>
        <button
          type="button"
          onClick={goFullscreen}
          aria-label="Expand video to fullscreen"
          className="flex items-center gap-2 px-4 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-[12px] font-[400] tracking-[0.5px] transition-colors"
        >
          <Maximize2 size={13} strokeWidth={1.5} />
          <span>Expand</span>
        </button>
      </div>

      {/* Hero content — anchored to bottom-left, tight stack so it stays clear
          of the video's centred "STAIRPAY · TOGETHER FOR HOMES" intro title.
          Fades on mouse idle so the video can take the full viewport. */}
      <Container
        className={`relative z-10 pb-14 md:pb-20 pt-32 pointer-events-none transition-opacity duration-700 ${
          idle ? "opacity-0" : "opacity-100"
        }`}
      >
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.div variants={heroFadeUp} className="pointer-events-auto">
            <Badge>16 SEPTEMBER 2026 · BATTERSEA PARK</Badge>
          </motion.div>

          <motion.h1
            variants={heroFadeUp}
            className="text-[clamp(36px,5vw,72px)] font-[300] tracking-[-2px] leading-[1.2] text-white mt-5 whitespace-nowrap pb-2"
          >
            We&rsquo;re lacing up again.
          </motion.h1>

          <motion.div
            variants={heroFadeUp}
            className="mt-8 flex gap-3 flex-wrap pointer-events-auto"
          >
            <Button
              variant="solid-white"
              size="lg"
              href="#tickets"
              arrow
            >
              Buy Tickets
            </Button>
            <Button
              variant="outline-dark"
              size="lg"
              href="#about"
              arrow
            >
              About the Run
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
