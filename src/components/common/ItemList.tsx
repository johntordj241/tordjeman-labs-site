import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ItemListProps {
  initialItems?: string[];
  onItemRemove?: (index: number) => void;
}

export default function ItemList({ initialItems = [], onItemRemove }: ItemListProps) {
  const [items, setItems] = useState(initialItems);

  const removeItem = (index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
    onItemRemove?.(index);
  };

  return (
    <div className="space-y-2">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.div
            key={`${item}-${index}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm"
          >
            <span className="text-gray-700">{item}</span>
            <button
              onClick={() => removeItem(index)}
              className="p-1 text-gray-400 hover:text-red-500 transition-colors"
              aria-label={`Remove ${item}`}
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {items.length === 0 && (
        <div className="text-center text-gray-500 py-4">
          No items to display
        </div>
      )}
    </div>
  );
}