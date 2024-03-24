import {NextResponse} from 'next/server'
import prismaClient from '@/app/libs/prismadb';
export async function GET() {
        var allGroceries = []
    try {
        allGroceries = await prismaClient.grocery.findMany()
        console.log(allGroceries);
    } catch (error) {
        console.error(error)
    }
    return NextResponse.json(allGroceries)

}