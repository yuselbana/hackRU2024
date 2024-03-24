import prismaClient from "@/app/libs/prismadb";
export async function GET() {
    const newGrocery = await prismaClient.grocery.create({
        data : {
            name: "Poop",
            category: "pooop",
            price: 1,
        }
    })
}