import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Tag = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Tag.displayName = "Tag";

export default Tag;