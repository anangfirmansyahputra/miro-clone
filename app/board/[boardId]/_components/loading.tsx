import { Loader } from "lucide-react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

export default function Loading() {
  return (
    <main
      className="h-full w-full relative bg-neutral-100 flex items-center justify-center touch-none"
    >
      <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
};
