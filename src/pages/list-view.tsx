import * as React from "react";
import { IssueList } from "@/components/issues/issue-list";
import { LabelPicker } from "@/components/issues/label-picker";
import { useIssues } from "@/hooks/github/use-issues";
import { useLabels } from "@/hooks/github/use-labels";
import { State } from "@/interfaces/github/issue";
import { usePageFromUrl } from "@/hooks/shadcn-ui/use-page-from-url";
import { IssuesFilterButtons } from "@/components/issues/issues-filter-buttons";
import { cn } from "@/lib/utils";

function ListView({ className, ...props }: React.ComponentProps<"div">) {
  const [state, setState] = React.useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);

  const [page, _] = usePageFromUrl();

  const issuesQuery = useIssues({ state, selectedLabels, page });
  const labelsQuey = useLabels();

  const onSelectedLabel = ({ label }: { label: string }) => {
    selectedLabels.includes(label)
      ? setSelectedLabels(
          selectedLabels.filter(
            (setSelectedLabel) => setSelectedLabel !== label
          )
        )
      : setSelectedLabels([...selectedLabels, label]);
  };

  return (
    <div
      className={cn("flex flex-wrap items-start justify-center", className)}
      {...props}
    >
      <div className="md:w-4/5 lg:w-1/2 xl:w-1/3">
        <IssuesFilterButtons state={state} setState={setState} />
        {issuesQuery.data && <IssueList issues={issuesQuery.data} />}
      </div>

      <LabelPicker
        className="md:w-4/5 lg:w-1/2 xl:w-1/3 mt-20 lg:mt-14 px-4"
        labels={labelsQuey.data}
        onSelectedLabel={onSelectedLabel}
        selectedLabels={selectedLabels}
      />
    </div>
  );
}

export { ListView };
