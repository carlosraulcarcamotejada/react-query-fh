import { githubApi } from "@/api/github-api";
import type { Issue } from "@/interfaces/issue";
import { sleep } from "@/lib/sleep";

async function getIssues(): Promise<Issue[]> {
  try {
    await sleep({ seconds: 2 });
    const { data } = await githubApi.get<Issue[]>("/issues");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getIssues };
