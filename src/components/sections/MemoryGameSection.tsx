import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../AnimatedText";

import image1 from "@/assets/images/8 (4).jpeg";
import image2 from "@/assets/images/8 (13).jpeg";
import image3 from "@/assets/images/8 (51).jpeg";
import image4 from "@/assets/images/8 (49).jpeg";
import image5 from "@/assets/images/8 (29).jpeg";
import image6 from "@/assets/images/8 (26).jpeg";

const memoryPairs = [
  { id: 1, image: image1, label: "Ice Skating" },
  { id: 2, image: image2, label: "Hiking" },
  { id: 3, image: image3, label: "Mini Golf" },
  { id: 4, image: image4, label: "Love" },
  { id: 5, image: image5, label: "Daily Calls" },
  { id: 6, image: image6, label: "Distance" },
];


interface Card {
  uniqueId: number;
  id: number;
  image: string;
  label: string;
  flipped: boolean;
  matched: boolean;
}

const MemoryGameSection = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const initGame = useCallback(() => {
    const doubled = [...memoryPairs, ...memoryPairs].map((pair, i) => ({
      ...pair,
      uniqueId: i,
      flipped: false,
      matched: false,
    }));
    // Shuffle
    for (let i = doubled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [doubled[i], doubled[j]] = [doubled[j], doubled[i]];
    }
    setCards(doubled);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    setGameComplete(false);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleFlip = (uniqueId: number) => {
    if (flippedCards.length >= 2) return;
    const card = cards.find((c) => c.uniqueId === uniqueId);
    if (!card || card.flipped || card.matched) return;

    const newCards = cards.map((c) =>
      c.uniqueId === uniqueId ? { ...c, flipped: true } : c
    );
    setCards(newCards);
    const newFlipped = [...flippedCards, uniqueId];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const first = newCards.find((c) => c.uniqueId === newFlipped[0])!;
      const second = newCards.find((c) => c.uniqueId === newFlipped[1])!;

      if (first.id === second.id) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (c.id === first.id ? { ...c, matched: true } : c))
          );
          setMatches((m) => {
            const newM = m + 1;
            if (newM === memoryPairs.length) setGameComplete(true);
            return newM;
          });
          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlipped.includes(c.uniqueId) ? { ...c, flipped: false } : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const loveLevel = Math.round((matches / memoryPairs.length) * 100);

  return (
    <section className="section-padding bg-gradient-warm relative">
      <div className="max-w-2xl mx-auto">
        <AnimatedText
          as="h2"
          className="font-display text-4xl md:text-5xl text-gradient-romance mb-4 text-center"
        >
          Match the Memory
        </AnimatedText>
        <AnimatedText className="poem-text-sm text-center mb-8" delay={0.2}>
          Find the pairs that tell our story
        </AnimatedText>

        {/* Love Level */}
        <div className="mb-8 max-w-xs mx-auto">
          <div className="flex justify-between text-sm font-poem text-muted-foreground mb-1">
            <span>Love Level</span>
            <span>{loveLevel}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--gradient-romance)" }}
              animate={{ width: `${loveLevel}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8">
          {cards.map((card) => (
            <motion.button
              key={card.uniqueId}
              onClick={() => handleFlip(card.uniqueId)}
              whileHover={{ scale: card.flipped || card.matched ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`aspect-square rounded-xl text-3xl md:text-4xl flex items-center justify-center transition-all duration-300 ${
                card.flipped || card.matched
                  ? "bg-rose/20 border-rose/40 border"
                  : "bg-secondary border border-border hover:border-rose/30"
              } ${card.matched ? "glow-rose" : ""}`}
            >
              <AnimatePresence mode="wait">
                {card.flipped || card.matched ? (
                  <motion.div
                    key="front"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full"
                  >
                    <img
                      src={card.image}
                      alt={card.label}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                ) : (
                  <motion.span
                    key="back"
                    initial={{ rotateY: 90 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    className="text-rose/30 text-3xl"
                  >
                    ♥
                  </motion.span>
                )}
              </AnimatePresence>

            </motion.button>
          ))}
        </div>

        <div className="text-center">
          <p className="font-poem text-muted-foreground mb-4">
            Moves: {moves}
          </p>
          {gameComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-3"
            >
              <p className="font-poem text-2xl text-rose-light italic">
                Every memory matched. Just like us. ♥
              </p>
              <button
                onClick={initGame}
                className="font-poem text-sm text-muted-foreground underline hover:text-cream transition-colors"
              >
                Play Again
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MemoryGameSection;
