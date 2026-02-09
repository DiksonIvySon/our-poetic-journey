import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

const timelineItems = [
  { text: "We didn't try.", delay: 0 },
  { text: "We just understood.", delay: 0.2 },
  { text: "Common ground came easy —", delay: 0.4 },
  { text: "shared goals, similar beliefs,", delay: 0.5 },
  { text: "the same way of seeing life.", delay: 0.6 },
  { text: "Talking became effortless.", delay: 0.8 },
  { text: "Understanding turned into affection.", delay: 1.0 },
  { text: "Affection turned into love.", delay: 1.2 },
];

const HowWeMetSection = () => {
  return (
    <section className="section-padding bg-gradient-night relative min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <AnimatedText
          as="h2"
          className="font-display text-4xl md:text-5xl text-gradient-romance mb-16 text-center"
        >
          How We Met
        </AnimatedText>

        {/* Timeline */}
        <div className="relative pl-8 border-l border-rose/20">
          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: item.delay }}
              className="mb-8 relative"
            >
              {/* Dot */}
              <span className="absolute -left-[calc(2rem+5px)] top-2 w-2.5 h-2.5 rounded-full bg-rose glow-rose" />
              <p className="poem-text">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-poem text-3xl md:text-4xl italic text-rose-light">
            "It felt like coming home."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeMetSection;
