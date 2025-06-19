const NewsCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-white shadow rounded p-4 space-y-4">
      <div className="h-48 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-2/4" />
      <div className="h-8 bg-gray-300 rounded w-1/3 mt-2" />
    </div>
  );
};

export default NewsCardSkeleton;
