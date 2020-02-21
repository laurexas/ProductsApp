import * as path from "path";
import { config as dotenvConfig } from "dotenv";

export interface EnvConfig {
  SERVER_PORT: number;
  PORT: number;
  HOST: string;
  USER: string;
  PASSWORD: string;
  DATABASE: string;
}

export function getEnv(): Partial<EnvConfig> {
  dotenvConfig({ path: path.resolve(process.cwd(), ".env") });

  return process.env;
}
