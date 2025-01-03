'use server';

import React from 'react';
import Image from 'next/image';
import BackButton from '@/components/BackNav';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { Suspense } from 'react';

// Define types for the Hashnode API response
type HashnodePost = {
  node: {
    title: string;
    brief: string;
    slug: string;
    url: string;
    coverImage: {
      url: string;
    };
  };
};

type HashnodeResponse = {
  data?: {
    publication?: {
      posts: {
        edges: HashnodePost[];
      };
    };
  };
};

// Updated query to include coverImage and fetch 6 posts
const getPosts = `
  query Publication(
    $id: ObjectId="652ee4db10ce1729cebad250"
  ) {
    publication(
      id: $id
    ) {
      posts(first: 6) {
        edges {
          node {
            title,
            brief,
            slug,
            url,
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

// Function to fetch posts from Hashnode
const fetchHashnodePosts = async () => {
  try {
    const response = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getPosts,
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data: HashnodeResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

const Blog = async () => {
  try {
    const data = await fetchHashnodePosts();
    const posts = data?.data?.publication?.posts?.edges || [];

    return (
      <div className='p-6'>
        <BackButton />
        <h1 className='text-4xl font-bold mb-4'>My Blog</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map(({ node: post }) => (
            <div
              key={post.slug}
              className='bg-white shadow-lg rounded-lg overflow-hidden'
            >
              <Suspense fallback={<LoadingSkeleton />}>
                <div className='relative w-full h-48'>
                  <Image
                    src={post.coverImage?.url || '/placeholder-image.jpg'}
                    alt={post.title}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h2 className='text-xl font-bold mb-2 line-clamp-2'>
                    {post.title}
                  </h2>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {post.brief}
                  </p>
                  <a
                    href={post.url}
                    className='inline-block text-blue-600 hover:text-blue-800 font-semibold hover:underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Read More →
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
