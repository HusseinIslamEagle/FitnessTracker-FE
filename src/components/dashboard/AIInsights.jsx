export default function AIInsights({ workouts }) {

  let message = "Start your discipline journey today 💪";

  const total = workouts.length;

  if (total > 5)
    message = "You're building consistency. Keep stacking wins 🔥";

  if (total > 15)
    message = "Neural discipline forming 🧠⚡";

  if (total > 30)
    message = "You're entering elite athlete behavior.";

  return (
    <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-orange-500 mb-3">
        AI Performance Analysis
      </h3>
      <p className="text-gray-300">{message}</p>
    </div>
  );
}
