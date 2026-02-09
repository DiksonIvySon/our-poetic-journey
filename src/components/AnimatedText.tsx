import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const AnimatedText = ({ children, className = "", delay = 0, as: Tag = "p" }: AnimatedTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
};

export default AnimatedText;
