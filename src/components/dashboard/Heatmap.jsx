export default function Heatmap({ workouts }) {

  const last30 = [];

  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    last30.push(d.toISOString().split("T")[0]);
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">

      <h3 className="text-xl font-semibold mb-6">
        30-Day Activity Heatmap
      </h3>

      <div className="grid grid-cols-10 gap-2">

        {last30.map((date, i) => {
          const count =
            workouts.filter(w => w.date === date).length;

          return (
            <div
              key={i}
              className="w-6 h-6 rounded-md"
              style={{
                background:
                  count === 0
                    ? "#1f1f1f"
                    : `rgba(255,107,0,${0.3 + count * 0.2})`
              }}
            />
          );
        })}

      </div>
    </div>
  );
}
