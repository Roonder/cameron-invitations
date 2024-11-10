import { type NextRequest, NextResponse } from "next/server";
// Database
import { connect } from "@/lib/db";
// Models
import Invitation from "@/models/Invitation";
import { Invitation as InvitationInterface, InvitationDTO } from "@/interfaces/invitation.model";

export async function GET(req: NextRequest) {
    await connect();

    const id = req.headers.get("INVITATION-ID");

    if(id) {
        try {
            const invitation = await Invitation.findById(id).lean<InvitationInterface>();

            if(invitation) 
                return NextResponse.json({ message: "Invitación obtenida exitosamente.", invitation }, { status: 200 });

            return NextResponse.json({ message: "Invitación no encontrada.", invitation: undefined }, { status: 404 });
        } catch (error) {
            if(error instanceof Error) {
                console.log("ERROR: ", error.message);
                return NextResponse.json({ message: "Hubo un error, intente más tarde.;"}, { status: 500 });
            }
        }
    }

    try {
        const invitations = await Invitation.find({}).lean<InvitationInterface[]>();

        if(invitations) 
            return NextResponse.json({ message: "Invitaciones obtenidas exitosamente.", invitations }, { status: 200 });

        return NextResponse.json({ message: "Invitaciones no encontradas.", invitation: undefined }, { status: 404 });
    } catch (error) {
        if(error instanceof Error) {
            console.log("ERROR: ", error.message);
            return NextResponse.json({ message: "Hubo un error, intente más tarde.;"}, { status: 500 });
        }
    }
}

export default async function PUT(req: NextRequest) {
    await connect();

    const body: InvitationDTO = await req.json();

    try {
        const updateInvitation = await Invitation.findByIdAndUpdate(body._id, {
            "$set": {
                "confirmation": body.confirmation,
                "confirmed_at": body.confirmed_at
            }
        });

        if(updateInvitation)
            return NextResponse.json({ message: "¡Gracias por confirmar su asistencia!" }, { status: 202 });

        return NextResponse.json({ message: "Ups, nada ocurrió." }, { status: 204 });
    } catch (error) {
        if(error instanceof Error) {
            console.log("ERROR: ", error.message);
            return NextResponse.json({ message: "Hubo un error, intente más tarde.;"}, { status: 500 });
        }
    }
}
