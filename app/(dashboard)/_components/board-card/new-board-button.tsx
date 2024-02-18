"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButton {
  orgId: string;
  disabled?: boolean;
}

export default function NewBoardButton({ orgId, disabled }: NewBoardButton) {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      title: "Untitled",
      orgId,
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={pending}
      onClick={() => {
        if (!pending && !disabled) {
          onClick();
        }
      }}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (disabled || pending) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}>
      <div />
      <Plus className="w-12 h-12 text-white stroke-1" />
      <p className="text-xs text-white font-light">New board</p>
    </button>
  );
}
