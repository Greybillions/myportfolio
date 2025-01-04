'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='inline-flex items-center gap-2 text-[#c6ff00] bg-gray-900 px-4 py-1 rounded-lg font-semibold hover:bg-gray-800 hover:text-[#c6ff00] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1'
    >
      <ChevronLeft className='w-5 h-5' />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
