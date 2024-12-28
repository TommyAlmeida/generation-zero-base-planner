import React, { useState, useEffect } from 'react';
import { Building, BuildingCategory } from '../types/buildings';
import { buildings } from '../data/buildings';
import { GripVertical, Search } from 'lucide-react';

interface SidebarProps {
  onDragStart: (building: Building | null) => void;
  buildingCounts: Record<string, number>;
}

export const Sidebar: React.FC<SidebarProps> = ({ onDragStart, buildingCounts }) => {
  const [selectedCategories, setSelectedCategories] = useState<BuildingCategory[]>([]);
  const [sortedBuildings, setSortedBuildings] = useState<Building[]>(buildings);
  const [searchQuery, setSearchQuery] = useState('');


  const categories = Object.values(BuildingCategory);

  useEffect(() => {
    let filtered = [...buildings];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(building =>
        building.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        building.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(building =>
        selectedCategories.includes(building.category)
      );
    }

    setSortedBuildings(filtered);
  }, [selectedCategories, searchQuery]);

  const handleCategoryClick = (category: BuildingCategory) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  return (
    <div className="w-[300px] bg-gray-800 border-r border-gray-700 h-screen overflow-y-auto">
      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search buildings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-700/50 rounded-lg px-4 py-2 pl-10 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-2 p-4 gap-2">
        {categories.map(category => (
          <div
            key={`${category}-type`}
            className={`bg-gray-700/50 rounded-lg p-2 text-xs cursor-pointer
              ${selectedCategories.includes(category)
                ? 'bg-blue-600 text-white'
                : 'text-gray-400'
              }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {categories.map(category => (
        <div key={category} className="p-4">
          <h2 className="text-lg font-semibold mb-3 text-gray-200">{category}</h2>
          <div className="space-y-2">
            {sortedBuildings
              .filter(building => building.category === category)
              .map(building => (
                <div
                  key={building.id}
                  className="p-3 bg-gray-700/50 rounded-lg cursor-move hover:bg-gray-700 transition-colors group"
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('building', JSON.stringify(building));
                    onDragStart(building);
                  }}
                  onDragEnd={() => {
                    onDragStart(null);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GripVertical className="w-5 h-5 text-gray-400" />
                      <div>
                        <span className="font-medium text-xs text-gray-200">{building.name}</span>
                        <div className="flex gap-2">
                          <p className="text-xs text-gray-400">{building.size}</p>
                          {building.dlc && <span className="text-xs font-medium text-blue-400">DLC</span>}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">
                      {buildingCounts[building.id] || 0}
                    </span>
                  </div>
                  <div className="hidden group-hover:block mt-2 text-xs text-gray-400">
                    {building.description}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};