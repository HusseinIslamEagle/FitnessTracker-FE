import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { user, updateUserName, changePassword } = useAuth();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user?.displayName) {
      setName(user.displayName);
    }
  }, [user]);

  const saveName = async () => {
    if (!name.trim()) return;

    await updateUserName(name.trim());
    alert("Name Updated Successfully");
  };

  const handlePassword = async () => {
    if (!password) return;

    await changePassword(password);
    alert("Password Updated Successfully");
    setPassword("");
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="bg-[#111] border border-gray-700 rounded-3xl p-10 w-[500px] space-y-8 shadow-2xl">

        <h2 className="text-2xl font-bold text-center">
          Account Settings
        </h2>

        {/* NAME SECTION */}
        <div className="space-y-3">
          <label className="text-gray-400">Display Name</label>

          <input
            className="w-full p-3 bg-black border border-gray-700 rounded-xl focus:border-orange-500 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={saveName}
            className="w-full py-3 bg-orange-500 text-black rounded-xl hover:bg-orange-400 transition"
          >
            Save Name
          </button>
        </div>

        {/* PASSWORD SECTION */}
        <div className="space-y-3">
          <label className="text-gray-400">Change Password</label>

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 bg-black border border-gray-700 rounded-xl focus:border-orange-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handlePassword}
            className="w-full py-3 bg-orange-500 text-black rounded-xl hover:bg-orange-400 transition"
          >
            Update Password
          </button>
        </div>

      </div>
    </div>
  );
}
