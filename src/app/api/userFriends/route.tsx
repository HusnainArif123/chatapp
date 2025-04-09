import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import UserFriends from "@/models/userFriends";

connect();

export async function GET(req: NextRequest) {
  try {
    const userFriends = await UserFriends.find();

    return NextResponse.json({ friends: userFriends }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
