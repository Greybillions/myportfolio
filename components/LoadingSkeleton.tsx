const LoadingSkeleton = () => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {[1, 2, 3].map((i) => (
      <div key={i} className='bg-white shadow-lg p-4 rounded-lg animate-pulse'>
        <div className='bg-gray-200 h-48 rounded-lg mb-4' />
        <div className='h-6 bg-gray-200 rounded w-3/4 mb-2' />
        <div className='h-4 bg-gray-200 rounded w-1/4 mb-4' />
        <div className='h-4 bg-gray-200 rounded w-full' />
      </div>
    ))}
  </div>
);

export default LoadingSkeleton;
