import { cn } from "@/lib/shadcn/utils";

interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => (
  <div
    role="separator"
    className={cn("shrink-0 bg-border h-[1px] w-full my-7", className)}
  />
);

export default Divider;
