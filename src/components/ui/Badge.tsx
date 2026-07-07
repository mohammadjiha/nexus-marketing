import { cx } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-pill border border-line bg-card px-3 py-1.5 text-xs font-semibold text-ink-2",
        className
      )}
    >
      {children}
    </span>
  );
}
