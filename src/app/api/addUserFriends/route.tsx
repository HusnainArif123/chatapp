import { connect } from "@/dbConfig/dbConfig";
import UserFriends from "@/models/userFriends";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phoneNo } = body;

    if (!name || !phoneNo) {
      return NextResponse.json(
        { error: " name, and phoneNo are required" },
        { status: 400 }
      );
    }

    const existingFriend = await UserFriends.findOne({ phoneNo });

    if (existingFriend) {
      return NextResponse.json(
        { error: "A friend with this phone number already exists." },
        { status: 400 }
      );
    }

    const userFriend = new UserFriends({
      name,
      phoneNo,
    });
    await userFriend.save();
    return NextResponse.json(
      { message: "Successfully Added" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
