import useSWR from "swr";
// Fetcher
import { getInvitations } from "@/lib/fetchers/invitation";

export function useInvitations(id?: string) {
    const { data, isLoading, error, mutate } = useSWR(
        ["/api/invitations", id], 
        ([, id]) => getInvitations(id)
);

    return {
        invitations: data,
        isLoading,
        isError: error,
        mutate
    }
}