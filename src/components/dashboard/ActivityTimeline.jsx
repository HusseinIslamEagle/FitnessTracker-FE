export default function ActivityTimeline({ workouts }) {

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">

      <h3 className="text-xl font-semibold mb-6">
        Activity Timeline
      </h3>

      <div className="space-y-4">

        {workouts.slice(-5).reverse().map((w, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full" />
            <div className="text-gray-300">
              Workout on {w.date}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
