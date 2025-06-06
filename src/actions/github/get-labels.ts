import { githubApi } from "@/api/github-api";
import type { Label } from "@/interfaces/github/label";
// import { sleep } from "@/lib/sleep";

async function getLabels(): Promise<Label[]> {
  try {
    // await sleep({ seconds: 1 });
    const { data } = await githubApi.get<Label[]>("/labels");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getLabels };
