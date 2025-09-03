import React from 'react';
import { Button } from '../Button/Button';
import { Heart, Download, Trash2, Copy, ExternalLink } from 'lucide-react';
import Modal from './Modal';
import { useState } from 'react';

interface ComponentCardProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  author?: string;
  views?: string;
  likes?: string;
  isNew?: boolean;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  preview,
  author,
  views,
  likes,
  isNew
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Preview Area */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 min-h-[200px] flex items-center justify-center">
        {isNew && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
              New
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Button variant="secondary" size="sm" className="opacity-75 hover:opacity-100">
            <Copy className="h-3 w-3" />
          </Button>
        </div>
        <div className="absolute top-3 right-3 flex space-x-2">
          {isNew && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
              New
            </span>
          )}
          <Button variant="secondary" size="sm" className="opacity-75 hover:opacity-100">
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
        {preview}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>

        {/* Stats */}
        {(author || views || likes) && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              {author && <span>by {author}</span>}
              {views && <span>{views} views</span>}
            </div>
            {likes && (
              <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <Heart className="h-4 w-4" />
                <span>{likes}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface ButtonExample {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  author: string;
  views: string;
  likes: string;
  isNew?: boolean;
}

interface MainContentProps {
  selectedComponent: string;
}

export const MainContent: React.FC<MainContentProps> = ({ selectedComponent }) => {
  const getComponentExamples = (): ButtonExample[] => {
    switch (selectedComponent) {
      case 'Buttons':
        return [
          {
            title: 'Primary Button',
            description: 'Standard primary action button with hover states',
            preview: <Button variant="primary">Get Started</Button>,
            code: `<Button variant=\"primary\">Get Started</Button>`,
            author: 'Design System',
            views: '38.7k',
            likes: '559',
            isNew: false
          },
          {
            title: 'Button with Icon',
            description: 'Button component with leading icon',
            preview: (
              <Button variant="primary">
                <Download className="h-4 w-4" />
                Download
              </Button>
            ),
            code: `<Button variant=\"primary\">\n  <Download className=\"h-4 w-4\" />\n  Download\n</Button>`,
            author: 'UI Team',
            views: '21.7k',
            likes: '492',
            isNew: false
          },
          {
            title: 'Danger Button',
            description: 'Destructive action button for critical operations',
            preview: (
              <Button variant="danger">
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            ),
            code: `<Button variant=\"danger\">\n  <Trash2 className=\"h-4 w-4\" />\n  Delete\n</Button>`,
            author: 'Components',
            views: '16.1k',
            likes: '240',
            isNew: false
          },
          {
            title: 'Loading Button',
            description: 'Button with loading state and spinner',
            preview: <Button loading>Processing...</Button>,
            code: `<Button loading>Processing...</Button>`,
            author: 'Interactive',
            views: '13.4k',
            likes: '383',
            isNew: false
          },
          {
            title: 'Secondary Button',
            description: 'Secondary action button with outline style',
            preview: <Button variant="secondary">Cancel</Button>,
            code: `<Button variant=\"secondary\">Cancel</Button>`,
            author: 'Base Components',
            views: '7.9k',
            likes: '301',
            isNew: false
          },
          {
            title: 'Small Button',
            description: 'Compact button for tight spaces',
            preview: <Button size="sm">Small Action</Button>,
            code: `<Button size=\"sm\">Small Action</Button>`,
            author: 'Utilities',
            views: '9.3k',
            likes: '250',
            isNew: false
          }
        ];
      default:
        return [
          {
            title: `${selectedComponent} Component`,
            description: `Example ${selectedComponent.toLowerCase()} component implementation`,
            preview: (
              <div className="text-center text-gray-500 dark:text-gray-400">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg mx-auto mb-3"></div>
                <p className="text-sm">Component Preview</p>
              </div>
            ),
            code: `<div className=\"w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg\"></div>`,
            author: 'Component Library',
            views: '2.6k',
            likes: '45',
            isNew: true
          }
        ];
    }
  };

  const examples = getComponentExamples();

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExample, setSelectedExample] = useState<ButtonExample | null>(null);

  const handleCardClick = (example: ButtonExample) => {
    setSelectedExample(example);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedExample(null);
  };

  const handleCopyCode = () => {
    if (selectedExample) {
      navigator.clipboard.writeText(selectedExample.code);
    }
  };

  return (
    <main className="flex-1 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {selectedComponent}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Explore our collection of {selectedComponent.toLowerCase()} components
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search ${selectedComponent.toLowerCase()}...`}
                className="pl-4 pr-4 py-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Recommended</option>
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Most Liked</option>
            </select>
          </div>
        </div>
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <div key={index} onClick={() => handleCardClick(example)} className="cursor-pointer">
            <ComponentCard
              title={example.title}
              description={example.description}
              preview={example.preview}
              author={example.author}
              views={example.views}
              likes={example.likes}
              isNew={example.isNew}
            />
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 text-center">
        <Button variant="secondary" size="lg">
          Load More Components
        </Button>
      </div>

      {/* Modal for Button Preview and Code */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        {selectedExample && (
          <div>
            <div className="mb-6 flex flex-col items-center">
              <div className="mb-4">{selectedExample.preview}</div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-4 relative">
                <pre className="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words">{selectedExample.code}</pre>
                <button
                  onClick={handleCopyCode}
                  className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Copy code
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
};