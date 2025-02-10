"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const zod_1 = require("zod");
const server_1 = require("@trpc/server");
const index_1 = require("../drizzle/index");
const schema_1 = require("../drizzle/schema");
const t = server_1.initTRPC.context().create();
exports.appRouter = t.router({
    getUsers: t.procedure.query(async () => {
        return index_1.db.select().from(schema_1.users);
    }),
    addUser: t.procedure
        .input(zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
    }))
        .mutation(async ({ input }) => {
        await index_1.db.insert(schema_1.users).values(input);
        return { success: true };
    }),
});
//# sourceMappingURL=router.js.map