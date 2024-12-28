import { PlacedBuilding } from '../types/buildings';

const STORAGE_KEY = 'baseLayout';

export function useStorage() {
  const saveLayout = (buildings: PlacedBuilding[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(buildings));
  };

  const loadLayout = (): PlacedBuilding[] | null => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  };

  return { saveLayout, loadLayout };
}