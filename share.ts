import { resolve, dirname } from "https://deno.land/std/path/mod.ts";

const currentModuleUrl = new URL(import.meta.url);
const currentModulePath = currentModuleUrl.pathname;

// 2. 计算项目根目录（根据 env.ts 的位置调整 ../ 的数量）
// 示例：config/env.ts → 上一级是项目根目录（../）
const rootDir = resolve(dirname(currentModulePath));

// 3. 拼接 .env 文件的绝对路径
export const envFilePath = resolve(rootDir, ".env");

// 可选：导出项目根目录路径（方便其他文件使用）
export const rootDirPath = rootDir;
