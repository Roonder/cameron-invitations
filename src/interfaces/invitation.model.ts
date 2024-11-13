import type { Document } from "mongoose";

export interface Invitation extends Document {
    title: string;
    name: string;
    valid_to: number;
    table: number;
    confirmation: boolean;
    confirmed_at: Date;
    createdAt: Date;
    updatedAt: Date;
}

export type InvitationDTO = Pick<Invitation, "_id" | "confirmation" | "confirmed_at">