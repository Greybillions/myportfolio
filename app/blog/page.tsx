'use server';

import React from 'react';
import { LuExternalLink } from 'react-icons/lu';
import Image from 'next/image';
import BackButton from '@/components/BackNav';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { Suspense } from 'react';
import { fetchHashnodePosts } from '@/data';

const Blog = async () => {
  try {
    const data = await fetchHashnodePosts();
    const posts = data?.data?.publication?.posts?.edges || [];

    return (
      <div className='p-6 sm:px-32 md:px-48 lg:px-48 xl:px-64'>
        <BackButton />
        <h1 className='text-4xl my-4 font-bold mb-4 text-center'>
          Latest Blog Posts
        </h1>
        <div className='grid grid-cols-1 md:flex md:flex-col lg:flex-col gap-6'>
          {posts.map(({ node: post }) => (
            <div
              key={post.slug}
              className='bg-white shadow-lg md:flex md:flex-col lg:flex-row rounded-lg overflow-hidden border border-gray-200 items-center md:pl-2'
            >
              <Suspense fallback={<LoadingSkeleton />}>
                <div className='relative w-full h-48 rounded'>
                  <Image
                    src={post.coverImage?.url || '/placeholder-image.jpg'}
                    alt={post.title}
                    fill
                    className='object-fit rounded'
                  />
                </div>
                <div className='p-6'>
                  <h2 className='text-xl md:text-3xl font-bold mb-2 line-clamp-2'>
                    {post.title}
                  </h2>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {post.brief}
                  </p>
                  <a
                    href={post.url}
                    className='inline-flex items-center gap-2 text-[#c6ff00] bg-gray-900 px-4 py-1 rounded-lg font-semibold hover:bg-gray-800 hover:text-[#c6ff00] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Read More <LuExternalLink />
                  </a>
                </div>
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <div className='p-6'>
        <h1 className='text-4xl font-bold mb-4'>My Blog</h1>
        <p className='text-red-600'>
          Failed to load blog posts. Please try again later.
        </p>
      </div>
    );
  }
};

export default Blog;
