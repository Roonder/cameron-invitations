"use client"
import { Ref, forwardRef, useMemo, useState, ReactNode } from "react";
import { great_vibes } from "@/app/fonts";
// Hooks
import { useInvitations } from "@/hooks/useInvitations";
// Types
import { Invitation } from "@/interfaces/invitation.model";

interface MainDashboardProps {
    props?: ReactNode;
}

export const MainDashboard = forwardRef(({
    ...props
}: MainDashboardProps, ref: Ref<HTMLDivElement>) => {
    const { invitations, isLoading } = useInvitations();
    const [filter, setFilter] = useState<string>("pending");

    const filteredInvitations = useMemo((): Invitation[] => {
        if(invitations) {
            if(filter === "pending") return invitations.filter((invitation: Invitation) => invitation.confirmation === null);
            
            if(filter === "confirmed") return invitations.filter((invitation: Invitation) => invitation.confirmation);
            
            if(filter === "denied") return invitations.filter((invitation: Invitation) => invitation.confirmation === false);
        }

        return [];
    }, [invitations, filter])

    if(isLoading) return <></>

    return (
        <div ref={ref} {...props}>
            <h2 className={`${great_vibes.className} text-4xl text-center`}>Listado de Invitaciones</h2>

            <div className="flex items-center gap-2 mt-2">
                <button 
                    className="p-2 rounded-md bg-slate-600 text-white font-semibold w-full"
                    onClick={() => setFilter("pending")}
                >Pendientes</button>
                <button 
                    className="p-2 rounded-md bg-slate-600 text-white font-semibold w-full"
                    onClick={() => setFilter("confirmed")}
                >Confirmadas</button>
                <button 
                    className="p-2 rounded-md bg-slate-600 text-white font-semibold w-full"
                    onClick={() => setFilter("denied")}
                >Negadas</button>
            </div>

            <ul className="overflow-y-scroll min-h-[60dvh] max-h-[80dvh]">
                {filteredInvitations.map((invitation: Invitation) => (
                    <li key={Math.random() * 3.14} className="grid grid-cols-[40%_60%] my-4 text-sm bg-white rounded-md p-4">
                        <p className="font-semibold">{`${invitation.title} ${invitation.name}`}</p>
                        <div className="text-xs">
                            <p>Mesa: {invitation.table}</p>
                            <p>Valido para: {invitation.valid_to}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
});

MainDashboard.displayName = "MainDashboard";