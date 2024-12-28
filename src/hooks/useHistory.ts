import { useState } from 'react';
import { PlacedBuilding } from '../types/buildings';

export function useHistory() {
  const [history, setHistory] = useState<PlacedBuilding[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const pushToHistory = (newBuildings: PlacedBuilding[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newBuildings);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      return history[historyIndex - 1];
    }
    return null;
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1);
      return history[historyIndex + 1];
    }
    return null;
  };

  return {
    pushToHistory,
    undo,
    redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1
  };
}