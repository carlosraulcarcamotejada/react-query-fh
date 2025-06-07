import { githubApi } from "@/api/github-api";
import { State, type Issue } from "@/interfaces/github/issue";
// import { sleep } from "@/lib/sleep";

interface GetIssuesOptions {
  state: State;
  selectedLabels: string[];
  page?: number;
}

async function getIssues(
  { page, state, selectedLabels = [] }: GetIssuesOptions = {
    page: 1,
    selectedLabels: [],
    state: "all",
  }
): Promise<Issue[]> {
  try {
    const params = new URLSearchParams();

    state !== State.All && params.append("state", state);

    selectedLabels.length > 0 &&
      params.append("labels", selectedLabels.join(","));

    params.append("page", `${page}`);
    params.append("per_page", "5");

    const { data } = await githubApi.get<Issue[]>("/issues", { params });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getIssues };
