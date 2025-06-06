import * as React from "react";
import { RandomNumber } from "@/components/random-number/random-number";
import { cn } from "@/lib/utils";

function RandomNumberView({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("", className)} {...props}>
      <RandomNumber />
    </div>
  );
}

export { RandomNumberView };
