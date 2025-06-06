import * as React from "react";
import { IssueList } from "@/components/issues/issue-list";
import { LabelPicker } from "@/components/issues/label-picker";
import { useIssues } from "@/hooks/github/use-issues";
import { useLabels } from "@/hooks/github/use-labels";
import { State } from "@/interfaces/github/issue";
import { cn } from "@/lib/utils";

function ListView({ className, ...props }: React.ComponentProps<"div">) {
  const [state, setState] = React.useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);

  const issuesQuery = useIssues({ state, selectedLabels });
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
    <div className={cn("flex flex-wrap items-start justify-center", className)} {...props}>
      {issuesQuery.data && (
        <IssueList
          issues={issuesQuery.data}
          className="md:w-4/5 lg:w-1/2 xl:w-1/3"
          value={state}
          onStateChange={setState}
        />
      )}

      <LabelPicker
        labels={labelsQuey.data}
        className="md:w-4/5 lg:w-1/2 xl:w-1/3 mt-20 lg:mt-14 px-4"
        onSelectedLabel={onSelectedLabel}
        selectedLabels={selectedLabels}
      />
    </div>
  );
}

export { ListView };
