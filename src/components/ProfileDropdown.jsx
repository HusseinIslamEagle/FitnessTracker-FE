import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  /* =========================
     Get Display Name Correctly
  ========================== */
  const username =
    user?.displayName?.trim() ||
    user?.email?.split("@")[0] ||
    "User";

  /* =========================
     Close on Outside Click
  ========================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* =========================
     Logout
  ========================== */
  const handleLogout = async () => {
    await logout();
    setOpen(false);
    navigate("/feedback");
  };

  return (
    <div className="relative" ref={ref}>
      {/* ================= Neon Username Button ================= */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative font-semibold tracking-[0.18em] uppercase"
      >
        <span className="text-orange-500 drop-shadow-[0_0_10px_rgba(255,107,0,0.9)] transition group-hover:drop-shadow-[0_0_18px_rgba(255,107,0,1)]">
          {username}
        </span>

        {/* Animated underline */}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />

        {/* Arrow */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="inline-block ml-2 text-orange-400"
        >
          ▼
        </motion.span>
      </button>

      {/* ================= Dropdown Panel ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-5 w-60 rounded-2xl 
                       bg-white/5 backdrop-blur-2xl 
                       border border-white/10
                       shadow-[0_0_40px_rgba(255,107,0,0.15)]
                       p-4 space-y-2 z-50"
          >
            {/* Header */}
            <div className="text-xs text-gray-500 px-2">
              Logged in as
            </div>

            <div className="px-2 pb-3 text-orange-500 font-semibold tracking-wide border-b border-white/10">
              {username}
            </div>

            {/* Items */}
            <DropdownItem
              label="Settings"
              onClick={() => {
                navigate("/settings");
                setOpen(false);
              }}
            />

            <DropdownItem
              label="Support"
              onClick={() => {
                navigate("/contact");
                setOpen(false);
              }}
            />

            <DropdownItem
              label="Give Feedback"
              onClick={() => {
                navigate("/feedback");
                setOpen(false);
              }}
            />

            <div className="border-t border-white/10 my-2" />

            <DropdownItem
              label="Logout"
              danger
              onClick={handleLogout}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================= Reusable Item ================= */
function DropdownItem({ label, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200
        ${
          danger
            ? "text-red-400 hover:bg-red-500/10 hover:text-red-500"
            : "text-gray-300 hover:bg-orange-500/10 hover:text-orange-500"
        }`}
    >
      {label}
    </button>
  );
}
