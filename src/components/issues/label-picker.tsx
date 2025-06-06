import * as React from "react";
import type { Label } from "@/interfaces/github/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function LabelPicker({
  className,
  labels = [],
  onSelectedLabel,
  selectedLabels,
  ...props
}: React.ComponentProps<"div"> & {
  labels?: Label[];
  onSelectedLabel: ({ label }: { label: string }) => void;
  selectedLabels: string[];
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)} {...props}>
      {labels?.map((label) => (
        <Badge
          key={label.id}
          variant={
            selectedLabels.includes(label.name) ? "default" : "secondary"
          }
          onClick={() => onSelectedLabel({ label: label.name })}
          className={cn("cursor-pointer")}
          // style={{ background: `#${label.color}` }}
        >
          {label.name}
        </Badge>
      ))}
    </div>
  );
}

export { LabelPicker };
