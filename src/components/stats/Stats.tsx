import { motion } from "framer-motion";

import { cardsData } from "../../data";
import StatCard from "./StatCard";

const Stats = () => {
  return (
    <section className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 20,
          }}
          animate={{
            opacity: 100,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            delay: 0.2 * (index + 1),
            duration: 0.5,
            ease: "linear",
          }}
        >
          <StatCard
            {...card}
            icon={<card.icon className="size-4 text-white/50" />}
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Stats;
