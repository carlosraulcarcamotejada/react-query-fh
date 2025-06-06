interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: State;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  author_association: AuthorAssociation;
  type: null;
  active_lock_reason: null;
  draft?: boolean;
  pull_request?: PullRequest;
  body: null | string;
  closed_by: null;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
  sub_issues_summary?: SubIssuesSummary;
}

type AuthorAssociation = "OWNER" | "COLLABORATOR" | "NONE";

interface Label {
  id: number;
  node_id: NodeID;
  url: string;
  name: Name;
  color: Color;
  default: boolean;
  description: Description | null;
}

const Color = {
  D4C5F9: "d4c5f9",
  E7E7E7: "e7e7e7",
  Ededed: "ededed",
  Fef2C0: "fef2c0",
  The9149D1: "9149d1",
} as const;

type Color = (typeof Color)[keyof typeof Color];

const Description = {
  APotentialIssueThatWeHavenTYetConfirmedAsABug:
    "A potential issue that we haven't yet confirmed as a bug",
  OpenedByAMemberOfTheReactCoreTeam:
    "Opened by a member of the React Core Team",
} as const;

type Description = (typeof Description)[keyof typeof Description];

const Name = {
  CLASigned: "CLA Signed",
  ComponentDOM: "Component: DOM",
  Fbed: "fb-ed",
  ReactCoreTeam: "React Core Team",
  StatusUnconfirmed: "Status: Unconfirmed",
} as const;

type Name = (typeof Name)[keyof typeof Name];

const NodeID = {
  LAKwDOAJy2Ks8AAAABeiHarg: "LA_kwDOAJy2Ks8AAAABeiHarg",
  MDU6TGFiZWwxMjc4OTM5MTE: "MDU6TGFiZWwxMjc4OTM5MTE=",
  MDU6TGFiZWwxNTU5ODQxNjA: "MDU6TGFiZWwxNTU5ODQxNjA=",
  MDU6TGFiZWwxNzc1OTU4Mjg1: "MDU6TGFiZWwxNzc1OTU4Mjg1",
  MDU6TGFiZWwxOTY4NTgzNzQ: "MDU6TGFiZWwxOTY4NTgzNzQ=",
} as const;

type NodeID = (typeof NodeID)[keyof typeof NodeID];

interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: null;
}

interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

const State = {
  All: "all",
  Close: "closed",
  Open: "open",
} as const;

type State = (typeof State)[keyof typeof State];

interface SubIssuesSummary {
  total: number;
  completed: number;
  percent_completed: number;
}

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  user_view_type: UserViewType;
  site_admin: boolean;
}

const Type = {
  User: "User",
} as const;

type Type = (typeof Type)[keyof typeof Type];
const UserViewType = {
  Public: "public",
} as const;

type UserViewType = (typeof UserViewType)[keyof typeof UserViewType];

export type { Issue };
export { State };
