import { cx } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "rounded-card border border-line bg-card p-6 shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
