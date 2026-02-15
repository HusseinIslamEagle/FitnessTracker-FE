import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Lock, Trash2, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MAX_WORKOUTS = 5;
const STORAGE_KEY = "limited_fitness_tracker_final";

export default function FitnessTracker() {
  const navigate = useNavigate();

  /* =========================
     INITIAL STATE FROM STORAGE
     الحل النهائي
  ========================== */
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [workout, setWorkout] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  /* =========================
     SAVE TO STORAGE
  ========================== */
  const persist = (data) => {
    setWorkouts(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  /* =========================
     AUTO DATE
  ========================== */
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  /* =========================
     ADD / UPDATE
  ========================== */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!workout.exercise || !workout.sets || !workout.reps || !workout.weight)
      return;

    if (!editingId && workouts.length >= MAX_WORKOUTS) return;

    const newWorkout = {
      ...workout,
      id: editingId ? editingId : Date.now(),
      date: today
    };

    if (editingId) {
      const updated = workouts.map((w) =>
        w.id === editingId ? newWorkout : w
      );
      persist(updated);
      setEditingId(null);
    } else {
      const previous = workouts.filter(
        (w) => w.exercise === workout.exercise
      );

      if (
        previous.length > 0 &&
        Math.max(...previous.map((w) => Number(w.weight))) <
          Number(workout.weight)
      ) {
        setMessage("🔥 New PR!");
        setTimeout(() => setMessage(""), 2000);
      }

      persist([...workouts, newWorkout]);
    }

    setWorkout({
      exercise: "",
      sets: "",
      reps: "",
      weight: ""
    });
  };

  /* =========================
     DELETE
  ========================== */
  const deleteWorkout = (id) => {
    const filtered = workouts.filter((w) => w.id !== id);
    persist(filtered);
  };

  /* =========================
     EDIT
  ========================== */
  const editWorkout = (w) => {
    setWorkout({
      exercise: w.exercise,
      sets: w.sets,
      reps: w.reps,
      weight: w.weight
    });
    setEditingId(w.id);
  };

  /* =========================
     STATS
  ========================== */
  const totalVolume = useMemo(() => {
    return workouts.reduce(
      (acc, w) => acc + w.sets * w.reps * w.weight,
      0
    );
  }, [workouts]);

  const progressPercent = (workouts.length / MAX_WORKOUTS) * 100;
  const isLocked = workouts.length >= MAX_WORKOUTS && !editingId;

  const goToPackages = () => {
    navigate("/#packages");
  };

  return (
    <div className="min-h-screen px-10 py-16 bg-[#0f0f0f] text-white">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Fitness <span className="text-orange-500">Tracker</span>
      </h1>

      {/* Progress */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="flex justify-between text-sm mb-2">
          <span>{workouts.length} / {MAX_WORKOUTS} Used</span>
          {isLocked && (
            <span className="text-orange-500 font-semibold">
              Limit Reached
            </span>
          )}
        </div>

        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-orange-500"
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-8 rounded-3xl border border-gray-800 space-y-6"
        >
          <h2 className="text-xl font-semibold">
            {editingId ? "Edit Workout" : "Log Workout"}
          </h2>

          {["exercise", "sets", "reps", "weight"].map((field) => (
            <input
              key={field}
              type={field === "exercise" ? "text" : "number"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={workout[field]}
              onChange={(e) =>
                setWorkout({ ...workout, [field]: e.target.value })
              }
              disabled={isLocked}
              className="w-full p-4 bg-black border border-gray-700 rounded-xl"
            />
          ))}

          <button
            type="submit"
            disabled={isLocked}
            className="w-full py-4 bg-orange-500 text-black font-bold rounded-xl"
          >
            {editingId ? "Update Workout" : "Add Workout"}
          </button>

          {isLocked && (
            <div className="mt-6 bg-black p-4 rounded-xl border border-orange-500 flex justify-between items-center">
              <p className="text-orange-500 font-semibold">
                Upgrade for unlimited tracking
              </p>

              <button onClick={goToPackages}>
                <Lock className="text-orange-500 hover:scale-110 transition" />
              </button>
            </div>
          )}
        </form>

        {/* HISTORY */}
        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-6">
            Workout History
          </h2>

          {workouts.length === 0 ? (
            <p className="text-gray-500">
              Start your transformation today 💪
            </p>
          ) : (
            <div className="space-y-4">
              {workouts.map((w) => (
                <div
                  key={w.id}
                  className="bg-black p-4 rounded-xl border border-gray-700 flex justify-between"
                >
                  <div>
                    <p className="font-semibold text-orange-500">
                      {w.exercise}
                    </p>
                    <p className="text-sm text-gray-400">
                      {w.sets} × {w.reps} × {w.weight} kg
                    </p>
                    <p className="text-xs text-gray-500">{w.date}</p>
                  </div>

                  <div className="flex space-x-3">
                    <button onClick={() => editWorkout(w)}>
                      <Pencil size={18} className="text-gray-400 hover:text-orange-500 transition" />
                    </button>

                    <button onClick={() => deleteWorkout(w.id)}>
                      <Trash2 size={18} className="text-gray-400 hover:text-red-500 transition" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* STATS */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm">Total Volume</p>
        <p className="text-4xl font-bold text-orange-500">
          {totalVolume}
        </p>
      </div>
    </div>
  );
}
