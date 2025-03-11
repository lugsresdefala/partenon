import { useQuery } from "@tanstack/react-query";
import type { Intervention } from "@/types";

interface UseInterventionsProps {
  search?: string;
  category?: string;
  evidenceLevel?: string;
}

export function useInterventions({
  search = "",
  category = "all",
  evidenceLevel = "all",
}: UseInterventionsProps = {}) {
  return useQuery<Intervention[]>({
    queryKey: ["/api/interventions", { search, category, evidenceLevel }],
    queryFn: async ({ queryKey }) => {
      const [_, params] = queryKey;
      const { search, category, evidenceLevel } = params as {
        search: string;
        category: string;
        evidenceLevel: string;
      };

      // Build URL with query parameters
      const url = new URL("/api/interventions", window.location.origin);
      if (search) url.searchParams.append("search", search);
      if (category && category !== "all")
        url.searchParams.append("category", category);
      if (evidenceLevel && evidenceLevel !== "all")
        url.searchParams.append("evidenceLevel", evidenceLevel);

      const res = await fetch(url.toString());
      if (!res.ok) {
        throw new Error("Failed to fetch interventions");
      }
      return await res.json();
    },
  });
}

export function useIntervention(id: number | null) {
  return useQuery<Intervention>({
    queryKey: [`/api/interventions/${id}`],
    enabled: id !== null,
    queryFn: async () => {
      if (id === null) throw new Error("Intervention ID is required");
      const res = await fetch(`/api/interventions/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch intervention details");
      }
      return await res.json();
    },
  });
}
