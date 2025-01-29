import { z } from "zod";

import { initTRPC } from "@trpc/server";

import { db } from "../drizzle/index";
import { users } from "../drizzle/schema";

const t = initTRPC.context().create();

export const appRouter = t.router({
  getUsers: t.procedure.query(async () => {
    return db.select().from(users);
  }),

  addUser: t.procedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ input }) => {
      await db.insert(users).values(input);
      return { success: true };
    }),
});

export type AppRouter = typeof appRouter;
