type SkeletonVariant = "list" | "full";

export function LoadingSkeleton({
  variant = "list",
}: {
  variant?: SkeletonVariant;
}) {
  if (variant === "list") {
    // Blog list skeleton (multiple cards)
    return (
      <div
        role="status"
        className="max-w-screen-md mx-auto w-screen animate-pulse"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-4 border-b border-slate-200 w-full">
            {/* Header */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-1 w-1 rounded-full bg-gray-200 dark:bg-gray-700 mx-2"></div>
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

  // Full blog skeleton (single page like Medium)
  return (
    <div
      role="status"
      className="max-w-screen-md mx-auto w-screen animate-pulse p-6"
    >
      {/* Title */}
      <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>

      {/* Author row */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-1 w-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Big image placeholder */}
      <div className="h-60 w-full bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>

      {/* Paragraph lines */}
      <div className="space-y-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`h-3 ${i % 2 === 0 ? "w-full" : "w-5/6"} bg-gray-200 dark:bg-gray-700 rounded`}
          ></div>
        ))}
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
