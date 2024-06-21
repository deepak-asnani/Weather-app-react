import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { TextEncoder } from "node:util";

global.TextEncoder = TextEncoder;

export const server = setupServer(...handlers);
