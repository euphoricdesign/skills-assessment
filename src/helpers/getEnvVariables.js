// Esta función retorna un objeto que contiene todas las variables de entorno disponibles en import.meta.env.
export const getEnvVariables = () => ({
    VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID,
    VERCEL_API_TOKEN: process.env.VERCEL_API_TOKEN,
  });