import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Toolbar } from './components/Toolbar';
import { Canvas } from './components/Canvas';
import { ResourceCounter } from './components/ResourceCounter';
import { Building, PlacedBuilding } from './types/buildings';
import { useHistory } from './hooks/useHistory';
import { useStorage } from './hooks/useStorage';
import { Menu } from 'lucide-react';

export default function App() {
  const [buildings, setBuildings] = useState<PlacedBuilding[]>([]);
  const [draggedBuilding, setDraggedBuilding] = useState<Building | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { pushToHistory, undo: handleUndo, redo: handleRedo, canUndo, canRedo } = useHistory();
  const { saveLayout, loadLayout } = useStorage();

  const buildingCounts = buildings.reduce((acc, building) => {
    acc[building.id] = (acc[building.id] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handlePlaceBuilding = (building: PlacedBuilding) => {
    setBuildings(prev => {
      const newBuildings = [...prev, building];
      pushToHistory(newBuildings);
      return newBuildings;
    });
  };

  const handleRemoveBuilding = (building: PlacedBuilding) => {
    setBuildings(prev => {
      const index = prev.indexOf(building);
      if (index === -1) return prev;
      const newBuildings = [...prev.slice(0, index), ...prev.slice(index + 1)];
      pushToHistory(newBuildings);
      return newBuildings;
    });
  };

  const handleUpdateBuilding = (oldBuilding: PlacedBuilding, newBuilding: PlacedBuilding) => {
    setBuildings(prev => {
      const newBuildings = prev.map(b => b === oldBuilding ? newBuilding : b);
      pushToHistory(newBuildings);
      return newBuildings;
    });
  };

  const handleSave = () => {
    saveLayout(buildings);
  };

  const handleLoad = () => {
    const loadedBuildings = loadLayout();
    if (loadedBuildings) {
      setBuildings(loadedBuildings);
      pushToHistory(loadedBuildings);
    }
  };

  const handleReset = () => {
    setBuildings([]);
    pushToHistory([]);
  };

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg md:hidden"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className={`
        fixed inset-y-0 left-0 z-40 transform md:relative md:translate-x-0 transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar
          onDragStart={setDraggedBuilding}
          buildingCounts={buildingCounts}
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Toolbar
          onSave={handleSave}
          onLoad={handleLoad}
          onReset={handleReset}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onZoomIn={() => setZoom(prev => Math.min(prev + 0.1, 2))}
          onZoomOut={() => setZoom(prev => Math.max(prev - 0.1, 0.5))}
          canUndo={canUndo}
          canRedo={canRedo}
        />
        <div className="flex-1 overflow-auto p-4">
          <Canvas
            buildings={buildings}
            onPlaceBuilding={handlePlaceBuilding}
            onRemoveBuilding={handleRemoveBuilding}
            onUpdateBuilding={handleUpdateBuilding}
            draggedBuilding={draggedBuilding}
            zoom={zoom}
          />
        </div>
      </div>
      <ResourceCounter buildings={buildings} />
    </div>
  );
}