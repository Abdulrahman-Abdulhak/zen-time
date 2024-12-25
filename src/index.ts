import { print, repeat, wait } from "./core/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "/",
});

print("Hello test 1");

print(repeat(print, 2, "test"));

print("then");
