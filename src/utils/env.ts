export const env = (key: string) => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};

const ENVIRONMENT = {
  API_URL: env("REACT_APP_API_URL"),
  API_KEY: env("REACT_APP_API_KEY"),
};

export default ENVIRONMENT;