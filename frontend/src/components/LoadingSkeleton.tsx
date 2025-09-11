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
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
              <div className="h-1 w-1 rounded-full bg-gray-200 mx-2"></div>
              <div className="h-3 w-16 bg-gray-200 rounded"></div>
            </div>

            {/* Title */}
            <div className="h-5 w-40 bg-gray-200 rounded mt-3"></div>

            {/* Content preview */}
            <div className="space-y-2 mt-2">
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
            </div>

            {/* Read time */}
            <div className="h-3 w-16 bg-gray-200 rounded mt-4 mb-6"></div>
          </div>
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // Full blog skeleton (single page like Medium)
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      <div className="flex gap-12">
        {/* Main content area */}
        <div className="flex-1">
          {/* Long title */}
          <div className="mb-6 space-y-3 animate-pulse">
            <div className="h-12 w-full bg-gray-200 rounded"></div>
            <div className="h-12 w-full bg-gray-200 rounded"></div>
          </div>

          {/* Date */}
          <div className="h-4 w-40 bg-gray-200 rounded mb-8 animate-pulse"></div>

          {/* Content paragraph */}
          <div className="space-y-4 animate-pulse">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-72">
          {/* Author section */}
          <div className="animate-pulse">
            <div className="h-4 w-12 bg-gray-200 rounded mb-3"></div>

            <div className="flex items-center space-x-3 mb-2">
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-1">
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
