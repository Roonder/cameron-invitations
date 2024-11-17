import { Schema, models, model } from "mongoose";
import { Invitation as InvitationInterface } from "@/interfaces/invitation.model";

const invitationSchema = new Schema<InvitationInterface>({
    title: {
        type: String
    },
    name: {
        type: String
    },
    valid_to: {
        type: Number
    },
    table: {
        type: Schema.Types.Mixed
    },
    confirmation: {
        type: Boolean,
        default: null
    },
    confirmed_at: {
        type: Date
    }
}, {
    timestamps: true
});

const Invitation = models?.Invitation || model("Invitation", invitationSchema);

export default Invitation;