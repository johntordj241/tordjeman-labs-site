import React from 'react';
import { Terminal, GitBranch, Play, Save } from 'lucide-react';

interface ConsoleCommandsProps {
  onClear: () => void;
  onSave: () => void;
  onRun: () => void;
}

export default function ConsoleCommands({ onClear, onSave, onRun }: ConsoleCommandsProps) {
  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-800 border-t border-gray-700">
      <button
        onClick={onClear}
        className="p-1 text-gray-400 hover:text-white transition-colors"
        title="Clear console"
      >
        <Terminal className="h-4 w-4" />
      </button>
      
      <button
        onClick={onSave}
        className="p-1 text-gray-400 hover:text-white transition-colors"
        title="Save output"
      >
        <Save className="h-4 w-4" />
      </button>
      
      <button
        onClick={onRun}
        className="p-1 text-gray-400 hover:text-white transition-colors"
        title="Run script"
      >
        <Play className="h-4 w-4" />
      </button>

      <div className="flex-1" />
      
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <GitBranch className="h-4 w-4" />
        <span>main</span>
      </div>
    </div>
  );
}