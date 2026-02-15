import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function AuthModal({ type, close }) {
  const { loginWithGoogle, signup, login } = useAuth();

  const isSignup = type === "signup";

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignup) {
        await signup(form.email, form.password);

        // 🔥 هنا مستقبلاً هنخزن باقي البيانات في Firestore
        console.log("User Extra Data:", {
          name: form.name,
          age: form.age,
          gender: form.gender
        });

      } else {
        await login(form.email, form.password);
      }

      close();
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle();
      close();
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#111]/80 backdrop-blur-2xl p-10 rounded-3xl border border-gray-700 w-[450px] shadow-[0_0_60px_rgba(255,107,0,0.25)]"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ===== Signup Extra Fields ===== */}
          {isSignup && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-black border border-gray-700 rounded-xl focus:border-orange-500 transition"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                required
                min="10"
                max="80"
                className="w-full p-3 bg-black border border-gray-700 rounded-xl focus:border-orange-500 transition"
                value={form.age}
                onChange={handleChange}
              />

              <select
                name="gender"
                required
                className="w-full p-3 bg-black border border-gray-700 rounded-xl focus:border-orange-500 transition"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </>
          )}

          {/* ===== Common Fields ===== */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-xl focus:border-orange-500 transition"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-xl focus:border-orange-500 transition"
            value={form.password}
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="w-full py-3 bg-orange-500 text-black rounded-xl font-semibold 
            hover:bg-orange-400 hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]
            transition-all duration-300"
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Sign Up"
              : "Sign In"}
          </button>
        </form>

        {error && (
          <div className="text-red-500 text-sm mt-4 text-center">
            {error}
          </div>
        )}

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-gray-700" />
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-[1px] bg-gray-700" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          className="group w-full flex items-center justify-center gap-3 px-6 py-3 
          bg-white text-black font-medium rounded-xl
          hover:shadow-[0_0_25px_rgba(255,107,0,0.3)]
          hover:scale-[1.02]
          active:scale-95
          transition-all duration-300"
        >
          {/* Google SVG */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.69 1.22 9.19 3.6l6.85-6.85C35.91 2.43 30.39 0 24 0 14.64 0 6.62 5.44 2.69 13.32l7.98 6.19C12.54 13.8 17.81 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.5 24c0-1.63-.15-3.2-.44-4.7H24v9h12.7c-.55 2.96-2.2 5.47-4.7 7.15l7.19 5.59C43.87 36.93 46.5 30.95 46.5 24z"/>
            <path fill="#FBBC05" d="M10.67 28.51A14.49 14.49 0 0 1 9.5 24c0-1.56.27-3.07.75-4.49l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.86.92 7.51 2.56 10.68l8.11-6.17z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.19-5.59c-2 1.34-4.55 2.14-8.71 2.14-6.19 0-11.46-4.3-13.33-10.01l-8.11 6.17C6.62 42.56 14.64 48 24 48z"/>
          </svg>

          <span>Continue with Google</span>
        </button>

        <button
          onClick={close}
          className="mt-6 text-gray-500 text-sm w-full hover:text-orange-500 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
