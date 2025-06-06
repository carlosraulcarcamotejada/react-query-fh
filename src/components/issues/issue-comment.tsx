import type { Issue } from "@/interfaces/issue";
import { cn } from "@/lib/utils";
import * as React from "react";
import ReactMarkdown from "react-markdown";

function IssueComment({
  issue,
  className,
  ...props
}: React.ComponentProps<"div"> & { issue: Issue }) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="border border-gray-200 mt-2 rounded-md shadow-sm">
        <div className="flex items-center bg-blue-500 text-white p-2 rounded-t-md">
          <img
            src={issue.user.avatar_url}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="mx-2">{issue.user.login}</span>
        </div>
        <div className="p-4 bg-gray-700 text-white">
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export { IssueComment };
