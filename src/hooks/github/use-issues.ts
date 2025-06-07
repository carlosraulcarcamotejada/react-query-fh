import { useQuery } from "@tanstack/react-query";
import { getIssues } from "@/actions/github/get-issues";
import type { Issue, State } from "@/interfaces/github/issue";

interface UseIssuesOptions {
  state: State;
  selectedLabels: string[];
  page?: number;
}

const useIssues = (
  { page, state, selectedLabels }: UseIssuesOptions = {
    page: 1,
    selectedLabels: [],
    state: "all",
  }
) => {
  const issuesQuery = useQuery<Issue[]>({
    queryKey: ["issues", { state, selectedLabels, page }], // {} cuando el orden de los items no se quieren que alteren el nombre del key
    queryFn: () => getIssues({ state, selectedLabels, page }),
    staleTime: 1000 * 60,
  });

  return issuesQuery;
};

export { useIssues };
