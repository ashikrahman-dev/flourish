import { NextResponse } from "next/server";

export async function GET(req, res) {
    NextResponse.json({ status: true });
}
