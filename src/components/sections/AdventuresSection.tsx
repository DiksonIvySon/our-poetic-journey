import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

const adventures = [
  {
    title: "Ice Skating",
    caption: "Our first date — where falling was the best part.",
    rotation: "-3deg",
  },
  {
    title: "Hiking",
    caption: "Every trail led us closer.",
    rotation: "2deg",
  },
  {
    title: "Mini Golf",
    caption: "You won. (I let you.)",
    rotation: "-1deg",
  },
  {
    title: "Countless Adventures",
    caption: "Every moment became a memory worth keeping.",
    rotation: "3deg",
  },
];

const AdventuresSection = () => {
  return (
    <section className="section-padding bg-gradient-warm relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimatedText
          as="h2"
          className="font-display text-4xl md:text-5xl text-gradient-romance mb-6 text-center"
        >
          Our First Adventures
        </AnimatedText>
        <AnimatedText
          className="poem-text-sm text-center mb-16 max-w-lg mx-auto"
          delay={0.2}
        >
          From ice to mountains, every step was ours.
        </AnimatedText>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {adventures.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="polaroid mx-auto max-w-xs w-full"
              style={{ "--rotation": adv.rotation } as React.CSSProperties}
            >
              {/* Placeholder for their photos */}
              <div className="aspect-square bg-secondary rounded-sm flex items-center justify-center overflow-hidden">
                <div className="text-center p-4">
                  <span className="text-5xl mb-3 block">
                    {i === 0 ? "⛸️" : i === 1 ? "🥾" : i === 2 ? "⛳" : "✨"}
                  </span>
                  <p className="font-display text-lg text-muted-foreground">{adv.title}</p>
                </div>
              </div>
              <p className="text-center mt-3 font-poem text-sm text-warm-dark italic">
                {adv.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventuresSection;
