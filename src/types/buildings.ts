export interface Building {
  id: string;
  name: string;
  category: BuildingCategory;
  size: string;
  width: number;
  height: number;
  description: string;
  resources: Resources;
  rotation?: number;
}

export interface Resources {
  Steel?: number;
  Cement?: number;
  Wood?: number;
  Textile?: number;
  Electrolyte?: number;
  Explosive?: number;
  Aluminum?: number;
  Copper?: number;
  Lead?: number;
  Titanium?: number;
  Accelerant?: number;
  Thread?: number;
  Adhesive?: number;
  Plastic?: number;
}

export enum BuildingCategory {
  WALLS = 'Walls',
  DEFENSE = 'Defense',
  STATIONS = 'Stations',
  DECORATION = 'Decoration'
}

export interface PlacedBuilding extends Building {
  x: number;
  y: number;
}