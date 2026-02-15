function calculateStreak(workouts) {
  if (!workouts.length) return 0;

  const dates = [
    ...new Set(workouts.map(w => w.date))
  ].sort();

  let streak = 1;

  for (let i = dates.length - 1; i > 0; i--) {
    const diff =
      (new Date(dates[i]) - new Date(dates[i - 1])) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export default function StatsGrid({ workouts }) {

  const total = workouts.length;
  const activeDays =
    [...new Set(workouts.map(w => w.date))].length;

  const streak = calculateStreak(workouts);

  const stats = [
    { label: "Total Workouts", value: total },
    { label: "Active Days", value: activeDays },
    { label: "Current Streak 🔥", value: streak }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
        >
          <div className="text-gray-400 mb-2">
            {stat.label}
          </div>
          <div className="text-3xl font-bold text-orange-500">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
