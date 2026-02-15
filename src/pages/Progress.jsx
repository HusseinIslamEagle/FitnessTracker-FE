import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Progress() {
  const [entries, setEntries] = useState([]);
  const [goalWeight, setGoalWeight] = useState("");
  const [height, setHeight] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const [form, setForm] = useState({
    weight: "",
    bodyFat: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("progressData");
    const savedGoal = localStorage.getItem("goalWeight");
    const savedHeight = localStorage.getItem("userHeight");

    if (saved) setEntries(JSON.parse(saved));
    if (savedGoal) setGoalWeight(savedGoal);
    if (savedHeight) setHeight(savedHeight);
  }, []);

  const saveEntry = () => {
    if (!form.weight || !form.bodyFat) return;

    const lean = form.weight * (1 - form.bodyFat / 100);
    const fat = form.weight * (form.bodyFat / 100);

    const newEntry = {
      weight: parseFloat(form.weight),
      bodyFat: parseFloat(form.bodyFat),
      lean: parseFloat(lean.toFixed(2)),
      fat: parseFloat(fat.toFixed(2)),
      date: new Date().toLocaleDateString()
    };

    let updated;
    if (editingIndex !== null) {
      updated = [...entries];
      updated[editingIndex] = newEntry;
      setEditingIndex(null);
    } else {
      updated = [...entries, newEntry];
    }

    setEntries(updated);
    localStorage.setItem("progressData", JSON.stringify(updated));
    setForm({ weight: "", bodyFat: "" });
  };

  const deleteEntry = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    localStorage.setItem("progressData", JSON.stringify(updated));
  };

  const getAnalysis = () => {
    if (entries.length < 2) return null;

    const first = entries[0];
    const last = entries[entries.length - 1];

    const weightDiff = last.weight - first.weight;
    const fatDiff = last.fat - first.fat;
    const muscleDiff = last.lean - first.lean;

    return {
      weightDiff,
      fatDiff,
      muscleDiff,
      currentLean: last.lean
    };
  };

  const analysis = getAnalysis();

  return (
    <div className="min-h-[90vh] p-10 max-w-6xl mx-auto space-y-12 text-white">
      
      <h1 className="text-3xl font-bold text-center uppercase tracking-tighter">
        Progress Intelligence System
      </h1>

      {/* ================= SETTINGS ================= */}
      <div className="bg-[#0c0c0c] p-8 rounded-3xl border border-[#1a1a1a] grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Goal Weight (kg)"
          value={goalWeight}
          onChange={(e) => {
            setGoalWeight(e.target.value);
            localStorage.setItem("goalWeight", e.target.value);
          }}
          className="p-3 bg-black border border-[#1a1a1a] rounded-xl outline-none focus:border-gray-700 transition"
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
            localStorage.setItem("userHeight", e.target.value);
          }}
          className="p-3 bg-black border border-[#1a1a1a] rounded-xl outline-none focus:border-gray-700 transition"
        />
      </div>

      {/* ================= ENTRY FORM ================= */}
      <div className="bg-[#0c0c0c] p-8 rounded-3xl border border-[#1a1a1a] grid grid-cols-2 gap-4 shadow-xl">
        <input
          type="number"
          placeholder="Weight"
          value={form.weight}
          onChange={(e) => setForm({ ...form, weight: e.target.value })}
          className="p-3 bg-black border border-[#1a1a1a] rounded-xl outline-none focus:border-gray-700 transition placeholder-gray-600 text-white"
        />

        <input
          type="number"
          placeholder="Body Fat %"
          value={form.bodyFat}
          onChange={(e) => setForm({ ...form, bodyFat: e.target.value })}
          className="p-3 bg-black border border-[#1a1a1a] rounded-xl outline-none focus:border-gray-700 transition placeholder-gray-600 text-white"
        />

        <button
          onClick={saveEntry}
          className="col-span-2 py-3 bg-[#ff6b00] text-black font-bold rounded-xl hover:bg-[#e66000] transition active:scale-[0.98] uppercase"
        >
          {editingIndex !== null ? "Update Entry" : "Add Entry"}
        </button>
      </div>

      {/* ================= ANALYSIS (ONLY WHITE, ORANGE, RED) ================= */}
      {analysis && (
        <div className="bg-[#0c0c0c] p-8 rounded-3xl border border-[#1a1a1a] space-y-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#ff6b00] uppercase tracking-wider italic">Smart Analysis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-white font-medium">Muscle Gain/Loss: 
                <span className={`ml-2 font-bold ${analysis.muscleDiff >= 0 ? 'text-white' : 'text-red-600'}`}>
                  {analysis.muscleDiff > 0 ? `+${analysis.muscleDiff.toFixed(2)}` : analysis.muscleDiff.toFixed(2)} kg
                </span>
              </p>
              <p className="text-white font-medium">Current Muscle Mass: 
                <span className="ml-2 font-bold text-[#ff6b00]">{analysis.currentLean.toFixed(2)} kg</span>
              </p>
            </div>
            
            <div className="space-y-3 border-l border-[#1a1a1a] pl-8">
              <p className="text-white font-medium">Weight Change: 
                <span className="ml-2 font-bold text-white">{analysis.weightDiff.toFixed(1)} kg</span>
              </p>
              <p className="text-white font-medium">Fat Change: 
                <span className={`ml-2 font-bold ${analysis.fatDiff <= 0 ? 'text-white' : 'text-red-600'}`}>
                  {analysis.fatDiff.toFixed(2)} kg
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= CHART ================= */}
      {entries.length > 0 && (
        <div className="bg-[#0c0c0c] p-8 rounded-3xl border border-[#1a1a1a]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={entries}>
              <Line type="monotone" dataKey="weight" stroke="#ff6b00" strokeWidth={3} dot={{fill: '#ff6b00'}} name="Weight" />
              <Line type="monotone" dataKey="lean" stroke="#ffffff" strokeWidth={2} strokeDasharray="5 5" name="Muscle" />
              <CartesianGrid stroke="#1a1a1a" vertical={false} />
              <XAxis dataKey="date" stroke="#ffffff" fontSize={10} />
              <YAxis stroke="#ffffff" fontSize={10} />
              <Tooltip contentStyle={{backgroundColor: '#000', border: '1px solid #1a1a1a', color: '#fff'}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* ================= LIST ================= */}
      <div className="space-y-4">
        {entries.slice().reverse().map((e, i) => (
          <div key={i} className="bg-[#0c0c0c] p-6 rounded-2xl border border-[#1a1a1a] flex justify-between items-center transition hover:border-gray-700">
            <div>
              <p className="font-bold text-white text-lg">{e.date} — {e.weight}kg</p>
              <p className="text-sm font-medium mt-1">
                Muscle: <span className="text-[#ff6b00]">{e.lean}kg</span> | Fat: <span className="text-red-600">{e.bodyFat}%</span>
              </p>
            </div>
            <div className="flex gap-6">
              <button onClick={() => { setForm({ weight: e.weight, bodyFat: e.bodyFat }); setEditingIndex(entries.length - 1 - i); }} className="text-white font-bold text-xs uppercase hover:text-[#ff6b00] transition">Edit</button>
              <button onClick={() => deleteEntry(entries.length - 1 - i)} className="text-red-600 font-bold text-xs uppercase hover:text-red-500 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}