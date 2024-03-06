import { type ReactNode, createContext, useContext, useState } from "react";

type AuthState = {
  user: string;
  token: string;
};

type AuthContextValue = AuthState & {
  login: (user: string, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuthContext() {
  const authCtx = useContext(AuthContext);

  if (authCtx === null) {
    throw new Error("AuthContext is null - that should not be the case!");
  }

  return authCtx;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const savedUser = localStorage.getItem("user") ?? "";
  const [user, setUser] = useState<string>(savedUser);
  const savedToken = localStorage.getItem("token") ?? "";
  const [token, setToken] = useState<string>(savedToken);

  const ctx: AuthContextValue = {
    user: user,
    token: token,
    login(user, token) {
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      setUser(user);
      setToken(token);
    },
    logout() {
      localStorage.setItem("user", "");
      localStorage.setItem("token", "");
      setUser("");
      setToken("");
    },
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
