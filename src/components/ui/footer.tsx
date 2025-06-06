import { cn } from "@/lib/utils";
import * as React from "react";

function Footer({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="footer"
      className={cn(
        "h-auto py-4 w-full bg-neutral-100 flex flex-col items-center justify-center border-t border-t-gray-300",
        className
      )}
      {...props}
    />
  );
}

export { Footer };
