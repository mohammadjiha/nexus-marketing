import { cx } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cx("h-6 w-6 shrink-0 fill-current", className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3L21 20.5H15.7L12 13L8.3 20.5H3L12 3Z"
      />
    </svg>
  );
}
