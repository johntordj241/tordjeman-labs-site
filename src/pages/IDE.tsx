import React, { useState, useRef, useEffect } from 'react';
import CollaborativeEditor from '../components/ide/Editor';
import FileExplorer from '../components/ide/FileExplorer';
import WebTerminal from '../components/ide/Terminal';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Maximize2, Minimize2 } from 'lucide-react';

const mockFiles = [
  {
    name: 'src',
    type: 'directory' as const,
    path: '/src',
    children: [
      {
        name: 'components',
        type: 'directory' as const,
        path: '/src/components',
        children: [
          {
            name: 'App.tsx',
            type: 'file' as const,
            path: '/src/components/App.tsx'
          }
        ]
      },
      {
        name: 'main.tsx',
        type: 'file' as const,
        path: '/src/main.tsx'
      }
    ]
  },
  {
    name: 'package.json',
    type: 'file' as const,
    path: '/package.json'
  }
];

export default function IDE() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showTerminal, setShowTerminal] = useState(true);
  const [terminalHeight, setTerminalHeight] = useState(200);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleFileSelect = (path: string) => {
    setSelectedFile(path);
  };

  const toggleTerminal = () => {
    setShowTerminal(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (terminalRef.current) {
        const maxHeight = window.innerHeight * 0.6;
        setTerminalHeight(Math.min(terminalRef.current.scrollHeight, maxHeight));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="h-12 bg-gray-900 flex items-center justify-between px-4">
        <h1 className="text-white text-lg font-semibold">Tordjeman Labs IDE</h1>
        <button
          onClick={toggleTerminal}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label={showTerminal ? 'Hide Terminal' : 'Show Terminal'}
        >
          <Terminal className="h-5 w-5" />
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <FileExplorer files={mockFiles} onFileSelect={handleFileSelect} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {selectedFile ? (
                <motion.div
                  key={selectedFile}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full"
                >
                  <CollaborativeEditor
                    language={selectedFile.endsWith('.tsx') ? 'typescript' : 'javascript'}
                    path={selectedFile}
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400"
                >
                  Select a file to start editing
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {showTerminal && (
              <motion.div
                ref={terminalRef}
                initial={{ height: 0 }}
                animate={{ height: terminalHeight }}
                exit={{ height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="border-t border-gray-200 dark:border-gray-700 relative"
              >
                <div className="absolute top-0 right-0 p-2 z-10">
                  <button
                    onClick={() => setTerminalHeight(prev => prev === 200 ? 400 : 200)}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                  >
                    {terminalHeight === 200 ? (
                      <Maximize2 className="h-4 w-4" />
                    ) : (
                      <Minimize2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <WebTerminal />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}