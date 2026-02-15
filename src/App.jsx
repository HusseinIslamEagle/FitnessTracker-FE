import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

import { useAuth } from "./context/AuthContext";
import AuthModal from "./components/AuthModal";
import CustomCursor from "./components/CustomCursor";
import Sidebar from "./components/Sidebar";
import ProfileDropdown from "./components/ProfileDropdown";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import UserHome from "./pages/UserHome";
import Contact from "./pages/Contact";
import CalorieCalculator from "./pages/CalorieCalculator";
import FitnessTracker from "./pages/FitnessTracker";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Progress from "./pages/Progress";
import PremiumTracker from "./pages/PremiumTracker";
import logo from "./assets/logo.png";

/* =========================
   Animated Page Wrapper
========================== */
function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}

function Layout() {
  const location = useLocation();
  const { user } = useAuth();

  const [modal, setModal] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const guestNav = [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
    { label: "Calorie Calculator", path: "/calories" },
    { label: "Fitness Tracker", path: "/tracker" }
  ];

  const NavItem = ({ label, path }) => {
    const isActive = location.pathname === path;

    return (
      <Link to={path} className="relative px-4 py-2 font-medium">
        {isActive && (
          <motion.div
            layoutId="activePill"
            className="absolute inset-0 rounded-full bg-orange-500/20 border border-orange-500/40"
          />
        )}
        <span
          className={`relative z-10 ${
            isActive
              ? "text-orange-500"
              : "text-gray-400 hover:text-orange-500"
          }`}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      <CustomCursor />

      {user && (
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      )}

      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 border-b border-gray-800 backdrop-blur-xl bg-black/70">

        <div className="flex items-center space-x-6">

          {user && (
            <button
              onClick={() => setSidebarOpen(prev => !prev)}
              className="text-gray-400 hover:text-orange-500"
            >
              <Menu size={28} />
            </button>
          )}

          {!user && (
            <div className="flex space-x-4">
              {guestNav.map(item => (
                <NavItem key={item.label} {...item} />
              ))}
            </div>
          )}
        </div>

        <Link to="/">
          <img src={logo} alt="logo" className="h-14" />
        </Link>

        <div className="flex items-center space-x-6">

          {!user ? (
            <>
              <button
                onClick={() => setModal("signup")}
                className="px-6 py-2 bg-orange-500 text-black rounded-full"
              >
                Start Your Journey
              </button>

              <button
                onClick={() => setModal("signin")}
                className="text-gray-400 hover:text-orange-500"
              >
                Sign In
              </button>
            </>
          ) : (
            <ProfileDropdown />
          )}

        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route path="/"element={<AnimatedPage>{user ? <UserHome /> : <Home />}</AnimatedPage>}/>
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/calories" element={<AnimatedPage><CalorieCalculator /></AnimatedPage>} />
          <Route path="/settings" element={<AnimatedPage><Settings /></AnimatedPage>} />
          <Route path="/feedback" element={<AnimatedPage><Feedback /></AnimatedPage>}/>
          <Route path="/dashboard" element={<AnimatedPage><Dashboard/></AnimatedPage>}/>
          <Route path="/Workouts" element={<AnimatedPage><Workouts/></AnimatedPage>}/>
          <Route path="/Progress" element={<AnimatedPage><Progress/></AnimatedPage>}/>
          <Route path="/Tracker" element={<AnimatedPage><PremiumTracker/></AnimatedPage>}/>
        </Routes>
      </AnimatePresence>

      {modal && (
        <AuthModal type={modal} close={() => setModal(null)} />
      )}

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Coach Belghamdi
      </footer>

    </div>
  );
}

export default function App() {
  return <Layout />;
}
