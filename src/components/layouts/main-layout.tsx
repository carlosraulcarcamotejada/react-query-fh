import * as React from "react";
import { Outlet } from "react-router";
import { Footer } from "@/components/ui/footer";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function MainLayout({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <div
        className={cn("px-4 py-20 min-h-screen justify-center", className)}
        {...props}
      >
        <h1 className="mb-10 text-4xl text-center font-semibold">
          Git Issues <small>Seguimiento de problemas</small>
        </h1>
        <Outlet />
      </div>
      <Footer>
        <div className="font-extralight">
          Tanstack Query &#169; Fernando Herrera
        </div>
        <a
          className="group hover:underline underline-offset-4 font-normal flex items-center gap-x-2"
          href="https://cursos.devtalles.com/courses/tanstack-query"
          target="_blank"
        >
          Curso tanstack Query React - Devtalles
          <ExternalLinkIcon className="size-4 shrink-0 pointer-events-none outline-none" />
        </a>
      </Footer>
    </>
  );
}

export { MainLayout };
