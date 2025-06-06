import * as React from "react";
import { NavLink, useParams } from "react-router";
import { IssueComment } from "@/components/issues/issue-comment";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useIssue } from "@/hooks/github/use-issue";
import { cn } from "@/lib/utils";

function IssueView({ className, ...props }: React.ComponentProps<"div">) {
  const params = useParams();

  const issueNumber: number = Number(params.issueNumber ?? 0);

  const { issueQuery, issueCommentsQuery } = useIssue({ issueNumber });

  return (
    <div className={cn("mb-5", className)} {...props}>
      <div className="mb-4">
        <NavLink
          to={"/issues/list"}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <ChevronLeftIcon />
          Regresar
        </NavLink>
      </div>

      {/* Primer comentario */}
      {issueQuery.data && <IssueComment issue={issueQuery.data} />}

      {issueCommentsQuery?.data?.map((issueComment) => (
        <IssueComment key={issueComment.id} issue={issueComment} />
      ))}
    </div>
  );
}

export { IssueView };
