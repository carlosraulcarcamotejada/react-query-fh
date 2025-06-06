import { useQuery } from "@tanstack/react-query";
import { getLabels } from "@/actions/github/get-labels";
import type { Label } from "@/interfaces/github/label";

const useLabels = () => {
  const labelsQuey = useQuery<Label[]>({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hora en la cual es va a considerar fresh, 1 hora de stale time
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: null,
      },

      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
        description: null,
      },
      {
        id: 69105358,
        node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
        name: "Browser: Safari",
        color: "c7def8",
        default: false,
        description: null,
      },
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: null,
      },
      {
        id: 8625343998,
        node_id: "LA_kwDOAJy2Ks8AAAACAhxN_g",
        url: "https://api.github.com/repos/facebook/react/labels/Compiler:%20New%20Validation%20Ideas",
        name: "Compiler: New Validation Ideas",
        color: "f9d0c4",
        default: false,
        description: null,
      },
      {
        id: 8625278332,
        node_id: "LA_kwDOAJy2Ks8AAAACAhtNfA",
        url: "https://api.github.com/repos/facebook/react/labels/Compiler:%20Ref%20Validation",
        name: "Compiler: Ref Validation",
        color: "5319e7",
        default: false,
        description: null,
      },
      {
        id: 6955781886,
        node_id: "LA_kwDOAJy2Ks8AAAABnpjO_g",
        url: "https://api.github.com/repos/facebook/react/labels/Compiler:%20todo",
        name: "Compiler: todo",
        color: "C2E0C6",
        default: false,
        description: null,
      },
      {
        id: 71502270,
        node_id: "MDU6TGFiZWw3MTUwMjI3MA==",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Build%20Infrastructure",
        name: "Component: Build Infrastructure",
        color: "f9d0c4",
        default: false,
        description: null,
      },
    ],
  });

  return labelsQuey;
};

export { useLabels };
