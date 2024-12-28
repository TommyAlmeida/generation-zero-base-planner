import React from 'react';
import { PlacedBuilding } from '../types/buildings';
import { resourceAssets } from '../types/resource_assets';

interface ResourceCounterProps {
  buildings: PlacedBuilding[];
}

export const ResourceCounter: React.FC<ResourceCounterProps> = ({ buildings }) => {
  const totalResources = buildings.reduce((acc, building) => {
    Object.entries(building.resources).forEach(([resource, amount]) => {
      if (amount) acc[resource] = (acc[resource] || 0) + amount;
    });
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="fixed right-4 top-20 w-64 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-3">Resources Required</h3>
      <div className="space-y-2">
        {Object.entries(totalResources).map(([resource, amount]) => (
          <div key={resource} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={resourceAssets[resource]} className="w-6 h-6" alt={resource} />
              <span className="text-gray-200">{resource}</span>
            </div>
            <span className="text-gray-300 font-medium">{amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};