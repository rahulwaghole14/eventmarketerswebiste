// src/app/blog/[slug]/components/BlogPostClient.tsx
'use client';

import { FaCheck, FaArrowUp, FaShare, FaBookmark } from 'react-icons/fa';
import { RelatedPost } from '@/types/blog';
import { usePathname } from 'next/navigation';

interface BlogPostClientProps {
  content?: string;
  details?: string[];
  relatedPosts?: RelatedPost[];
}

export function BlogPostClient({ 
  content,
  details,
  relatedPosts
}: BlogPostClientProps) {
  const pathname = usePathname();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: content?.substring(0, 100) + '...',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleSave = () => {
    console.log('Saving post:', pathname);
    // In a real app, you would save to localStorage or a database
    alert('Post saved for later!');
  };

  return (
    <>
      {content && (
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      
      {details && details.length > 0 && (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((related, index) => (
              <a 
                key={index} 
                href={`/blog/${related.slug}`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 className="font-medium text-blue-600 hover:text-blue-800">{related.title}</h4>
              </a>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Share:</span>
          <button 
            onClick={handleShare}
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="Share this post"
          >
            <FaShare />
          </button>
        </div>
        <button 
          onClick={handleSave}
          className="text-gray-500 hover:text-blue-500 transition-colors flex items-center"
          aria-label="Save for later"
        >
          <FaBookmark className="mr-1" /> Save for later
        </button>
      </div>
      
      <div className="mt-8 text-center">
        <button 
          onClick={handleBackToTop}
          className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Back to top"
        >
          <FaArrowUp className="mr-1" /> Back to top
        </button>
      </div>
    </>
  );
}