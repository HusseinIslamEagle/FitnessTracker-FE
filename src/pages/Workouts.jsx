import { useState } from "react";
import { programs, cardioWorkouts } from "../data/programs";
import { motion, AnimatePresence } from "framer-motion";

export default function Workouts() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="min-h-screen px-6 py-20 text-white bg-[#0a0a0a]">
      {/* ================= BACKGROUND DECOR ================= */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full" />
      </div>

      {/* ================= TITLE ================= */}
      <header className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase"
        >
          Training <span className="text-orange-500">Hub</span>
        </motion.h1>
        <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-widest text-sm">
          Select a master-built program to transform your physique
        </p>
      </header>

      {/* ================= PROGRAM CARDS ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {programs.map((program) => (
          <motion.div
            key={program.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden p-[1px] rounded-3xl transition-all ${
              selectedProgram?.id === program.id ? 'bg-gradient-to-br from-orange-500 to-orange-800 shadow-[0_0_25px_rgba(249,115,22,0.3)]' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => setSelectedProgram(selectedProgram?.id === program.id ? null : program)}
          >
            <div className="bg-[#121212] rounded-[23px] p-8 h-full flex flex-col justify-between cursor-pointer">
              <div>
                <span className="text-[10px] font-bold px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full uppercase tracking-tighter border border-orange-500/20">
                  {program.level}
                </span>
                <h2 className="text-2xl font-bold mt-4 mb-2 leading-tight">
                  {program.title}
                </h2>
              </div>
              
              <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-4">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                  {program.days.length} Days / Week
                </p>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-orange-500">
                  {selectedProgram?.id === program.id ? '−' : '+'}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= PROGRAM DETAILS ================= */}
      <AnimatePresence mode="wait">
        {selectedProgram && (
          <motion.div
            key={selectedProgram.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-32"
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">
                {selectedProgram.title} <span className="text-orange-500 text-xl font-normal not-italic ml-2 opacity-50">// Blueprint</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {selectedProgram.days.map((day, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="bg-gradient-to-b from-white/[0.07] to-transparent border border-white/10 rounded-[32px] p-8"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-sm font-black italic">D{index+1}</span>
                    {day.name}
                  </h3>

                  <div className="space-y-4">
                    {day.exercises.map((ex, i) => (
                      <div key={i} className="group flex items-center justify-between p-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-2xl transition-colors">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-200 group-hover:text-orange-400 transition-colors uppercase tracking-tight">
                            {ex.name}
                          </span>
                          {ex.alt && (
                            <span className="text-[10px] text-gray-600 font-medium italic">Alt: {ex.alt}</span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-black text-orange-500 tracking-tighter">
                            {ex.sets} <span className="text-[10px] text-gray-500 font-normal uppercase">Sets</span>
                          </div>
                          <div className="text-[11px] text-gray-400 font-mono">
                            {ex.reps} REPS | {ex.rest}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CARDIO SECTION ================= */}
      <section className="relative mt-32 p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[40px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
            Metabolic <span className="text-orange-500">Conditioning</span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardioWorkouts.map((cardio, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="bg-black/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-orange-500 uppercase tracking-tighter leading-none">
                    {cardio.name}
                  </h3>
                  <span className={`text-[8px] px-2 py-0.5 rounded shadow-sm font-bold uppercase ${
                    cardio.intensity === 'High' || cardio.intensity === 'Very High' ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'
                  }`}>
                    {cardio.intensity}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                  {cardio.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">{cardio.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}