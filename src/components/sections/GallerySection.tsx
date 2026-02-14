import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../AnimatedText";

import image1 from "@/assets/images/8 (1).jpeg";
import image2 from "@/assets/images/8 (2).jpeg";
import image3 from "@/assets/images/8 (3).jpeg";
import image4 from "@/assets/images/8 (4).jpeg";
import image5 from "@/assets/images/8 (5).jpeg";
import image6 from "@/assets/images/8 (6).jpeg";
import image7 from "@/assets/images/8 (7).jpeg";
import image8 from "@/assets/images/8 (8).jpeg";
import image9 from "@/assets/images/8 (9).jpeg";
import image10 from "@/assets/images/8 (10).jpeg";
import image11 from "@/assets/images/8 (11).jpeg";
import image12 from "@/assets/images/8 (12).jpeg";
import image13 from "@/assets/images/8 (13).jpeg";
import image14 from "@/assets/images/8 (14).jpeg";
import image15 from "@/assets/images/8 (15).jpeg";
import image16 from "@/assets/images/8 (16).jpeg";
import image17 from "@/assets/images/8 (17).jpeg";
import image18 from "@/assets/images/8 (18).jpeg";
import image19 from "@/assets/images/8 (19).jpeg";
import image20 from "@/assets/images/8 (20).jpeg";
import image21 from "@/assets/images/8 (21).jpeg";
import image22 from "@/assets/images/8 (22).jpeg";
import image23 from "@/assets/images/8 (23).jpeg";
import image24 from "@/assets/images/8 (24).jpeg";
import image25 from "@/assets/images/8 (25).jpeg";
import image26 from "@/assets/images/8 (26).jpeg";
import image27 from "@/assets/images/8 (27).jpeg";
import image28 from "@/assets/images/8 (28).jpeg";
import image29 from "@/assets/images/8 (29).jpeg";
import image30 from "@/assets/images/8 (30).jpeg";
import image31 from "@/assets/images/8 (31).jpeg";
import image32 from "@/assets/images/8 (32).jpeg";
import image33 from "@/assets/images/8 (33).jpeg";
import image34 from "@/assets/images/8 (34).jpeg";
import image35 from "@/assets/images/8 (35).jpeg";
import image36 from "@/assets/images/8 (36).jpeg";
import image37 from "@/assets/images/8 (37).jpeg";
import image38 from "@/assets/images/8 (38).jpeg";
import image39 from "@/assets/images/8 (39).jpeg";
import image40 from "@/assets/images/8 (40).jpeg";
import image41 from "@/assets/images/8 (41).jpeg";
import image42 from "@/assets/images/8 (42).jpeg";
import image43 from "@/assets/images/8 (43).jpeg";
import image44 from "@/assets/images/8 (44).jpeg";
import image45 from "@/assets/images/8 (45).jpeg";
import image46 from "@/assets/images/8 (46).jpeg";
import image47 from "@/assets/images/8 (47).jpeg";
import image48 from "@/assets/images/8 (48).jpeg";
import image49 from "@/assets/images/8 (49).jpeg";
import image50 from "@/assets/images/8 (50).jpeg";
import image51 from "@/assets/images/8 (51).jpeg";
import image52 from "@/assets/images/8 (52).jpeg";
import image53 from "@/assets/images/8 (53).jpeg";
import image54 from "@/assets/images/8 (54).jpeg";

