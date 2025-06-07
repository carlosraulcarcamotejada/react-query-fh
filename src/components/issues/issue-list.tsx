import * as React from "react";
import { IssueItem } from "@/components/issues/issue-item";
import { type Issue } from "@/interfaces/github/issue";
import { cn } from "@/lib/utils";
import { PaginationIssues } from "@/hooks/github/pagination-issues";

function IssueList({
  className,
  issues = [],

  ...props
}: React.ComponentProps<"div"> & {
  issues?: Issue[];
}) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {/* Lista de issues */}
      <div className="mt-4">
        {issues?.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
      {/* Pagination Issues */}
      <PaginationIssues />
    </div>
  );
}

export { IssueList };
