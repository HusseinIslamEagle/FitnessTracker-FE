import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import PackagesSection from "../components/PackagesSection";
import { Lightbulb } from "lucide-react";
import { useMemo } from "react";

export default function UserHome() {
  const { user } = useAuth();

  const username =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "Athlete";

  /* ===============================
     Educational Content Pool
  =============================== */
  const knowledgePool = [
    {
      title: "Hydration Matters",
      text: "Even 2% dehydration can reduce performance. Drink water before you feel thirsty."
    },
    {
      title: "Progressive Overload",
      text: "Muscles grow only when challenged. Increase weight, reps, or intensity gradually."
    },
    {
      title: "Sleep = Growth",
      text: "Most muscle recovery and hormonal optimization happen during deep sleep."
    },
    {
      title: "Compound Movements",
      text: "Squats, presses, and rows stimulate more muscle mass and burn more calories."
    },
    {
      title: "Protein Intake",
      text: "Aim for 1.6–2.2g protein per kg bodyweight to maximize hypertrophy."
    },
    {
      title: "Rest Periods",
      text: "60–90 sec for hypertrophy, 2–3 min for strength. Rest is part of training."
    },
    {
      title: "Consistency Wins",
      text: "Your physique is built by weekly habits, not one intense workout."
    },
    {
      title: "Cardio Strategy",
      text: "Use cardio to support recovery and conditioning, not destroy muscle gains."
    }
  ];

  /* ===============================
     Daily Rotation Logic
  =============================== */
  const dailyTips = useMemo(() => {
    const today = new Date().getDate();
    const shuffled = [...knowledgePool].sort(
      (a, b) => today % 2 ? 0.5 - Math.random() : Math.random() - 0.5
    );
    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center px-24 overflow-hidden">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058917765-a780eda07a3e')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Welcome back,
            <span className="text-orange-500 ml-3 drop-shadow-[0_0_15px_rgba(255,107,0,0.9)]">
              {username}
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Stay consistent. Stay powerful.
          </p>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="mt-24 px-24">
        <PackagesSection />
      </section>

      {/* ================= DAILY KNOWLEDGE SECTION ================= */}
      <section className="mt-32 px-24">

        <div className="flex items-center space-x-3 mb-10">
          <Lightbulb className="text-orange-500" />
          <h2 className="text-3xl font-bold">
            Daily Knowledge Boost
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dailyTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10
                         rounded-3xl p-8 shadow-lg
                         hover:border-orange-500/40
                         hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]
                         transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                {tip.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {tip.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MOTIVATION STRIP ================= */}
      <section className="relative mt-32 h-[40vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-3xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Discipline creates greatness.
          </h2>

          <p className="text-gray-400">
            Every session compounds. Keep building.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
