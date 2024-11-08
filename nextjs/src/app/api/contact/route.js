import contactModel from "@/model/contact";
import dbConnect from "@/utils/dbCoon";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();

        await dbConnect();

        await contactModel.create(body);

        return NextResponse.json({
            message: "Message sent successfully!"
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: "Server Error, please try again!"
        }, {
            status: 400
        })
    }
}