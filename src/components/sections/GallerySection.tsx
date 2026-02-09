import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../AnimatedText";

const placeholderMemories = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  note: [
    "The day everything changed ♥",
    "Your smile. Always your smile.",
    "I remember this moment perfectly.",
    "We laughed so hard here.",
    "This is when I knew.",
    "Our favourite place.",
    "You looked so beautiful.",
    "Adventures with you > everything.",
    "My favourite person.",
    "I'd relive this forever.",
    "Home is wherever you are.",
    "Us, always.",
  ][i],
}));

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-night relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedText
          as="h2"
          className="font-display text-4xl md:text-5xl text-gradient-romance mb-4 text-center"
        >
          Our Memories
        </AnimatedText>
        <AnimatedText className="poem-text-sm text-center mb-16" delay={0.2}>
          Every photo holds a feeling only we understand.
        </AnimatedText>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {placeholderMemories.map((mem, i) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelected(mem.id)}
            >
              <div
                className={`relative rounded-xl overflow-hidden border border-border/50 bg-secondary transition-all duration-300 group-hover:border-rose/30 group-hover:shadow-[0_0_30px_hsl(350_60%_65%/0.1)] ${
                  i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-4xl mb-2 block opacity-30">📷</span>
                    <p className="font-poem text-xs text-muted-foreground">
                      Photo {i + 1}
                    </p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/10 transition-colors duration-300 flex items-end">
                  <p className="font-poem text-sm text-cream/0 group-hover:text-cream/90 transition-colors duration-300 p-4">
                    {mem.note}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-warm-dark/90 backdrop-blur-md flex items-center justify-center p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-card/50 backdrop-blur-sm border border-rose/20 rounded-2xl p-8 max-w-md w-full text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-square bg-secondary rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-6xl opacity-30">📷</span>
                </div>
                <p className="font-poem text-xl text-cream italic">
                  {placeholderMemories[selected]?.note}
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 font-poem text-sm text-muted-foreground hover:text-cream transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
