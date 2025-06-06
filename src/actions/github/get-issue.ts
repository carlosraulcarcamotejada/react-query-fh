import { githubApi } from "@/api/github-api";
import type { Issue } from "@/interfaces/github/issue";
// import { sleep } from "@/lib/sleep";

async function getIssue({
  issueNumber,
}: {
  issueNumber: number;
}): Promise<Issue | undefined> {
  try {
    // await sleep({ seconds: 1 });


    
    const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export { getIssue };
