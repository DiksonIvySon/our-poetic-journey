import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music } from "lucide-react";

const tracks = [
  { title: "Why I Love You", artist: "MAJOR.", src: "/music/MAJOR_-_Why_I_Love_You.mp3" },
  { title: "You", artist: "Jesse Powell ft. Gerald Albright", src: "/music/Jesse_Powell_-_You.mp3" },
  { title: "Can We Be Lovers", artist: "Teddy Pendergrass", src: "/music/Teddy_Pendergrass_-_Can_We_Be_Lovers.mp3" },
];

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Autoplay on first user interaction with the page
  useEffect(() => {
    const tryAutoplay = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.volume = volume;
      audio.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch(() => {});
      document.removeEventListener("click", tryAutoplay);
      document.removeEventListener("scroll", tryAutoplay);
      document.removeEventListener("keydown", tryAutoplay);
    };
    document.addEventListener("click", tryAutoplay);
    document.addEventListener("scroll", tryAutoplay);
    document.addEventListener("keydown", tryAutoplay);
    return () => {
      document.removeEventListener("click", tryAutoplay);
      document.removeEventListener("scroll", tryAutoplay);
      document.removeEventListener("keydown", tryAutoplay);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[currentTrack].src;
    if (isPlaying) audio.play().catch(() => {});
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnd = () => skipTrack(1);
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("ended", onEnd);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!hasInteracted) setHasInteracted(true);
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const skipTrack = (dir: number) => {
    setCurrentTrack((prev) => (prev + dir + tracks.length) % tracks.length);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  };

  return (
    <>
      <audio ref={audioRef} preload="metadata" />

      {/* Floating toggle */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center glow-rose"
        style={{ background: "hsl(var(--rose))" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle music player"
      >
        <Music className="w-5 h-5 text-white" />
        {isPlaying && (
          <motion.span
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: "hsl(var(--rose-light))" }}
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Player panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-6 z-50 w-72 rounded-2xl p-4 border backdrop-blur-xl"
            style={{
              background: "hsl(var(--card) / 0.95)",
              borderColor: "hsl(var(--rose) / 0.2)",
            }}
          >
            {/* Track info */}
            <div className="mb-3 text-center">
              <p className="font-display text-sm" style={{ color: "hsl(var(--rose-light))" }}>
                {tracks[currentTrack].title}
              </p>
              <p className="font-poem text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                {tracks[currentTrack].artist}
              </p>
            </div>

            {/* Progress bar */}
            <div
              className="w-full h-1 rounded-full cursor-pointer mb-4"
              style={{ background: "hsl(var(--secondary))" }}
              onClick={seek}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, background: "hsl(var(--rose))" }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <button onClick={() => skipTrack(-1)} className="opacity-70 hover:opacity-100 transition-opacity">
                <SkipBack className="w-4 h-4" style={{ color: "hsl(var(--cream))" }} />
              </button>
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "hsl(var(--rose))" }}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" />
                ) : (
                  <Play className="w-4 h-4 text-white ml-0.5" />
                )}
              </button>
              <button onClick={() => skipTrack(1)} className="opacity-70 hover:opacity-100 transition-opacity">
                <SkipForward className="w-4 h-4" style={{ color: "hsl(var(--cream))" }} />
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <button onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5" style={{ color: "hsl(var(--muted-foreground))" }} />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" style={{ color: "hsl(var(--muted-foreground))" }} />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{ background: "hsl(var(--secondary))" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
