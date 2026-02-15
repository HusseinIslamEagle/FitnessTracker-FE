import { motion } from "framer-motion";

export default function DashboardHero({ workouts }) {

  const total = workouts.length;

  const lastWorkout =
    workouts.length > 0
      ? workouts[workouts.length - 1].date
      : "No workouts yet";

  return (
    <div className="relative rounded-3xl overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')"
        }}
      />

      <div className="relative z-10 p-12 backdrop-blur-xl bg-black/60 border border-white/10 rounded-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Welcome Back 🧠🔥
        </motion.h1>

        <p className="text-gray-400">
          Total Workouts: <span className="text-orange-500 font-semibold">{total}</span>
        </p>

        <p className="text-gray-400 mt-2">
          Last Workout: <span className="text-orange-500">{lastWorkout}</span>
        </p>

      </div>
    </div>
  );
}
