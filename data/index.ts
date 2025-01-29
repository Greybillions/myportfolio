// data

export const contactTitle =
  ' I am currently available to take on new projects, so feel free to reach send a message about anything you want me to work on. You can contact me anytime.';

export const navLinks = [
  {
    name: 'Projects',
    href: '/project',
    target: '_self',
  },
  {
    name: 'Blog',
    href: '/blog',
    target: '_self',
  },
];

export const heroText =
  "Hi, I'm Graham Boyle, Grey for short, I build Web2 and Web3 web applications and write easy to understand technical documentation. I design and sometimes work on the backend. I ensure that the apps I deliver are fast, secure, user-friendly and easy to navigate.";

export const projects = [
  {
    name: 'Iphone 15 Website Clone',
    description:
      'A responsive iPhone 15 website clone featuring GSAP animations and Three.js 3D effects for an interactive experience.',
    image: '/project1.png',
    tools: ['React', 'Three.js', 'Tailwind'],
    github: 'https://github.com/Greybillions/apple-website-clone',
    demo: 'https://iphone-15-bice.vercel.app/',
  },
  {
    name: 'Brainwave Landing Page',
    description:
      'A sleek, responsive Brainwave landing page with smooth animations and interactive elements.',
    image: '/project2.png',
    tools: ['React', 'Tailwind'],
    github: 'https://github.com/Greybillions/brainwave',
    demo: 'https://brainwave-sideproject.vercel.app/',
  },
  {
    name: 'BabyToshi Landing Page',
    description:
      'A Web3-focused BabyToshi CTO landing page with a sleek design, interactive features, and smooth animations, built using React and GSAP.',
    image: '/project3.png',
    tools: ['React', 'Tailwind'],
    github: 'https://github.com/Greybillions/babytoshi',
    demo: 'https://babytoshicto.com/',
  },
  {
    name: 'Qareer - (in-progress)',
    description:
      'A Job Tracking platform with a sleek design, interactive features, and smooth animations, built using Next.js, Tailwind, Supabase, Stripe, and Typescript.',
    image: '/project4.png',
    tools: ['Next', 'Tailwind', 'Firebase', 'Stripe', 'Typescript', 'clerk'],
    github: 'https://github.com/Greybillions/qareer',
    demo: 'https://qareer-q.vercel.app/',
  },
  {
    name: 'Soduku Solver',
    description:
      'A web application that solves Sudoku puzzles using a backtracking algorithm, providing an interactive and intuitive solution for users',
    image: '/project5.png',
    tools: ['JavaScript'],
    github:
      'https://github.com/Greybillions/javascript-sandbox/tree/main/sudoku-solver',
    demo: 'https://sudoku-solver-grey.vercel.app/',
  },
  {
    name: 'Ndamzi Art Portfolio',
    description:
      'A showcase for digital art in the Web3 space, highlighting various digital creations through a modern, interactive portfolio.',
    image: '/project6.png',
    tools: ['JavaScript'],
    github: 'https://github.com/Greybillions/allwell-portfolio',
    demo: 'https://ndamzi-artportfolio.vercel.app/',
  },
];

export const socialLinks = [
  {
    id: 0,
    name: 'Github',
    href: 'https://github.com/Greybillions',
  },
  {
    id: 1,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/graham-boyle/',
  },
  {
    id: 2,
    name: 'X',
    href: 'https://X.com/Dev__Grey',
  },
  {
    id: 3,
    name: 'Hashnode',
    href: 'https://greyboyle.hashnode.dev/',
  },
  {
    id: 4,
    name: 'Dev.to',
    href: 'https://dev.to/greybillions',
  },
];

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
export const fetchHashnodePosts = async () => {
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
