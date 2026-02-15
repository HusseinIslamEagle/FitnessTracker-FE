const quotes = [
  "Discipline beats motivation.",
  "No pain, no growth.",
  "Consistency creates transformation.",
  "You vs You."
];

export default function MotivationStrip() {

  const random =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div
      className="rounded-3xl p-12 text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546484959-fac6b59e0f7a')"
      }}
    >
      <div className="bg-black/70 p-8 rounded-2xl backdrop-blur-xl">
        <h2 className="text-2xl font-bold text-orange-500">
          {random}
        </h2>
      </div>
    </div>
  );
}
