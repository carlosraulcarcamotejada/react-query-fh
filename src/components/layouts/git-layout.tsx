import { cn } from "@/lib/utils";
import * as React from "react";
import { Outlet } from "react-router";

function GitLayout({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("px-4 py-20 min-h-screen justify-center", className)} {...props}>
      <h1 className="mb-10 text-4xl text-center font-semibold">
        Git Issues <small>Seguimiento de problemas</small>
      </h1>
      <Outlet />
    </div>
  );
}

export { GitLayout };
