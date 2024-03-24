import {NextResponse} from 'next/server'
import prismaClient from '@/app/libs/prismadb'
export async function GET () {
    var allLocations = []
    try {
         allLocations = await prismaClient.location.findMany()
        console.log(allLocations);
    } catch (error) {
        
    }
    return NextResponse.json(allLocations)
}