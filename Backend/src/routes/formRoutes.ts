import { FastifyInstance, FastifyRequest } from "fastify";
import Fastify from "fastify";
import { Form } from "../schema/formSchema";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { TypeBoxSchema } from "../schema/typeBoxSchema";

const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>();

export default async function userRoutes(server: FastifyInstance) {
  server.post(
    "/forms",
    {
      schema: {
        body: TypeBoxSchema,
      },
    },
    async (request, reply) => {
      try {
        const form = new Form(request.body);

        await form.save();
        reply.code(201).send(form);
      } catch (error) {
        reply.code(400).send(error);
      }
    }
  );
}
