import React, { useRef, useState, useCallback } from 'react';
import { Building, PlacedBuilding } from '../types/buildings';
import { RotateCw } from 'lucide-react';

interface CanvasProps {
  buildings: PlacedBuilding[];
  onPlaceBuilding: (building: PlacedBuilding) => void;
  onRemoveBuilding: (building: PlacedBuilding) => void;
  onUpdateBuilding: (oldBuilding: PlacedBuilding, newBuilding: PlacedBuilding) => void;
  draggedBuilding: Building | null;
  zoom: number;
  backgroundImage?: string;
  backgroundOpacity?: number;
}

export const Canvas: React.FC<CanvasProps> = ({
  buildings,
  onPlaceBuilding,
  onRemoveBuilding,
  onUpdateBuilding,
  draggedBuilding,
  zoom,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isValid, setIsValid] = useState(true);
  const [selectedBuilding, setSelectedBuilding] = useState<PlacedBuilding | null>(null);
  const [isDraggingPlaced, setIsDraggingPlaced] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const CELL_SIZE = 20 * zoom;
  const GRID_SIZE = 100;

  const getBuildingColor = (category: string, opacity: number = 0.7) => {
    const colors: Record<string, string> = {
      'Walls': '75, 85, 99',
      'Defense': '239, 68, 68',
      'Stations': '59, 130, 246',
      'default': '16, 185, 129'
    };
    return `rgba(${colors[category] || colors.default}, ${opacity})`;
  };

  const checkCollision = useCallback((x: number, y: number, width: number, height: number, excludeBuilding?: PlacedBuilding) => {
    return buildings.some(building => {
      if (excludeBuilding && building === excludeBuilding) return false;

      const b1 = { x, y, width, height };
      const b2 = {
        x: building.x,
        y: building.y,
        width: building.width,
        height: building.height,
      };
      return !(
        b1.x + b1.width <= b2.x ||
        b1.x >= b2.x + b2.width ||
        b1.y + b1.height <= b2.y ||
        b1.y >= b2.y + b2.height
      );
    });
  }, [buildings]);

  const getGridPosition = (e: React.MouseEvent | React.DragEvent) => {
    if (!canvasRef.current) return { x: 0, y: 0 };

    const rect = canvasRef.current.getBoundingClientRect();
    const scrollLeft = canvasRef.current.scrollLeft;
    const scrollTop = canvasRef.current.scrollTop;

    return {
      x: Math.floor((e.clientX - rect.left + scrollLeft) / CELL_SIZE),
      y: Math.floor((e.clientY - rect.top + scrollTop) / CELL_SIZE)
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { x, y } = getGridPosition(e);
    setMousePos({ x, y });

    const buildingToCheck = isDraggingPlaced ? selectedBuilding : draggedBuilding;
    if (!buildingToCheck) return;

    const excludeBuilding = isDraggingPlaced && selectedBuilding ? selectedBuilding : undefined;

    setIsValid(
      x >= 0 &&
      y >= 0 &&
      x + buildingToCheck.width <= GRID_SIZE &&
      y + buildingToCheck.height <= GRID_SIZE &&
      !checkCollision(
        x,
        y,
        buildingToCheck.width,
        buildingToCheck.height,
        excludeBuilding
      )
    );
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if ((!draggedBuilding && !selectedBuilding) || !isValid) return;

    if (isDraggingPlaced && selectedBuilding) {
      const updatedBuilding = {
        ...selectedBuilding,
        x: mousePos.x,
        y: mousePos.y,
      };
      onUpdateBuilding(selectedBuilding, updatedBuilding);
      setSelectedBuilding(null);
      setIsDraggingPlaced(false);
    } else if (draggedBuilding) {
      const building: PlacedBuilding = {
        ...draggedBuilding,
        x: mousePos.x,
        y: mousePos.y,
        rotation: 0,
      };
      onPlaceBuilding(building);
    }
  };

  const handleBuildingClick = (e: React.MouseEvent, building: PlacedBuilding) => {
    e.stopPropagation();
    if (e.button === 2) { // Right click
      onRemoveBuilding(building);
    } else {
      setSelectedBuilding(building);
    }
  };

  const handleRotateBuilding = (e: React.MouseEvent, building: PlacedBuilding) => {
    e.stopPropagation();
    const updatedBuilding = {
      ...building,
      rotation: (building.rotation || 0) + 90,
    };
    onUpdateBuilding(building, updatedBuilding);
  };

  const renderBuildingContent = (building: PlacedBuilding) => {
    if (building.customComponent) {
      const CustomComponent = building.customComponent;
      return <CustomComponent building={building} />;
    }

    if (building.imageUrl) {
      return (
        <div className="w-full h-full relative">
          <img
            src={building.imageUrl}
            alt={building.name}
            className="w-full h-full object-contain"
          />
          <span className="absolute bottom-1 left-1 text-xs leading-4 font-medium px-1 text-center text-white bg-gray-900/50 rounded">
            {building.name}
          </span>
        </div>
      );
    }

    return (
      <span className="text-xs leading-4 font-medium px-1 text-center text-white">
        {building.name}
      </span>
    );
  };

  const getPreviewBuilding = (): PlacedBuilding | null => {
    if (isDraggingPlaced && selectedBuilding) {
      return selectedBuilding;
    }
    if (draggedBuilding) {
      return {
        ...draggedBuilding,
        x: mousePos.x,
        y: mousePos.y,
        rotation: 0,
      };
    }
    return null;
  };


  return (
    <div
      ref={canvasRef}
      className="relative bg-gray-800 rounded-lg shadow-inner overflow-auto"
      style={{
        width: CELL_SIZE * GRID_SIZE,
        height: CELL_SIZE * GRID_SIZE,
      }}
      onDragOver={(e) => {
        e.preventDefault();
        handleMouseMove(e);
      }}
      onDrop={handleDrop}
      onMouseMove={handleMouseMove}
      onContextMenu={(e) => e.preventDefault()}
      onClick={() => setSelectedBuilding(null)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          backgroundImage: 'linear-gradient(to right, rgba(75, 85, 99, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 1px, transparent 1px)',
        }}
      />

      {/* Placed Buildings */}
      {buildings.map((building, index) => (
        <div
          key={index}
          className={`absolute border-2 flex items-center justify-center transition-all cursor-move group
            ${selectedBuilding === building ? 'border-blue-500 z-10' : 'border-gray-600'}
            ${isDraggingPlaced && selectedBuilding === building ? 'opacity-50' : 'opacity-100'}`}
          style={{
            left: building.x * CELL_SIZE,
            top: building.y * CELL_SIZE,
            width: building.width * CELL_SIZE,
            height: building.height * CELL_SIZE,
            backgroundColor: getBuildingColor(building.category),
            transform: `rotate(${building.rotation || 0}deg)`,
          }}
          onClick={(e) => handleBuildingClick(e, building)}
          draggable
          onDragStart={() => {
            setSelectedBuilding(building);
            setIsDraggingPlaced(true);
          }}
          onDragEnd={() => {
            if (!isValid) {
              setSelectedBuilding(null);
            }
            setIsDraggingPlaced(false);
          }}
        >
          <span className="text-xs leading-4 font-medium px-1 text-center text-white">
            {building.name}
          </span>

          <button
            className="absolute top-1 right-1 p-1 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => handleRotateBuilding(e, building)}
          >
            <RotateCw className="w-4 h-4 text-white" />
          </button>
        </div>
      ))}

      {/* Preview */}
      {(draggedBuilding || isDraggingPlaced) && (
        <div
          className={`absolute border-2 transition-colors flex items-center justify-center ${isValid ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20'
            }`}
          style={{
            left: mousePos.x * CELL_SIZE,
            top: mousePos.y * CELL_SIZE,
            width: (draggedBuilding || selectedBuilding)!.width * CELL_SIZE,
            height: (draggedBuilding || selectedBuilding)!.height * CELL_SIZE,
            transform: `rotate(${isDraggingPlaced ? (selectedBuilding?.rotation || 0) : 0}deg)`,
            pointerEvents: 'none',
            zIndex: 100,
          }}
        >
          {(() => {
            const previewBuilding = getPreviewBuilding();
            return previewBuilding ? renderBuildingContent(previewBuilding) : null;
          })()}
        </div>
      )}
    </div>
  );
};