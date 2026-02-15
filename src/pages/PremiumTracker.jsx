import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Trash2, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "fitness_tracker_unlimited_v1";

export default function FitnessTracker() {
  const navigate = useNavigate();

  /* =========================
      INITIAL STATE FROM STORAGE
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

  return (
    <div className="min-h-screen px-10 py-16 bg-[#0f0f0f] text-white">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Fitness <span className="text-orange-500">Tracker</span>
      </h1>

      {message && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center text-orange-500 font-bold mb-4"
        >
          {message}
        </motion.p>
      )}

      <div className="grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-8 rounded-3xl border border-gray-800 space-y-6"
        >
          <h2 className="text-xl font-semibold">
            {editingId ? "Update Record" : "Log Workout"}
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
              className="w-full p-4 bg-black border border-gray-700 rounded-xl outline-none focus:border-orange-500 transition placeholder-gray-600"
            />
          ))}

          <button
            type="submit"
            className="w-full py-4 bg-orange-500 text-black font-black uppercase rounded-xl hover:bg-orange-400 transition active:scale-95"
          >
            {editingId ? "Update Entry" : "Add Entry"}
          </button>
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
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {workouts.slice().reverse().map((w) => (
                <div
                  key={w.id}
                  className="bg-black p-4 rounded-xl border border-gray-700 flex justify-between items-center group hover:border-orange-500/50 transition"
                >
                  <div>
                    <p className="font-bold text-orange-500 uppercase tracking-tight">
                      {w.exercise}
                    </p>
                    <p className="text-sm text-gray-400">
                      {w.sets} × {w.reps} × {w.weight} kg
                    </p>
                    <p className="text-[10px] text-gray-600 font-bold uppercase mt-1">{w.date}</p>
                  </div>

                  <div className="flex space-x-3">
                    <button onClick={() => editWorkout(w)}>
                      <Pencil size={18} className="text-gray-500 hover:text-white transition" />
                    </button>

                    <button onClick={() => deleteWorkout(w.id)}>
                      <Trash2 size={18} className="text-gray-500 hover:text-red-600 transition" />
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
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Total Volume Moved</p>
        <p className="text-5xl font-black text-orange-500 italic uppercase">
          {totalVolume} <span className="text-sm not-italic font-normal text-gray-600">kg</span>
        </p>
      </div>
    </div>
  );
}