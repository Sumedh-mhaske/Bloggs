type SkeletonVariant = "list" | "full";

export function LoadingSkeleton({
  variant = "list",
}: {
  variant?: SkeletonVariant;
}) {
  if (variant === "list") {
    // Enhanced Blog list skeleton with modern design
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="h-8 w-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse mb-4"></div>
          <div className="h-4 w-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className="h-2 bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse"></div>

              <div className="p-6">
                {/* Author skeleton */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                    <div className="h-3 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Title skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-6 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
                  <div className="h-6 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
                </div>

                {/* Content skeleton */}
                <div className="space-y-2 mb-6">
                  <div className="h-4 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-2/3 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                </div>

                {/* Footer skeleton */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="h-4 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Enhanced Full blog skeleton with modern design
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="relative bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
          <div className="text-center space-y-6">
            {/* Badge skeleton */}
            <div className="inline-block h-6 w-20 bg-white/30 rounded-full"></div>

            {/* Title skeleton */}
            <div className="space-y-4">
              <div className="h-12 w-3/4 bg-white/40 rounded-lg mx-auto"></div>
              <div className="h-12 w-1/2 bg-white/40 rounded-lg mx-auto"></div>
            </div>

            {/* Meta skeleton */}
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white/40 rounded-full"></div>
                <div className="h-4 w-16 bg-white/40 rounded"></div>
              </div>
              <div className="h-4 w-20 bg-white/40 rounded"></div>
              <div className="h-4 w-16 bg-white/40 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content skeleton */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-4 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar skeleton */}
          <div className="lg:col-span-1 space-y-8">
            {/* Author card skeleton */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="h-4 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse mb-4"></div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                    <div className="h-3 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  </div>
                  <div className="h-8 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Stats card skeleton */}
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="h-4 w-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse mb-4"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-3 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                    <div className="h-3 w-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions card skeleton */}
            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="h-4 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse mb-4"></div>
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
