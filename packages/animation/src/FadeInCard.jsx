import { motion } from "framer-motion";

export default function FadeInCard() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 bg-blue-500 text-white rounded-xl"
      >
        Hello Framer Motion ✨
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-green-600 text-white rounded-xl"
      >
        Click Me
      </motion.button>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 100, top: 0, bottom: 100 }}
        className="w-32 h-32 bg-pink-400 rounded-xl flex items-center justify-center"
      >
        Drag me 🖐
      </motion.div>
    </>
  );
}
