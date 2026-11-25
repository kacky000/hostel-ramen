// One sentence about the best meal I ever had.
import { mkdirSync, writeFileSync } from "node:fs";

const meal =
  "The best meal I ever had was cup ramen at 3 a.m. in a Tokyo hostel kitchen, eaten standing up beside a stranger who had lost his luggage and still split his last boiled egg with me.";

const size = [...meal].length;
if (size < 1 || size > 200) throw new Error(`sentence is ${size} characters`);

const where = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(where, { recursive: true });
writeFileSync(`${where}/entry.txt`, meal, "utf8");
