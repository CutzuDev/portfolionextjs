import { cn } from "@/lib/utils";

function GText({
  children,
  className,
  opacity,
  resizing = true,
}: {
  children: any;
  className?: string;
  opacity: string;
  resizing?: boolean;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-l from-teal-500 via-cyan-500 to-sky-500 bg-clip-text font-light text-white",
        resizing && "text-xs sm:text-sm",
        opacity,
        className,
      )}
    >
      {children}
    </span>
  );
}

export default GText;
