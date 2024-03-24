import {PrismaClient} from "@prisma/client"

// const prismaClient = globalThis.prisma ||  new PrismaClient();
// if(process.env.NODE_ENV === "production") {
//     globalThis.prisma =prismaClient;
// }

let prismaClient

if (process.env.NODE_ENV === 'production') {
  prismaClient = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prismaClient = global.prisma
}
// console.log(process.env.NODE_ENV)


export default prismaClient;