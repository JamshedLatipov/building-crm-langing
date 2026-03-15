import { renderHook, act } from "@testing-library/react";
import { AIProvider, useAI } from "./AIContext";
import React from "react";

// Simple mock for localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("AIContext", () => {
  it("should provide default profile", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AIProvider>{children}</AIProvider>
    );
    const { result } = renderHook(() => useAI(), { wrapper });

    expect(result.current.profile.role).toBe("General");
  });

  it("should update profile", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AIProvider>{children}</AIProvider>
    );
    const { result } = renderHook(() => useAI(), { wrapper });

    act(() => {
      result.current.setProfile({ role: "CEO" });
    });

    expect(result.current.profile.role).toBe("CEO");
  });
});
