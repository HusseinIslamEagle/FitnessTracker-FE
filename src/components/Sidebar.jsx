import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon,
  LayoutDashboard,
  Dumbbell,
  LineChart,
  Activity,
  Flame
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const nav = [
    { icon: <LayoutDashboard size={22} strokeWidth={2.5} />, path: "/dashboard" },
    { icon: <Dumbbell size={22} strokeWidth={2.5} />, path: "/workouts" },
    { icon: <LineChart size={22} strokeWidth={2.5} />, path: "/progress" },
    { icon: <Activity size={22} strokeWidth={2.5} />, path: "/tracker" },
    { icon: <Flame size={22} strokeWidth={2.5} />, path: "/calories" }
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -120 }}
            animate={{ x: 0 }}
            exit={{ x: -120 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed top-0 left-0 h-full w-[110px] 
                       bg-white/5 backdrop-blur-2xl 
                       border-r border-white/10 
                       z-50 flex flex-col items-center py-10"
          >

            {/* ===== HOME BUTTON (نازل لتحت شوية) ===== */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="mt-25 mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-2xl transition ${
                  location.pathname === "/"
                    ? "bg-orange-500/30 text-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.6)]"
                    : "text-white hover:text-orange-500"
                }`}
              >
                <HomeIcon size={24} strokeWidth={2.5} />
              </motion.div>
            </Link>

            {/* Divider */}
            <div className="w-10 h-px bg-white/10 mb-8" />

            {/* باقي العناصر */}
            <div className="flex flex-col items-center space-y-8">
              {nav.map((item, i) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-2xl transition ${
                        active
                          ? "bg-orange-500/20 text-orange-500"
                          : "text-gray-400 hover:text-orange-500"
                      }`}
                    >
                      {item.icon}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
