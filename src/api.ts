function getEnvironment(): "production" | "development" {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

export const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

type EnvUrl = { development: string; production: string };

const AUTH_URL: EnvUrl = {
  development: "https://api.nav.no/innloggingsstatus/auth",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};

export interface AuthResponse {
  authenticated: boolean;
  name: string;
  securityLevel: "3" | "4";
}

export const authUrl = AUTH_URL[getEnvironment()];
