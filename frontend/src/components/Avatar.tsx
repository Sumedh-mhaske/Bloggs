export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
      <span className="font-medium text-gray-500 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
