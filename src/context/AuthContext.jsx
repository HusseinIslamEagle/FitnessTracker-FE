import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updatePassword
} from "firebase/auth";

import { auth, googleProvider } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= AUTH LISTENER ================= */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await currentUser.reload(); // مهم جداً
        setUser({ ...auth.currentUser });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  /* ================= SIGN UP ================= */
  const signup = async (email, password, name) => {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (name) {
      await updateProfile(result.user, {
        displayName: name
      });
    }

    await result.user.reload();
    setUser({ ...result.user });
  };

  /* ================= LOGIN ================= */
  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    await result.user.reload();
    setUser({ ...result.user });
  };

  /* ================= GOOGLE LOGIN ================= */
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    await result.user.reload();
    setUser({ ...result.user });
  };

  /* ================= LOGOUT ================= */
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  /* ================= UPDATE NAME ================= */
  const updateUserName = async (newName) => {
    if (!auth.currentUser) return;

    await updateProfile(auth.currentUser, {
      displayName: newName
    });

    await auth.currentUser.reload();
    setUser({ ...auth.currentUser });
  };

  /* ================= CHANGE PASSWORD ================= */
  const changePassword = async (newPassword) => {
    if (!auth.currentUser) return;

    await updatePassword(auth.currentUser, newPassword);
  };

  const value = {
    user,
    signup,
    login,
    loginWithGoogle,
    logout,
    updateUserName,
    changePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
