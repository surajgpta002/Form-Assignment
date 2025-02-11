import Fastify from "fastify";
import { Type } from "@sinclair/typebox";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

// Initialize Fastify with TypeBox support
Fastify().withTypeProvider<TypeBoxTypeProvider>();

export const TypeBoxSchema = Type.Object(
  {
    ngoName: Type.String({ minLength: 5, maxLength: 30 }),
    description: Type.String({ minLength: 10 }),
    YearOfCommencement: Type.String(),
    website: Type.Optional(Type.String()),
    spocName: Type.String({ minLength: 5, maxLength: 30 }),
    contactNumber: Type.String({ pattern: "^[0-9]{10}$" }),
    beneficialOwner: Type.String({ minLength: 5, maxLength: 30 }),
    socialMedia: Type.Optional(Type.String({ maxLength: 30 })),
  },
  { additionalProperties: false }
);
