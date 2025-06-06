import * as React from "react";
import { Loader, RefreshCwIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

const getCryptoNumber = async (): Promise<number> => {
  const url: string =
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";
  const resp = await fetch(url).then((resp) => resp.json());

  return Number(resp);
};

function RandomNumber({ className, ...props }: React.ComponentProps<"div">) {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptoNumber,
  });

  return (
    <div
      className={cn(
        "min-h-screen bg-background flex flex-col justify-start items-center gap-y-10 pt-20",
        className
      )}
      {...props}
    >
      <h1 className="text-4xl font-extrabold text-indigo-500 text-center">
        {isFetching ? <Loader className="animate-spin" /> : <>Número: {data}</>}
      </h1>

      {error && <h3>{JSON.stringify(error)}</h3>}
      {/* The rest of your application */}
      <Button onClick={() => refetch()}>
        <RefreshCwIcon className={cn(isFetching && "animate-spin")} />
        Nuevo número
      </Button>
    </div>
  );
}

export { RandomNumber };
