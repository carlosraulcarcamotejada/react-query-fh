import * as React from "react";
import { IssueList } from "@/components/issues/issue-list";
import { LabelPicker } from "@/components/issues/label-picker";
import { cn } from "@/lib/utils";
import { useIssues } from "@/hooks/github/use-issues";
import { useLabels } from "@/hooks/github/use-labels";

function ListView({ className, ...props }: React.ComponentProps<"div">) {
  const issuesQuery = useIssues();
  const labelsQuey = useLabels();

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-5",
        className
      )}
      {...props}
    >
      {issuesQuery.data && (
        <IssueList
          issues={issuesQuery.data}
          className="col-span-1 sm:col-span-2 md:col-span-2 md:col-start-2"
        />
      )}

      <LabelPicker
        labels={labelsQuey.data}
        className="col-span-full mt-20 flex justify-center"
      />
    </div>
  );
}

export { ListView };
