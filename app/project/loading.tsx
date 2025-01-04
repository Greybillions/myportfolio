import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <Loader2 className='h-12 w-12 animate-spin' />
    </div>
  );
};

export default Loading;
