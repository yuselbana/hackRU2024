import {PrismaClient} from "@prisma/client"

// const prismaClient = globalThis.prisma ||  new PrismaClient();
// if(process.env.NODE_ENV === "production") {
//     globalThis.prisma =prismaClient;
// }

const prismaClient = new PrismaClient();


export default prismaClient;