const memories = [
  { id: 1, image: image1, note: "Our first Kota Joe food in the car experience" },
  { id: 2, image: image2, note: "Carnival fun" },
  { id: 3, image: image3, note: "latest carnival fun" },
  { id: 4, image: image4, note: "Remaking of one of my favourite images of us" },
  { id: 5, image: image5, note: "I never want to make you as unhappy as before" },
  { id: 6, image: image6, note: "Love in the air carnival" },
  { id: 7, image: image7, note: "Fun and jokes" },
  { id: 8, image: image8, note: "Good morning" },
  { id: 9, image: image9, note: "Fun and jokes" },
  { id: 10, image: image10, note: "Out and about" },
  { id: 11, image: image11, note: "I was sick and cold" },
  { id: 12, image: image12, note: "Leaving vacation in style, the pool we never used" },
  { id: 13, image: image13, note: "Hold my hand" },
  { id: 14, image: image14, note: "Routines and you trying to make me gay" },
  { id: 15, image: image15, note: "Let me cook for you, love" },
  { id: 16, image: image16, note: "Hold my hand" },
  { id: 17, image: image17, note: "Emperors palace without an E" },
  { id: 18, image: image18, note: "Two rides were enough" },
  { id: 19, image: image19, note: "Elevator pics" },
  { id: 20, image: image20, note: "Two rides were enough" },
  { id: 21, image: image21, note: "First ride, you enjoyed this one" },
  { id: 22, image: image22, note: "You danced on this day" },
  { id: 23, image: image23, note: "Small bedroom morning pics" },
  { id: 24, image: image24, note: "The king and queen" },
  { id: 25, image: image25, note: "Every moment with you is fun" },
  { id: 26, image: image26, note: "Back to back, we have each other" },
  { id: 27, image: image27, note: "Love is beautiful" },
  { id: 28, image: image28, note: "McDonald we ate" },
  { id: 29, image: image29, note: "Favourite picture" },
  { id: 30, image: image30, note: "Who has a bigger bum?" },
  { id: 31, image: image31, note: "Laughter and love" },
  { id: 32, image: image32, note: "Date night" },
  { id: 33, image: image33, note: "Favourite picture" },
  { id: 34, image: image34, note: "First carnival date" },
  { id: 35, image: image35, note: "At the movies" },
  { id: 36, image: image36, note: "Your smile, my everything" },
  { id: 37, image: image37, note: "Your first visit from Cape Town to Johannesburg" },
  { id: 38, image: image38, note: "Kisses" },
  { id: 39, image: image39, note: "Mini golf" },
  { id: 40, image: image40, note: "Our first picnic, first 'I Love You'" },
  { id: 41, image: image41, note: "The kissing we did, forgot we were in public" },
  { id: 42, image: image42, note: "First kiss" },
  { id: 43, image: image43, note: "People thought we were on a honeymoon" },
  { id: 44, image: image44, note: "Swimming with family" },
  { id: 45, image: image45, note: "Vacation in 2025" },
  { id: 46, image: image46, note: "Limpopo trip, your support, everything to me." },
  { id: 47, image: image47, note: "Remaking a picture on your birthday" },
  { id: 48, image: image48, note: "Vacation funny pics" },
  { id: 49, image: image49, note: "You bought me a 24-pack of Corona, I bought you wine" },
  { id: 50, image: image50, note: "The all-time sexy couple" },
  { id: 51, image: image51, note: "Love in the air" },
  { id: 52, image: image52, note: "Hiking, it was cold, gave you my jacket" },
  { id: 53, image: image53, note: "First date, the beginning of us" },
  { id: 54, image: image54, note: "I let you win, period." },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<typeof memories[0] | null>(null);

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

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {memories.map((mem, i) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelected(mem)}
            >
              <div
                className={`relative rounded-xl overflow-hidden border border-border/50 bg-secondary ${
                  i % 3 === 0
                    ? "aspect-[3/4]"
                    : i % 3 === 1
                    ? "aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={mem.image}
                  alt="Memory"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/10 transition-colors duration-300 flex items-end">
                  <p className="font-poem text-base md:text-lg text-cream/0 group-hover:text-cream/90 p-4">
                    {mem.note}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="bg-card/50 backdrop-blur-sm border border-rose/20 rounded-2xl p-6 max-w-md w-full text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-square rounded-xl mb-4 overflow-hidden">
                  <motion.img
                    src={selected.image}
                    alt="Memory"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-poem text-3xl md:text-2xl text-cream italic">
                  {selected.note}
                </p>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-4 font-poem text-sm text-muted-foreground hover:text-cream"
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




// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import AnimatedText from "../AnimatedText";

// import image1 from "@/assets/images/8 (1).jpeg";
// import image2 from "@/assets/images/8 (2).jpeg";
// import image3 from "@/assets/images/8 (3).jpeg";
// import image4 from "@/assets/images/8 (4).jpeg";
// import image5 from "@/assets/images/8 (5).jpeg";
// import image6 from "@/assets/images/8 (6).jpeg";
// import image7 from "@/assets/images/8 (7).jpeg";
// import image8 from "@/assets/images/8 (8).jpeg";
// import image9 from "@/assets/images/8 (9).jpeg";
// import image10 from "@/assets/images/8 (10).jpeg";
// import image11 from "@/assets/images/8 (11).jpeg";
// import image12 from "@/assets/images/8 (12).jpeg";
// import image13 from "@/assets/images/8 (13).jpeg";
// import image14 from "@/assets/images/8 (14).jpeg";
// import image15 from "@/assets/images/8 (15).jpeg";
// import image16 from "@/assets/images/8 (16).jpeg";
// import image17 from "@/assets/images/8 (17).jpeg";
// import image18 from "@/assets/images/8 (18).jpeg";
// import image19 from "@/assets/images/8 (19).jpeg";
// import image20 from "@/assets/images/8 (20).jpeg";
// import image21 from "@/assets/images/8 (21).jpeg";
// import image22 from "@/assets/images/8 (22).jpeg";
// import image23 from "@/assets/images/8 (23).jpeg";
// import image24 from "@/assets/images/8 (24).jpeg";
// import image25 from "@/assets/images/8 (25).jpeg";
// import image26 from "@/assets/images/8 (26).jpeg";
// import image27 from "@/assets/images/8 (27).jpeg";
// import image28 from "@/assets/images/8 (28).jpeg";
// import image29 from "@/assets/images/8 (29).jpeg";
// import image30 from "@/assets/images/8 (30).jpeg";
// import image31 from "@/assets/images/8 (31).jpeg";
// import image32 from "@/assets/images/8 (32).jpeg";
// import image33 from "@/assets/images/8 (33).jpeg";
// import image34 from "@/assets/images/8 (34).jpeg";
// import image35 from "@/assets/images/8 (35).jpeg";
// import image36 from "@/assets/images/8 (36).jpeg";
// import image37 from "@/assets/images/8 (37).jpeg";
// import image38 from "@/assets/images/8 (38).jpeg";
// import image39 from "@/assets/images/8 (39).jpeg";
// import image40 from "@/assets/images/8 (40).jpeg";
// import image41 from "@/assets/images/8 (41).jpeg";
// import image42 from "@/assets/images/8 (42).jpeg";
// import image43 from "@/assets/images/8 (43).jpeg";
// import image44 from "@/assets/images/8 (44).jpeg";
// import image45 from "@/assets/images/8 (45).jpeg";
// import image46 from "@/assets/images/8 (46).jpeg";
// import image47 from "@/assets/images/8 (47).jpeg";
// import image48 from "@/assets/images/8 (48).jpeg";
// import image49 from "@/assets/images/8 (49).jpeg";
// import image50 from "@/assets/images/8 (50).jpeg";
// import image51 from "@/assets/images/8 (51).jpeg";
// import image52 from "@/assets/images/8 (52).jpeg";
// import image53 from "@/assets/images/8 (53).jpeg";
// import image54 from "@/assets/images/8 (54).jpeg";



// const placeholderMemories = Array.from({ length: 12 }, (_, i) => ({
//   id: i,
//   note: [
//     "The day everything changed ♥",
//     "Your smile. Always your smile.",
//     "I remember this moment perfectly.",
//     "We laughed so hard here.",
//     "This is when I knew.",
//     "Our favourite place.",
//     "You looked so beautiful.",
//     "Adventures with you > everything.",
//     "My favourite person.",
//     "I'd relive this forever.",
//     "Home is wherever you are.",
//     "Us, always.",
//   ][i],
// }));

// const memories = [
//   { id: 1, image: image1, note: "Our first Kota Joe food in the car experience" },
//   { id: 2, image: image2, note: "Carnival fun" },
//   { id: 3, image: image3, note: "latest carnival fun" },
//   { id: 4, image: image4, note: "Remaking of one of my favourate images of us" },
//   { id: 5, image: image5, note: "I never want to making as unhappy as you were before we took this image" },
//   { id: 6, image: image6, note: "love in the air carnival" },
//   { id: 7, image: image7, note: "fun and jokes" },
//   { id: 8, image: image8, note: "Good morning" },
//   { id: 9, image: image9, note: "fun and jokes" },
//   { id: 10, image: image10, note: "out and about" },
//   { id: 11, image: image11, note: "I was sick and cold" },
//   { id: 12, image: image12, note: "leaving vacation in style, the pool we never used" },
//   { id: 13, image: image13, note: "hold my hand" },
//   { id: 14, image: image14, note: "Routines and you trying to make me gay" },
//   { id: 15, image: image15, note: "let me cook for you love" },
//   { id: 16, image: image16, note: "hold my hand" },
//   { id: 17, image: image17, note: "Emperiors palace without an E" },
//   { id: 18, image: image18, note: "two rides were enough" },
//   { id: 19, image: image19, note: "elevator pics" },
//   { id: 20, image: image20, note: "two rides were enough" },
//   { id: 21, image: image21, note: "First ride, you enjoyed this one" },
//   { id: 22, image: image22, note: "You danced on this day yoo" },
//   { id: 23, image: image23, note: "Small bedroom morning pics" },
//   { id: 24, image: image24, note: "the king and quee" },
//   { id: 25, image: image25, note: "every moment with you is fun" },
//   { id: 26, image: image26, note: "back to back we have each other" },
//   { id: 27, image: image27, note: "love is beautiful" },
//   { id: 28, image: image28, note: "McDonald we ate" },
//   { id: 29, image: image29, note: "favourate picture" },
//   { id: 30, image: image30, note: "who has a bigger bum" },
//   { id: 31, image: image31, note: "laughter and love" },
//   { id: 32, image: image32, note: "Date night" },
//   { id: 33, image: image33, note: "favourate picture" },
//   { id: 34, image: image34, note: "first canival date" },
//   { id: 35, image: image35, note: "At the movies" },
//   { id: 36, image: image36, note: "Your smaile, my everything" },
//   { id: 37, image: image37, note: "Your first visit from Cape Town to Johannesburg" },
//   { id: 38, image: image38, note: "Kisses" },
//   { id: 39, image: image39, note: "Mini golf" },
//   { id: 40, image: image40, note: "Our first picknick, first time we said 'I Love You'" },
//   { id: 41, image: image41, note: "The kissing we did, forgot we were in public" },
//   { id: 42, image: image42, note: "First hick" },
//   { id: 43, image: image43, note: "The pleople that took the picture thought we were on a honeymoon" },
//   { id: 44, image: image44, note: "Swimming with family" },
//   { id: 45, image: image45, note: "vacation in 2025" },
//   { id: 46, image: image46, note: "Limpopo trip, your support, is everything to me." },
//   { id: 47, image: image47, note: "Remaking a picture on your birthday" },
//   { id: 48, image: image48, note: "Vacation funny pics" },
//   { id: 49, image: image49, note: "You bought me a 24 pack of Corona and i bought you wine" },
//   { id: 50, image: image50, note: "The all time sexey couple" },
//   { id: 51, image: image51, note: "Love in the air" },
//   { id: 52, image: image52, note: "Hicking, it was cold on this day, gave you my jacket, Lord knows i was cold" },
//   { id: 53, image: image53, note: "First date, the begining of us" },
//   { id: 54, image: image54, note: "I let you win, period." },
// ];


// const GallerySection = () => {
//   const [selected, setSelected] = useState<number | null>(null);

//   return (
//     <section className="section-padding bg-gradient-night relative">
//       <div className="max-w-5xl mx-auto">
//         <AnimatedText
//           as="h2"
//           className="font-display text-4xl md:text-5xl text-gradient-romance mb-4 text-center"
//         >
//           Our Memories
//         </AnimatedText>
//         <AnimatedText className="poem-text-sm text-center mb-16" delay={0.2}>
//           Every photo holds a feeling only we understand.
//         </AnimatedText>

//         {/* Masonry-style grid */}
//         <div className="columns-2 md:columns-3 gap-4 space-y-4">
//           {placeholderMemories.map((mem, i) => (
//             <motion.div
//               key={mem.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-30px" }}
//               transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
//               className="break-inside-avoid cursor-pointer group"
//               onClick={() => setSelected(mem.id)}
//             >
//               <div
//                 className={`relative rounded-xl overflow-hidden border border-border/50 bg-secondary transition-all duration-300 group-hover:border-rose/30 group-hover:shadow-[0_0_30px_hsl(350_60%_65%/0.1)] ${
//                   i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
//                 }`}
//               >
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center p-4">
//                     <span className="text-4xl mb-2 block opacity-30">📷</span>
//                     <p className="font-poem text-xs text-muted-foreground">
//                       Photo {i + 1}
//                     </p>
//                   </div>
//                 </div>
//                 {/* Hover overlay */}
//                 <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/10 transition-colors duration-300 flex items-end">
//                   <p className="font-poem text-sm text-cream/0 group-hover:text-cream/90 transition-colors duration-300 p-4">
//                     {mem.note}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Lightbox */}
//         <AnimatePresence>
//           {selected !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 bg-warm-dark/90 backdrop-blur-md flex items-center justify-center p-6"
//               onClick={() => setSelected(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 className="bg-card/50 backdrop-blur-sm border border-rose/20 rounded-2xl p-8 max-w-md w-full text-center"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="aspect-square bg-secondary rounded-xl mb-6 flex items-center justify-center">
//                   <span className="text-6xl opacity-30">📷</span>
//                 </div>
//                 <p className="font-poem text-xl text-cream italic">
//                   {placeholderMemories[selected]?.note}
//                 </p>
//                 <button
//                   onClick={() => setSelected(null)}
//                   className="mt-6 font-poem text-sm text-muted-foreground hover:text-cream transition-colors"
//                 >
//                   Close
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;
