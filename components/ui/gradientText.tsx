import { cn } from "@/lib/utils";

function GText({
  children,
  className,
  opacity,
}: {
  children: any;
  className?: string;
  opacity: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-l text-xs sm:text-sm from-teal-500 via-cyan-500 to-sky-500 bg-clip-text font-light text-white",
        opacity,
        className,
      )}
    >
      {children}
    </span>
  );
}

export default GText;
