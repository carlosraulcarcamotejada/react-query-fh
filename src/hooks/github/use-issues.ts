import { useQuery } from "@tanstack/react-query";
import { getIssues } from "@/actions/github/get-issues";
import type { Issue, State } from "@/interfaces/github/issue";

interface UseIssuesOptions {
  state: State;
  selectedLabels?: string[];
}

const useIssues = (
  { state, selectedLabels }: UseIssuesOptions = {
    state: "all",
    selectedLabels: [],
  }
) => {
  const issuesQuery = useQuery<Issue[]>({
    queryKey: ["issues", { state, selectedLabels }], // {} cuando el orden de los items no se quieren que alteren el nombre del key
    queryFn: () => getIssues({ state, selectedLabels }),
    staleTime: 1000 * 60,
  });

  return issuesQuery;
};

export { useIssues };
