import * as React from "react";
import type { Label } from "@/interfaces/github/label";
import { cn } from "@/lib/utils";

function LabelPicker({
  className,
  labels = [],
  ...props
}: React.ComponentProps<"div"> & { labels?: Label[] }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {labels?.map((githubLabel) => (
        <span
          key={githubLabel.id}
          className={cn(
            "px-2 py-1 rounded-full w-fit text-xs font-semibold hover:bg-slate-800 cursor-pointer text-black"
          )}
          style={{ border: `2px solid #${githubLabel.color}` }}
        >
          {githubLabel.name}
        </span>
      ))}
    </div>
  );
}

export { LabelPicker };
