import path from "node:path";
import { exec as execSource } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs/promises";

export const exec = promisify(execSource);

export const readDistFile = async (filePath: string) => {
  if (filePath[0] === "/") {
    filePath = filePath.slice(1);
  }
  const args = filePath.split("/");
  filePath = path.resolve(__dirname, "..", "..", "dist", ...args);
  const buffer = await fs.readFile(filePath);
  return buffer.toString();
};
