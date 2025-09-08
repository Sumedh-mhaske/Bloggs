export function LoadingSkeleton() {
  return (
    <div
      role="status"
      className="max-w-screen-md mx-auto w-screen animate-pulse"
    >
      {[...Array(4)].map((_, i) => (
        <div key={i} className="p-4 border-b border-slate-200 w-full">
          {/* Header row */}
          <div className="flex items-center space-x-2">
            {/* Avatar */}
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>

            {/* Author name */}
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>

            {/* Dot */}
            <div className="h-1 w-1 rounded-full bg-gray-200 dark:bg-gray-700 mx-2"></div>

            {/* Published date */}
            <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Title */}
          <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded mt-3"></div>

          {/* Content preview */}
          <div className="space-y-2 mt-2">
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Read time */}
          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mt-4 mb-6"></div>
        </div>
      ))}

      <span className="sr-only">Loading...</span>
    </div>
  );
}
