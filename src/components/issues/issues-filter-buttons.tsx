import * as React from "react";
import { Button } from "@/components/ui/button";
import type { State } from "@/interfaces/github/issue";
import { cn } from "@/lib/utils";

function IssuesFilterButtons({
  className,
  setState,
  state,
  ...props
}: React.ComponentProps<"div"> & {
  state: State;
  setState: (value: React.SetStateAction<State>) => void;
}) {
  return (
    <div className={cn("flex gap-x-2", className)} {...props}>
      <Button
        size="lg"
        onClick={() => setState("all")}
        variant={state === "all" ? "default" : "outline"}
      >
        All
      </Button>
      <Button
        size="lg"
        onClick={() => setState("open")}
        variant={state === "open" ? "default" : "outline"}
      >
        Open
      </Button>
      <Button
        size="lg"
        onClick={() => setState("closed")}
        variant={state === "closed" ? "default" : "outline"}
      >
        Closed
      </Button>
    </div>
  );
}

export { IssuesFilterButtons };
