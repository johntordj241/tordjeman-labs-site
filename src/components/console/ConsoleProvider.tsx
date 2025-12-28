import React, { createContext, useContext, useState, useCallback } from 'react';
import { logger } from '../../utils/logger';

interface ConsoleContextType {
  logs: Array<{
    type: 'log' | 'error' | 'warn' | 'info';
    message: string;
    timestamp: Date;
  }>;
  clearLogs: () => void;
  addLog: (type: 'log' | 'error' | 'warn' | 'info', message: string) => void;
}

const ConsoleContext = createContext<ConsoleContextType | undefined>(undefined);

export function ConsoleProvider({ children }: { children: React.ReactNode }) {
  const [logs, setLogs] = useState<ConsoleContextType['logs']>([]);

  const clearLogs = useCallback(() => {
    setLogs([]);
    logger.event.system('Console cleared');
  }, []);

  const addLog = useCallback((type: 'log' | 'error' | 'warn' | 'info', message: string) => {
    setLogs(prev => [...prev, { type, message, timestamp: new Date() }]);
  }, []);

  return (
    <ConsoleContext.Provider value={{ logs, clearLogs, addLog }}>
      {children}
    </ConsoleContext.Provider>
  );
}

export function useConsole() {
  const context = useContext(ConsoleContext);
  if (context === undefined) {
    throw new Error('useConsole must be used within a ConsoleProvider');
  }
  return context;
}