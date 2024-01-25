import { z } from "zod";
import { authOptions } from '~/server/auth';
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";
  
export const categoryRouter = createTRPCRouter({

    create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.category.create({
        data: {
          title: input.title
          // createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    })

,
    getAll: protectedProcedure
    .query(async({ctx})=>{
        return ctx.db.category.findMany()
    })
})