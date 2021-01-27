function getEnvironment() {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

const AUTH_URL = {
  development: "https://api.nav.no/innloggingsstatus/auth",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};

export const authUrl = AUTH_URL[getEnvironment()];
