import { githubApi } from "@/api/github-api";
import type { Issue } from "@/interfaces/github/issue";
// import { sleep } from "@/lib/sleep";

async function getIssueComments({
  issueNumber,
}: {
  issueNumber: number;
}): Promise<Issue[]> {
  try {
    // await sleep({ seconds: 1 });
    const { data } = await githubApi.get<Issue[]>(
      `/issues/${issueNumber}/comments`
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getIssueComments };
