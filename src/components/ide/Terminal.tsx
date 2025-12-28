import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import 'xterm/css/xterm.css';

export default function WebTerminal() {
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
          foreground: '#d4d4d4'
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

      // Write welcome message
      terminal.current.writeln('Welcome to Tordjeman Labs Terminal');
      terminal.current.writeln('Type "help" for available commands');
      terminal.current.write('\r\n$ ');

      // Handle input
      terminal.current.onKey(({ key, domEvent }) => {
        const ev = domEvent;
        const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

        if (ev.keyCode === 13) { // Enter key
          terminal.current?.writeln('');
          terminal.current?.write('$ ');
        } else if (ev.keyCode === 8) { // Backspace
          if (terminal.current) {
            terminal.current.write('\b \b');
          }
        } else if (printable) {
          terminal.current?.write(key);
        }
      });

      // Handle resize
      const handleResize = () => fitAddon.fit();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        terminal.current?.dispose();
      };
    }
  }, []);

  return (
    <div className="h-full w-full bg-[#1e1e1e] rounded-lg overflow-hidden">
      <div ref={terminalRef} className="h-full" />
    </div>
  );
}