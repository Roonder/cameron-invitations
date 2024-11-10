export async function getInvitations(id?: string) {
    const headersConfig = id ? {
        "INVITATION-ID": id
    } : undefined;

    const data = await fetch("/api/invitations", {
        headers: headersConfig
    });

    if(data.ok) {
        const response = await data.json();
        
        if(id)
            return response?.invitation;

        return response?.invitations;
    }
     
    return undefined;
}