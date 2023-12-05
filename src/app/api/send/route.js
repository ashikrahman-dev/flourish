import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ hello: "World!" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
