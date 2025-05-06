import React from "react";

export default function GeneralSkeleton({ count = 3, classname }: { count?: number; classname?: string }) {
  return (
    <div className={`space-y-6 ${classname}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse p-4 bg-white rounded-xl shadow-sm border border-gray-200 space-y-4"
        >
          {/* Title */}
          <div className="h-5 bg-gray-300 rounded w-2/3"></div>

          {/* Subtext */}
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>

          {/* Image or block */}
          <div className="h-40 bg-gray-200 rounded-lg"></div>

          {/* Paragraph lines */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>

          {/* Action button */}
          <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}
