import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { hash } from "bcryptjs";
import { customAlphabet } from "nanoid";
// import { prisma } from "~/server/db";

export const accountsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        email: z.string(),
        name: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const exists = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });
      if (exists) {
        return {
          status: "409",
          message: "A user with that email address already exists",
        };
      }

      const hashPass = await hash(input.password, 10);
      const alphabet = "0123456789";
      const nanoid = customAlphabet(alphabet, 5);
      let error = false;

      await ctx.prisma.user
        .create({
          data: {
            name: input.name,
            email: input.email,
            password: hashPass,
            tag: nanoid(),
          },
        })
        .catch(() => {
          error = true;
        });
      if (error) {
        return {
          status: "409",
          message:
            "There was an error creating your account, try again or change your username",
        };
      } else {
        return {
          status: "201",
          message: "User created successfully",
        };
      }
    }),

  // Create dummy users for testing
  // dummyUsers: publicProcedure.query(async () => {
  //   for (let i = 0; i < 100; i++) {
  //     const hashPass = await hash("testpass", 10);
  //     const name = `user${i}`
  //     const email = `${name}@example.com`

  //     await prisma.user.create({
  //       data: {
  //         name: name,
  //         email: email,
  //         password: hashPass,
  //       },
  //     });
  //     console.log(`[${i}] Generated account: ${name} - ${email}`);
  //   }
  // }),


  getSecretMessage: protectedProcedure.query(() => {
    return "You can now see this secret message!";
  }),
});
