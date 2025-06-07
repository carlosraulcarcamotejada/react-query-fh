import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { usePageFromUrl } from "@/hooks/shadcn-ui/use-page-from-url";

function PaginationIssues({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [page, setPage] = usePageFromUrl();
  return (
    <div className={cn("flex justify-center gap-4 mt-6", className)} {...props}>
      <Button
        variant="outline"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <div className="grid place-content-center">{page}</div>
      <Button variant="outline" onClick={() => setPage(page + 1)}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

export { PaginationIssues };
