import { motion } from "framer-motion";
import heroSunset from "@/assets/hero-sunset.jpg";

interface LandingSectionProps {
  onBegin: () => void;
}

const LandingSection = ({ onBegin }: LandingSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroSunset}
          alt="Sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/70 via-warm-dark/50 to-warm-dark" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-4 leading-tight">
            MasiDikky
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="space-y-3 mt-8"
        >
          <p className="poem-text italic">This is our story…</p>
          <p className="poem-text-sm">
            Written in moments, laughter, distance, and love.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={onBegin}
            className="group relative px-10 py-4 rounded-full border border-rose/40 bg-rose/10 backdrop-blur-sm text-cream font-poem text-xl tracking-widest uppercase transition-all duration-500 hover:bg-rose/20 hover:border-rose/60 hover:shadow-[0_0_40px_hsl(350_60%_65%/0.3)]"
          >
            <span className="relative z-10">Begin Our Story</span>
            <motion.span
              className="absolute inset-0 rounded-full bg-rose/5"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-8 text-muted-foreground font-poem text-sm tracking-[0.3em] uppercase"
        >
          A love letter to Sphongo
        </motion.p>
      </div>
    </section>
  );
};

export default LandingSection;
