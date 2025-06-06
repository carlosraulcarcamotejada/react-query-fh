import { useQuery } from "@tanstack/react-query";
import type { Issue } from "@/interfaces/github/issue";
import { getIssue } from "@/actions/github/get-issue";
import { getIssueComments } from "@/actions/github/get-issue-comments";

const useIssue = ({ issueNumber }: { issueNumber: number }) => {
  const issueQuery = useQuery<Issue | undefined>({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssue({ issueNumber }),
    staleTime: 1000 * 60,
  });

  const issueCommentsQuery = useQuery<Issue[]>({
    queryKey: ["issue", issueNumber, "comments"],
    queryFn: () => getIssueComments({ issueNumber }),
    staleTime: 1000 * 60,
    // enabled: issueQuery.data !== undefined  // Para habilitarlo secuencialmente
  });

  return { issueQuery, issueCommentsQuery };
};

export { useIssue };
