import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Save, Users, GitBranch, Play } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CollaborativeIDE() {
  const editorRef = useRef<any>(null);
  const [code, setCode] = useState(`// Start coding here...
console.log('Hello, World!');`);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getValue();
      console.log('Saving content:', content);
      toast.success('Changes saved successfully');
    }
  };

  const handleRun = () => {
    if (editorRef.current) {
      const content = editorRef.current.getValue();
      console.log('Running code:', content);
      toast.success('Code execution started');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleSave}
            className="btn bg-blue-600 hover:bg-blue-700 flex items-center"
          >
            <Save className="h-4 w-4 mr-2" />
            Save
          </button>
          <button 
            onClick={handleRun}
            className="btn bg-green-600 hover:bg-green-700 flex items-center"
          >
            <Play className="h-4 w-4 mr-2" />
            Run
          </button>
          <button className="btn-outline border-gray-300 text-gray-700 flex items-center">
            <GitBranch className="h-4 w-4 mr-2" />
            main
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-green-500" />
          <span className="text-sm text-gray-600">
            Local Editor
          </span>
        </div>
      </div>

      <div className="h-[600px]">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            formatOnPaste: true,
            formatOnType: true
          }}
          onMount={handleEditorDidMount}
        />
      </div>
    </div>
  );
}