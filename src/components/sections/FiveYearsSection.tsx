import { motion } from "framer-motion";
import particlesBg from "@/assets/particles-bg.jpg";

const FiveYearsSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={particlesBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-warm-dark/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-gradient-romance mb-8">
            Five Years
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <p className="font-poem text-2xl md:text-3xl lg:text-4xl italic text-cream leading-relaxed">
            Five years in,
          </p>
          <p className="font-poem text-2xl md:text-3xl lg:text-4xl italic text-cream leading-relaxed">
            and I still choose you.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="font-poem text-3xl md:text-4xl lg:text-5xl text-rose-light italic font-semibold"
          >
            Every. Single. Day.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 2 }}
          className="mt-16"
        >
          <p className="font-poem text-lg text-muted-foreground">
            I have never loved anyone like this.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FiveYearsSection;
