import * as React from "react";
import { IssueItem } from "@/components/issues/issue-item";
import { Button } from "@/components/ui/button";
import type { Issue } from "@/interfaces/issue";
import { cn } from "@/lib/utils";

function IssueList({
  className,
  issues = [],
  ...props
}: React.ComponentProps<"div"> & { issues?: Issue[] }) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-x-2">
        <Button size="lg">All</Button>
        <Button size="lg" variant="outline">
          Open
        </Button>
        <Button size="lg" variant="outline">
          Closed
        </Button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues?.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
}

export { IssueList };
