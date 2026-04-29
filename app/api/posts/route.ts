import { NextResponse } from "next/server";
import posts from "@/data/posts";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return NextResponse.json(posts);
}
