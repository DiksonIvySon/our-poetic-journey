import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import distanceMap from "@/assets/distance-map.jpg";

const messages = [
  "Good morning, my love ☀️",
  "I miss you today 💛",
  "Tell me about your day",
  "I'm so proud of you",
  "Can't wait to see you",
  "You're my favourite person",
  "Always choosing you 💕",
  "Three calls. Every day.",
];

const DistanceSection = () => {
  return (
    <section className="section-padding bg-gradient-night relative overflow-hidden min-h-screen flex items-center">
      {/* Background map */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img
          src={distanceMap}
          alt="Distance between cities"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <AnimatedText
          as="h2"
          className="font-display text-4xl md:text-5xl text-gradient-romance mb-6 text-center"
        >
          The Distance Chapter
        </AnimatedText>

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-between items-center my-12 px-4"
        >
          <div className="text-center">
            <div className="w-4 h-4 rounded-full bg-gold mx-auto mb-2 glow-gold" />
            <p className="font-display text-lg text-gold">Johannesburg</p>
          </div>

          {/* Animated dotted line */}
          <div className="flex-1 mx-6 relative h-[2px]">
            <motion.div
              className="absolute inset-0 border-t-2 border-dashed border-rose/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-rose"
              initial={{ left: "0%" }}
              whileInView={{ left: ["0%", "100%", "0%"] }}
              viewport={{ once: true }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="text-center">
            <div className="w-4 h-4 rounded-full bg-gold mx-auto mb-2 glow-gold" />
            <p className="font-display text-lg text-gold">Cape Town</p>
          </div>
        </motion.div>

        {/* Floating messages */}
        <div className="relative h-64 my-12 overflow-hidden">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`message-bubble absolute ${
                i % 2 === 0 ? "left-0 md:left-8" : "right-0 md:right-8"
              }`}
              style={{ top: `${(i / messages.length) * 80}%` }}
            >
              {msg}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 space-y-4">
          <AnimatedText className="poem-text" delay={0.3}>
            Distance tested us.
          </AnimatedText>
          <AnimatedText className="poem-text" delay={0.5}>
            Consistency defined us.
          </AnimatedText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            className="font-poem text-xl text-muted-foreground mt-8"
          >
            Every day. At least three times a day. Choosing each other.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default DistanceSection;
