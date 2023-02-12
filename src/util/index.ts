import { AppEnv } from "../types";

export const getEnv = () => {
    return process.env as unknown as AppEnv;
};