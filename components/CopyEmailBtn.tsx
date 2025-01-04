'use client';

import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

type CopyEmailButtonProps = {
  email: string;
  className?: string;
};

const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email,
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-4 py-2 border rounded-md transition-all ${
        className || ''
      } ${copied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}
    >
      {copied ? <FiCheck /> : <FiCopy />}
      {copied ? 'Copied!' : 'Copy Email'}
    </button>
  );
};

export default CopyEmailButton;
