import { useState, useEffect } from "react";

import history from "../../history";

import { api } from "../../api";

type AuthInformationsProps = {
  login: string;
  senha: string;
};

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    authInformations: AuthInformationsProps
  ) {
    e.preventDefault();
    try {
      const { data } = await api.post("users/auth", authInformations);

      const { token } = data;

      localStorage.setItem("token", JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      history.push("/HomePrefeitura");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    history.push("/LoginPrefeitura");
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
