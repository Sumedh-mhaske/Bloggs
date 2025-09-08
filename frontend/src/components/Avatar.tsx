export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}
    >
      <span className="font-medium text-gray-500 dark:text-gray-300">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
