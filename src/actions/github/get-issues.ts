import { githubApi } from "@/api/github-api";
import { State, type Issue } from "@/interfaces/github/issue";
// import { sleep } from "@/lib/sleep";

interface GetIssuesOptions {
  state: State;
  selectedLabels?: string[];
}

async function getIssues(
  { state, selectedLabels = [] }: GetIssuesOptions = {
    state: "all",
    selectedLabels: [],
  }
): Promise<Issue[]> {
  try {
    const params = new URLSearchParams();

    state !== State.All && params.append("state", state);

    selectedLabels.length > 0 &&
      params.append("labels", selectedLabels.join(","));

    const { data } = await githubApi.get<Issue[]>("/issues", { params });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getIssues };
