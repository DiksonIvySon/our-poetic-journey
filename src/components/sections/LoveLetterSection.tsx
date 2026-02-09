import { motion } from "framer-motion";
import starsBg from "@/assets/stars-bg.jpg";

const LoveLetterSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={starsBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-warm-dark/50" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="bg-card/30 backdrop-blur-md border border-rose/10 rounded-2xl p-8 md:p-12 glow-rose"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-3xl md:text-4xl text-rose-light mb-8 text-center"
          >
            To My Sphongo
          </motion.h2>

          <div className="space-y-6">
            {[
              "Muntuza,",
              "You are the poem I never knew I was writing.",
              "Every laugh we've shared, every call across the distance, every moment where you chose to stay — they are the most beautiful chapters of my life.",
              "You taught me that love isn't just a feeling. It's a decision. And I choose you. I chose you five years ago, I choose you today, and I'll choose you in every tomorrow that follows.",
              "Thank you for being my home, even when home was 1,400 km away.",
              "Thank you for understanding me in ways I didn't know I needed.",
              "Thank you for being you.",
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.7 }}
                className={`font-poem text-lg md:text-xl leading-relaxed ${
                  i === 0 ? "text-gold italic text-2xl" : "text-cream/90"
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="mt-12 pt-8 border-t border-rose/10 text-center"
          >
            <p className="font-poem text-xl md:text-2xl italic text-rose-light leading-relaxed">
              "This isn't the end of our story.
            </p>
            <p className="font-poem text-xl md:text-2xl italic text-rose-light leading-relaxed mt-2">
              It's just a pause…
            </p>
            <p className="font-poem text-xl md:text-2xl italic text-gold leading-relaxed mt-2">
              before everything that comes next."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3.5, duration: 1 }}
            className="mt-10 text-right font-display text-lg text-cream/60"
          >
            With all my love,
            <br />
            <span className="text-gradient-romance text-xl">Forever yours ♥</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
