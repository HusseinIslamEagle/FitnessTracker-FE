import { useEffect, useState } from "react";

export default function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const [activeDay, setActiveDay] = useState("upper1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExercises = async () => {
      const response = await fetch(
        "https://wger.de/api/v2/exerciseinfo/?language=2&limit=40"
      );
      const data = await response.json();

      const formatted = data.results.map((exercise) => {
        const translation = exercise.translations.find(
          (t) => t.language === 2
        );

        return {
          id: exercise.id,
          name: translation ? translation.name : "Exercise",
          category: exercise.category?.name || "",
        };
      });

      setExercises(formatted);
      setLoading(false);
    };

    loadExercises();
  }, []);

  if (loading)
    return (
      <div className="text-center py-10 text-gray-600 text-lg">
        Loading program...
      </div>
    );

  const upperExercises = exercises.filter((ex) =>
    ex.category.toLowerCase().includes("arms") ||
    ex.category.toLowerCase().includes("chest") ||
    ex.category.toLowerCase().includes("back") ||
    ex.category.toLowerCase().includes("shoulders")
  );

  const lowerExercises = exercises.filter((ex) =>
    ex.category.toLowerCase().includes("legs")
  );

  const program = {
    upper1: upperExercises.slice(0, 6),
    lower1: lowerExercises.slice(0, 6),
    upper2: upperExercises.slice(6, 12),
    lower2: lowerExercises.slice(6, 12),
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20">

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["upper1", "lower1", "upper2", "lower2"].map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
              activeDay === day
                ? "bg-indigo-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {day.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {program[activeDay]?.map((exercise) => (
          <div
            key={exercise.id}
            className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
              {exercise.name}
            </h3>

            <p className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition duration-500">
              Click to log this exercise in your workout session.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
