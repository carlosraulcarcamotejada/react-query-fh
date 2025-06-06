import { useQuery } from "@tanstack/react-query";
import { getIssues } from "@/actions/github/get-issues";
import type { Issue } from "@/interfaces/issue";

const useIssues = () => {
  const issuesQuery = useQuery<Issue[]>({
    queryKey: ["issues"],
    queryFn: getIssues,
    staleTime: 1000 * 60,
  });

  return issuesQuery;
};

export { useIssues };
