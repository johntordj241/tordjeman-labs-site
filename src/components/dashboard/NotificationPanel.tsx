import React, { useState, useEffect } from 'react';
import { Activity, Bell, CheckCircle, Clock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

interface Notification {
  id: number;
  message: string;
  time: string;
  type: 'update' | 'milestone' | 'report';
  read: boolean;
}

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  // Simulated notifications data
  const fetchNotifications = () => {
    const newNotifications = [
      {
        id: 1,
        message: 'VoiceCrush: Phase de test utilisateurs prévue pour la semaine prochaine',
        time: 'Il y a 1 heure',
        type: 'update' as const,
        read: false
      },
      {
        id: 2,
        message: 'OpenFin: Nouveau jalon atteint dans le développement blockchain',
        time: 'Il y a 3 heures',
        type: 'milestone' as const,
        read: false
      },
      {
        id: 3,
        message: 'Rapport mensuel disponible',
        time: 'Il y a 1 jour',
        type: 'report' as const,
        read: false
      }
    ];

    setNotifications(newNotifications);
  };

  useEffect(() => {
    fetchNotifications();
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      fetchNotifications();
    }, 300000); // Every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'update':
        return <Activity className="h-5 w-5 text-blue-900" />;
      case 'milestone':
        return <CheckCircle className="h-5 w-5 text-green-900" />;
      case 'report':
        return <Clock className="h-5 w-5 text-purple-900" />;
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    toast.success('Notification marquée comme lue');
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 bg-blue-900 text-white rounded-full p-4 shadow-lg hover:bg-blue-800 transition-colors"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            <h3 className="font-semibold">Notifications Récentes</h3>
            {unreadCount > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {unreadCount} nouvelle{unreadCount > 1 ? 's' : ''}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              Aucune notification disponible
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                    notification.read ? 'bg-gray-50' : 'bg-blue-50'
                  }`}
                >
                  {getIcon(notification.type)}
                  <div className="flex-1">
                    <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-900'}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      Marquer comme lu
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={() => {
              setNotifications(prev => prev.map(n => ({ ...n, read: true })));
              toast.success('Toutes les notifications ont été marquées comme lues');
            }}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Tout marquer comme lu
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}