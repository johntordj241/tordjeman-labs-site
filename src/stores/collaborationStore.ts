import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  color: string;
  cursor?: { line: number; column: number };
}

interface CollaborationState {
  currentUser: User | null;
  connectedUsers: User[];
  setCurrentUser: (user: User) => void;
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
  updateUserCursor: (userId: string, cursor: { line: number; column: number }) => void;
}

export const useCollaborationStore = create<CollaborationState>((set) => ({
  currentUser: null,
  connectedUsers: [],
  
  setCurrentUser: (user) => set({ currentUser: user }),
  
  addUser: (user) => set((state) => ({
    connectedUsers: [...state.connectedUsers, user]
  })),
  
  removeUser: (userId) => set((state) => ({
    connectedUsers: state.connectedUsers.filter(user => user.id !== userId)
  })),
  
  updateUserCursor: (userId, cursor) => set((state) => ({
    connectedUsers: state.connectedUsers.map(user =>
      user.id === userId ? { ...user, cursor } : user
    )
  }))
}));