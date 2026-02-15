import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    title: "Anterior x Posterior",
    description: `
High-Frequency Integrated Training (4+ Days/Week)

If you are looking to develop your entire physique scientifically and build symmetrical muscle mass, this is the program you’ve been searching for!

💎 Program Features:

• Detailed Video Tutorials
• Progress Tracking Log
• Expertly Curated Exercises
• Precision Programming (RPE, Rest, Reps)
• Interactive Private Community
• Comprehensive Instruction Guide
• Exclusive Partner Discounts

🚫 Not suitable for injuries or rehabilitation.

🎯 Ideal for:
• Total body development
• Structured scientific training
• All levels aiming for athletic physique
`
  },
  {
    title: "Arnold x U-L",
    description: `
The Ultimate 5-Day Hybrid Program

Combines Arnold Split with Upper-Lower system for maximum hypertrophy with calculated recovery.

💎 Program Features:

• Detailed Video Tutorials
• Weight & Rep Log
• Pro-Level Exercise Selection
• Exact Rest & Intensity Control
• Private Community Support
• Execution Guide & Discounts

🚫 Not suitable for injuries or rehab.

🎯 Ideal for:
• Plateau breakers
• High volume lifters
• Scientific 5-day structure lovers
`
  },
  {
    title: "3 Days Mass Builder",
    description: `
Maximum Mass. Minimum Time.

Efficient 3-day system designed for busy individuals who want serious muscle growth.

💎 Program Features:

• Full Video Explanations
• Digital Tracking Log
• High ROI Exercise Selection
• Interactive Group Support
• Performance Guidelines

🚫 Not suitable for injuries.

🎯 Ideal for:
• Busy professionals
• Recovery-focused trainees
• Smart hypertrophy seekers
`
  },
  {
    title: "Muscle Mommies",
    female: true,
    description: `
Build a Strong, Aesthetic Physique – Designed for Women.

Focused on glutes & lower body development while maintaining upper body tone.

💎 What You Get:

• Full Video Walkthroughs
• Progress Tracking Log
• Curated for Feminine Curves
• Calculated Intensity Programming
• Supportive Female Community
• Comprehensive Guide & Discounts

🚫 Not recommended for injury rehab.

🎯 Ideal for:
• Women wanting athletic feminine physique
• Serious structured training
• Visible transformation goals
`
  },
  {
    title: "Push Pull Leg x U-L",
    description: `
Integrated Strength & Hypertrophy System

Elite 5-day hybrid combining PPL + Upper Lower.

💎 Program Features:

• Detailed Video Coaching
• Structured Training Log
• Scientifically Selected Exercises
• Pre-Calculated Variables
• Interactive Community Support
• Partner Discounts

🚫 Not suitable for injuries.

🎯 Ideal for:
• Serious trainees
• Strength + symmetry builders
`
  },
  {
    title: "Elite Strength Formula",
    description: `
Advanced Strength & Mass Development System

High-performance progressive overload program.

💎 Program Features:

• Advanced Intensity Structure
• Optimized Recovery Model
• Strength Tracking System
• Elite-Level Programming

🚫 Not suitable for injuries.

🎯 Ideal for:
• Advanced lifters
• Performance-driven athletes
`
  }
];

export default function PackagesSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="py-24 px-10">
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="relative p-8 rounded-2xl border bg-[#111] border-gray-800 hover:border-orange-500 transition duration-300"
          >

            {/* 🎀 Ribbon for Muscle Mommies */}
            {plan.female && (
              <div className="absolute -top-4 -left-4 bg-pink-500 text-white px-4 py-1 text-xs rounded-full shadow-lg">
                🎀 For Women
              </div>
            )}

            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-black text-orange-500 text-xs px-3 py-1 rounded-full font-semibold">
              🔥 50% OFF
            </div>

            <h3 className="text-2xl font-bold mb-6 text-white">
              {plan.title}
            </h3>

            <ul className="space-y-2 text-gray-400 mb-8 text-sm">
              <li>✓ Full Video Explanation</li>
              <li>✓ Weight Tracking File</li>
              <li>✓ Advanced Exercise Selection</li>
              <li>✓ Private Community Access</li>
              <li>✓ Technique & Performance Guide</li>
            </ul>

            <div className="mb-6">
              <span className="line-through text-gray-500 text-lg mr-3">
                600 EGP
              </span>
              <span className="text-3xl font-bold text-orange-500">
                299 EGP
              </span>
            </div>

            <button className="w-full py-3 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-400 transition">
              Subscribe Now
            </button>

            <button
              onClick={() => setSelectedPlan(plan)}
              className="w-full mt-3 text-sm text-orange-500 hover:underline"
            >
              More Details
            </button>
          </motion.div>
        ))}

      </div>

      {/* ================= Modal ================= */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlan(null)}
          >
            <motion.div
              className="bg-[#111] max-w-4xl w-full p-10 rounded-3xl border border-gray-700 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-4xl font-bold mb-8 text-orange-500">
                {selectedPlan.title}
              </h3>

              <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed text-sm">
                {selectedPlan.description}
              </pre>

              <div className="mt-10">
                <span className="line-through text-gray-500 text-lg mr-3">
                  600 EGP
                </span>
                <span className="text-4xl font-bold text-orange-500">
                  299 EGP
                </span>
              </div>

              <button className="w-full mt-6 py-4 rounded-xl bg-orange-500 text-black font-bold hover:bg-orange-400 transition">
                Subscribe Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
