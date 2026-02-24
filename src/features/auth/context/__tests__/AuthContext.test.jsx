import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";

// ✅ 0) Mock local firebase module to avoid env dependency in tests
vi.mock("../../firebase", () => ({
  auth: {},
  googleProvider: {},
}));

// ✅ 1) Mock firebase/app
vi.mock("firebase/app", () => ({
  initializeApp: vi.fn(() => ({})),
}));

// ✅ 2) Mock firebase/auth (لازم نضيف getAuth و GoogleAuthProvider)
const onAuthStateChangedMock = vi.fn();

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(() => ({})),
  GoogleAuthProvider: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  signOut: vi.fn(),
  updatePassword: vi.fn(),
  updateProfile: vi.fn(),
  onAuthStateChanged: (...args) => onAuthStateChangedMock(...args),
}));

// ✅ 3) بعد الموكات: استورد AuthProvider
import { AuthProvider, useAuth } from "../AuthContext";

function Viewer() {
  const { user, loading } = useAuth();
  if (loading) return <div>loading...</div>;
  return <div data-testid="user">{user ? user.email : "null"}</div>;
}

describe("AuthProvider / useAuth", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("when onAuthStateChanged returns a user -> useAuth() exposes user", async () => {
    const fakeUser = { uid: "1", email: "test@example.com" };

    onAuthStateChangedMock.mockImplementation((_auth, cb) => {
      cb(fakeUser);
      return () => {};
    });

    render(
      <AuthProvider>
        <Viewer />
      </AuthProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("user").textContent).toBe("test@example.com")
    );
  });

  it("when onAuthStateChanged returns null -> user=null", async () => {
    onAuthStateChangedMock.mockImplementation((_auth, cb) => {
      cb(null);
      return () => {};
    });

    render(
      <AuthProvider>
        <Viewer />
      </AuthProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("user").textContent).toBe("null")
    );
  });
});