import { create } from "zustand";

import { useState, useEffect } from "react";
import { createJSONStorage, persist } from "zustand/middleware";
import { UserStore, UserType } from "@/app/_types/type";

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>(() => result);

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (userData: UserType) => set({ user: userData }),
      clearUser: () => set({ user: null }),
    }),
    { name: "userStore", storage: createJSONStorage(() => localStorage) }
  )
);
