export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      DATABASE_USER: string;
      DATABASE_PASS: string;
      DATABASE_HOST: string;
      DATABASE_PORT: string;
      DATABASE_NAME: string;
    }
  }
}
