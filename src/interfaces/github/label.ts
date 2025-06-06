interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: Description | null;
}

const Description = {
  Short: "Short",
  Long: "Long",
} as const;

type Description = keyof typeof Description;

export type { Label };
