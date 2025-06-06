import * as React from "react";
import { IssueItem } from "@/components/issues/issue-item";
import { Button } from "@/components/ui/button";
import { State, type Issue } from "@/interfaces/github/issue";
import { cn } from "@/lib/utils";

function IssueList({
  className,
  issues = [],
  onStateChange,
  value,
  ...props
}: React.ComponentProps<"div"> & {
  issues?: Issue[];
  value: State;
  onStateChange: React.Dispatch<React.SetStateAction<State>>;
}) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-x-2">
        <Button
          size="lg"
          onClick={() => onStateChange("all")}
          variant={value === "all" ? "default" : "outline"}
        >
          All
        </Button>
        <Button
          size="lg"
          onClick={() => onStateChange("open")}
          variant={value === "open" ? "default" : "outline"}
        >
          Open
        </Button>
        <Button
          size="lg"
          onClick={() => onStateChange("closed")}
          variant={value === "closed" ? "default" : "outline"}
        >
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
