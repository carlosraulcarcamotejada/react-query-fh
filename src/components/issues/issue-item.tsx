import * as React from "react";
import { CheckCircleIcon, InfoIcon, MessagesSquareIcon } from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { State, type Issue } from "@/interfaces/issue";

function IssueItem({
  className,
  issue,
  ...props
}: React.ComponentProps<"div"> & { issue: Issue }) {
  return (
    <div
      className={cn(
        "flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800",
        className
      )}
      {...props}
    >
      {issue.state === State.Close ? (
        <CheckCircleIcon className="text-green-600 size-6 shrink-0" />
      ) : (
        <InfoIcon className="text-red-600 size-6 shrink-0" />
      )}

      {/* <FiCheckCircle size={30} color="green" /> */}

      <div className="flex flex-col flex-grow px-2">
        <NavLink
          to={`/issues/issue/${issue.number}`}
          className="hover:underline text-gray-200 underline-offset-2"
        >
          {issue.title}
        </NavLink>
        <span className="text-gray-500">
          {`#${issue.number}  opened 2 days ago by `}
          <span className="font-bold">{issue.user.login}</span>
        </span>
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
    </div>
  );
}

export { IssueItem };
