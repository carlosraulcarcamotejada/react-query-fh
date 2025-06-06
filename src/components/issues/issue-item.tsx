import * as React from "react";
import { CheckCircleIcon, InfoIcon, MessagesSquareIcon } from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { State, type Issue } from "@/interfaces/github/issue";
import { useQueryClient } from "@tanstack/react-query";
import { getIssue } from "@/actions/github/get-issue";
import { Badge } from "../ui/badge";
import { timeSince } from "@/lib/time-since";

function IssueItem({
  className,
  issue,
  ...props
}: React.ComponentProps<"a"> & { issue: Issue }) {
  const queryClient = useQueryClient();

  const preFetchData = () => {
    queryClient.prefetchQuery({
      queryKey: ["issue", issue.number],
      queryFn: () => getIssue({ issueNumber: issue.number }),
      staleTime: 1000 * 60,
    });
  };

  return (
    <NavLink
      onMouseEnter={preFetchData}
      to={`/issues/issue/${issue?.number}`}
      className={cn(
        "group flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800",
        className
      )}
      data-slot="main-card"
      {...props}
    >
      {issue.state === State.Close ? (
        <CheckCircleIcon className="text-green-600 size-6 shrink-0" />
      ) : (
        <InfoIcon className="text-red-600 size-6 shrink-0" />
      )}

      <div className="flex flex-col flex-grow px-2">
        <div
          data-slot="title-card"
          className="text-gray-200 group-hover:underline"
        >
          {issue.title}
        </div>
        <span className="text-gray-500">
          {`#${issue.number}  opened ${timeSince({
            date: issue.created_at,
          })} days ago by `}
          <span className="font-bold">{issue.user.login}</span>
        </span>

        <div className="flex flex-wrap gap-2 mt-2">
          {issue.labels.map((label) => (
            <Badge key={label.id}>{label.name}</Badge>
          ))}
        </div>
      </div>

      <img
        src={issue.user.avatar_url}
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col mx-2 items-center">
        <MessagesSquareIcon size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">{issue.comments}</span>
      </div>
    </NavLink>
  );
}

export { IssueItem };
