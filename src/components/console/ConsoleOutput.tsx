import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { logger } from '../../utils/logger';
import 'xterm/css/xterm.css';

interface ConsoleOutputProps {
  height?: string;
  className?: string;
}

export default function ConsoleOutput({ height = '300px', className = '' }: ConsoleOutputProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminal = useRef<Terminal | null>(null);

  useEffect(() => {
    if (terminalRef.current && !terminal.current) {
      // Initialize terminal
      terminal.current = new Terminal({
        cursorBlink: true,
        fontSize: 14,
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        theme: {
          background: '#1e1e1e',
          foreground: '#d4d4d4',
          cursor: '#ffffff',
          black: '#000000',
          red: '#e06c75',
          green: '#98c379',
          yellow: '#d19a66',
          blue: '#61afef',
          magenta: '#c678dd',
          cyan: '#56b6c2',
          white: '#d4d4d4'
        }
      });

      // Add addons
      const fitAddon = new FitAddon();
      const webLinksAddon = new WebLinksAddon();
      
      terminal.current.loadAddon(fitAddon);
      terminal.current.loadAddon(webLinksAddon);

      // Open terminal in container
      terminal.current.open(terminalRef.current);
      fitAddon.fit();

      // Override console methods to capture logs
      const originalConsole = {
        log: console.log,
        error: console.error,
        warn: console.warn,
        info: console.info
      };

      console.log = (...args) => {
        originalConsole.log(...args);
        if (terminal.current) {
          terminal.current.writeln('\x1b[34m[LOG]\x1b[0m ' + args.join(' '));
        }
      };

      console.error = (...args) => {
        originalConsole.error(...args);
        if (terminal.current) {
          terminal.current.writeln('\x1b[31m[ERROR]\x1b[0m ' + args.join(' '));
        }
      };

      console.warn = (...args) => {
        originalConsole.warn(...args);
        if (terminal.current) {
          terminal.current.writeln('\x1b[33m[WARN]\x1b[0m ' + args.join(' '));
        }
      };

      console.info = (...args) => {
        originalConsole.info(...args);
        if (terminal.current) {
          terminal.current.writeln('\x1b[36m[INFO]\x1b[0m ' + args.join(' '));
        }
      };

      // Handle resize
      const handleResize = () => fitAddon.fit();
      window.addEventListener('resize', handleResize);

      // Write welcome message
      terminal.current.writeln('\x1b[32m=== Tordjeman Labs Console ===\x1b[0m');
      terminal.current.writeln('Type "help" for available commands\n');

      return () => {
        window.removeEventListener('resize', handleResize);
        console.log = originalConsole.log;
        console.error = originalConsole.error;
        console.warn = originalConsole.warn;
        console.info = originalConsole.info;
        terminal.current?.dispose();
      };
    }
  }, []);

  // Example of logging different types of messages
  useEffect(() => {
    logger.dev('Console initialized');
    logger.event.system('Console component mounted');
  }, []);

  return (
    <div 
      className={`bg-[#1e1e1e] rounded-lg overflow-hidden ${className}`}
      style={{ height }}
    >
      <div ref={terminalRef} className="h-full" />
    </div>
  );
}