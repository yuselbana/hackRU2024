import prismaClient from "@/app/libs/prismadb"
import { PrismaClient } from "@prisma/client"
export async function GET() {

    const newGrocery = await prismaClient.grocery.create({
        data : {
            name: "Poop",
            category: "pooop",
            price: 1,
        }
    })
    const newLocation = await prismaClient.location.create({
        data: {
            address:"testPoop",
            longitude:"12",
            latitude:"10"
        }
    })
}