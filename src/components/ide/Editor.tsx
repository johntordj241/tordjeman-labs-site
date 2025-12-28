import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';
import { useCollaborationStore } from '../../stores/collaborationStore';

interface CollaborativeEditorProps {
  language: string;
  theme?: string;
  path: string;
}

export default function CollaborativeEditor({ language, theme = 'vs-dark', path }: CollaborativeEditorProps) {
  const editorRef = useRef<any>(null);
  const { currentUser } = useCollaborationStore();

  useEffect(() => {
    if (editorRef.current) {
      // Initialize Yjs
      const doc = new Y.Doc();
      const provider = new WebsocketProvider(
        'ws://localhost:1234',
        'monaco-demo',
        doc
      );

      // Define text type for collaboration
      const type = doc.getText('monaco');

      // Create Monaco binding
      const binding = new MonacoBinding(
        type,
        editorRef.current.getModel(),
        new Set([editorRef.current]),
        provider.awareness
      );

      // Set user information for awareness
      provider.awareness.setLocalStateField('user', {
        name: currentUser?.name,
        color: currentUser?.color,
      });

      return () => {
        binding.destroy();
        doc.destroy();
        provider.destroy();
      };
    }
  }, [currentUser]);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        defaultLanguage={language}
        theme={theme}
        path={path}
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
  );
}