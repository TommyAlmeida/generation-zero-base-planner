import { Building, BuildingCategory } from '../types/buildings';

const parseSize = (size: string): { width: number; height: number } => {
  const [width, height] = size.split('x').map(Number);
  return { width, height };
};

export const buildings: Building[] = [
  {
    id: 'soviet-reinforced-pylon',
    name: 'Soviet Reinforced Pylon',
    category: BuildingCategory.WALLS,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Tall pylon made of concrete and steel. Great for adding corners and end posts to high walls.',
    resources: { Steel: 6, Cement: 2 },
    dlc: true
  },
  {
    id: 'resistance-low-pylon',
    name: 'Resistance Low Pylon',
    category: BuildingCategory.WALLS,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Wooden pylon. Great for adding corners and end posts to low walls.',
    resources: { Wood: 2, Textile: 2 }
  },
  {
    id: 'resistance-scaffolding-ramp',
    name: 'Resistance Scaffolding Ramp',
    category: BuildingCategory.WALLS,
    size: '3x1',
    ...parseSize('3x1'),
    description: 'Scaffolding ramp that can be used to provide access to scaffolding platforms.',
    resources: { Steel: 2, Wood: 2 }
  },
  {
    id: 'resistance-scaffolding-platform',
    name: 'Resistance Scaffolding Platform',
    category: BuildingCategory.WALLS,
    size: '3x1',
    ...parseSize('3x1'),
    description: 'Scaffolding platform that provides a flexible elevated shooting position. Great when combined with high walls.',
    resources: { Steel: 2, Wood: 2 }
  },
  {
    id: 'soviet-reinforced-wall',
    name: 'Soviet Reinforced Wall',
    category: BuildingCategory.WALLS,
    size: '3x1',
    ...parseSize('3x1'),
    description: 'Tall wall made of concrete and steel. Features a shooting hatch which can be opened manually.',
    resources: { Cement: 2, Steel: 6 }
  },
  {
    id: 'soviet-concrete-pylon',
    name: 'Soviet Concrete Pylon',
    category: BuildingCategory.WALLS,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Tall concrete pylon with barbed wire on top. Great for adding corners and end posts to high walls.',
    resources: { Cement: 8, Steel: 8 }
  },
  {
    id: 'security-fence',
    name: 'Security Fence',
    category: BuildingCategory.WALLS,
    size: '3x1',
    ...parseSize('3x1'),
    description: 'Light chain-link fence supported by a concrete Jersey barrier.',
    resources: { Steel: 6, Cement: 2 },
    dlc: true
  },
  {
    id: 'resistance-low-wood-wall',
    name: 'Resistance Low Wood Wall',
    category: BuildingCategory.WALLS,
    size: '3x1',
    ...parseSize('3x1'),
    description: 'Low wooden defensive wall, quick and cheap to build, but not very durable.',
    resources: { Wood: 2, Textile: 2 }
  },
  {
    id: 'resistance-high-reinforced-wall',
    name: 'Resistance High Reinforced Wall',
    category: BuildingCategory.WALLS,
    size: '3x1',
    ...parseSize('3x1'),
    description: 'Tall defensive wall, reinforced with extra protection and durability',
    resources: { Wood: 4, Steel: 4 }
  },
  {
    id: 'soviet-reinforced-gate',
    name: 'Soviet Reinforced Gate',
    category: BuildingCategory.WALLS,
    size: '3x3',
    ...parseSize('3x3'),
    description: 'Tall gate made of concrete and steel. Can be opened manually or automatically.',
    resources: { Steel: 6, Cement: 2 }
  },

  // Defense
  {
    id: 'resistance-human-decoy',
    name: 'Resistance Human Decoy',
    category: BuildingCategory.DEFENSE,
    size: '1x2',
    ...parseSize('1x2'),
    description: 'A decoy designed after a human. This is meant to distract machines from other helpful structures or allies. This decoy activates once a machine comes within view.',
    resources: { Wood: 4, Electrolyte: 2, Textile: 4 },
    dlc: true
  },
  {
    id: 'resistance-spiked-wall-trap',
    name: 'Resistance Spiked Wall Trap',
    category: BuildingCategory.DEFENSE,
    size: '4x3',
    ...parseSize('4x3'),
    description: 'A reinforced wall that is connected to a pressure plate system which can trigger makeshift spikes. Enemies that come in contact with any of the spikes receive moderate damage.',
    resources: { Wood: 4, Textile: 4, Steel: 4 },
    dlc: true
  },
  {
    id: 'soviet-guardhouse',
    name: 'Soviet Guardhouse',
    category: BuildingCategory.DEFENSE,
    size: '3x5',
    ...parseSize('3x5'),
    description: 'Tall shooting position made of concrete, steel and sandbags.',
    resources: { Steel: 8, Textile: 8 }
  },
  {
    id: 'resistance-explosive-barrel',
    name: 'Resistance Explosive Barrel',
    category: BuildingCategory.DEFENSE,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'A red explosive barrel. It can be utilized as a trap to deal heavy damage to enemies caught within the blast radius.',
    resources: { Steel: 4, Explosive: 2 },
    dlc: true
  },
  {
    id: 'resistance-sniper-tower',
    name: 'Resistance Sniper Tower',
    category: BuildingCategory.DEFENSE,
    size: '3x3',
    ...parseSize('3x3'),
    description: 'Protected sniper overwatch position. Manned by a hidden Resistance fighter who fires automatically at any hostile unit that comes within their field of view.',
    resources: { Steel: 16, Wood: 16, Aluminum: 4 },
    dlc: true
  },
  {
    id: 'soviet-pillbox',
    name: 'Soviet Pillbox',
    category: BuildingCategory.DEFENSE,
    size: '4x4',
    ...parseSize('4x4'),
    description: 'Sturdy shooting position featuring an Al-76 assault rifle. Manned by a hidden fighter that fires automatically at any hostile unit that comes within its field of view.',
    resources: { Copper: 4, Cement: 16, Steel: 16 }
  },
  {
    id: 'resistance-sandbag-shooting-position',
    name: 'Resistance Sandbag Shooting Position',
    category: BuildingCategory.DEFENSE,
    size: '4x6',
    ...parseSize('4x6'),
    description: 'A sandbag focused, defensive shooting position which allows for good defense against an onslaught of bullets.',
    resources: { Wood: 8, Textile: 8 },
    dlc: true
  },
  {
    id: 'resistance-hunting-tower',
    name: 'Resistance Hunting Tower',
    category: BuildingCategory.DEFENSE,
    size: '3x7',
    ...parseSize('3x7'),
    description: 'Wooden watchtower similar to those used by hunters, allowing the user to take advantage of the high-ground shooting position.',
    resources: { Wood: 8, Textile: 8 }
  },
  {
    id: 'resistance-machine-gun-pillbox',
    name: 'Resistance Machine Gun Pillbox',
    category: BuildingCategory.DEFENSE,
    size: '4x4',
    ...parseSize('4x4'),
    description: 'Protected machine gun position. Manned by a hidden Resistance fighter that fires automatically at any hostile unit that comes within its field of view.',
    resources: { Wood: 16, Steel: 16, Lead: 4 }
  },
  {
    id: 'resistance-spiked-floor-trap',
    name: 'Resistance Spiked Floor Trap',
    category: BuildingCategory.DEFENSE,
    size: '4x4',
    ...parseSize('4x4'),
    description: 'A specially constructed floor that is connected to a pressure plate system which can trigger makeshift spikes. Enemies that come in contact with the activated spikes receive moderate damage.',
    resources: { Wood: 4, Textile: 4, Steel: 4 },
    dlc: true
  },
  {
    id: 'resistance-grenade-launcher-pillbox',
    name: 'Resistance Grenade Launcher Pillbox',
    category: BuildingCategory.DEFENSE,
    size: '4x4',
    ...parseSize('4x4'),
    description: 'A repurposed tank machine weapon. Manned by a hidden Resistance fighter that fires automatically at any hostile unit that comes within its field of view.',
    resources: { Titanium: 4, Wood: 16, Steel: 16 },
    dlc: true
  },

  // Stations
  {
    id: 'medical-trailer',
    name: 'Medical Trailer',
    category: BuildingCategory.STATIONS,
    size: '5x6',
    ...parseSize('5x6'),
    description: 'Manned by a Resistance medic who will heal anybody visiting the trailer. The trailer must be kept stocked with health items.',
    resources: { Titanium: 4, Steel: 16, Electrolyte: 8 },
    dlc: true
  },
  {
    id: 'consumable-crafting-station',
    name: 'Consumable Crafting Station',
    category: BuildingCategory.STATIONS,
    size: '2x1',
    ...parseSize('2x1'),
    description: 'The consumable crafting station can be used to create consumable items, such as ammunition and first aid kits.',
    resources: { Lead: 2, Electrolyte: 4, Steel: 8 }
  },
  {
    id: 'fmtel-station',
    name: 'FMTel Station',
    category: BuildingCategory.STATIONS,
    size: '2x1',
    ...parseSize('2x1'),
    description: 'A terminal connected to the Swedish military forces\' telecommunications network. It provides access to Assignments sent by an unknown source through the FMTel network.',
    resources: { Steel: 8, Electrolyte: 4, Copper: 2 }
  },
  {
    id: 'recycling-station',
    name: 'Recycling Station',
    category: BuildingCategory.STATIONS,
    size: '2x1',
    ...parseSize('2x1'),
    description: 'The recycling station can be used to break items down into crafting resources and store them in your storage box.',
    resources: { Steel: 8, Aluminum: 2, Electrolyte: 4 }
  },
  {
    id: 'vehicle-station',
    name: 'Vehicle Station',
    category: BuildingCategory.STATIONS,
    size: '6x6',
    ...parseSize('6x6'),
    description: 'A station that can be used to spawn vehicles, such as bicycles.',
    resources: { Steel: 8, Accelerant: 4, Electrolyte: 4 }
  },
  {
    id: 'apparel-crafting-station',
    name: 'Apparel Crafting Station',
    category: BuildingCategory.STATIONS,
    size: '2x1',
    ...parseSize('2x1'),
    description: 'The apparel crafting station can be used to enhance apparel items with beneficial properties, such as increased armor or stealth.',
    resources: { Electrolyte: 4, Steel: 8, Thread: 4 }
  },
  {
    id: 'storage-box',
    name: 'Storage Box',
    category: BuildingCategory.STATIONS,
    size: '2x1',
    ...parseSize('2x1'),
    description: 'The storage box (easily recognizable by its product name: PLUNDRA) can be used to store larges amounts of items or equipment you have collected in the field, to free up space in your inventory.',
    resources: { Adhesive: 4, Steel: 8, Titanium: 2 }
  },

  // Decoration
  {
    id: 'hunter-war-trophy',
    name: 'Hunter War Trophy',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Mounted Hunter trophy, a reminder of past victories.',
    resources: { Aluminum: 1, Wood: 4 },
    dlc: true
  },
  {
    id: 'runner-shooting-target',
    name: 'Runner Shooting Target',
    category: BuildingCategory.DECORATION,
    size: '2x1',
    ...parseSize('2x1'),
    description: 'Runner shooting target with highlighted weak points.',
    resources: { Wood: 2, Steel: 2 }
  },
  {
    id: 'classic-jukebox',
    name: 'Classic Jukebox',
    category: BuildingCategory.DECORATION,
    size: '1x2',
    ...parseSize('1x2'),
    description: 'A classic jukebox that will play your choice of music. Jukebox music may attract unwanted attention.',
    resources: { Plastic: 8, Electrolyte: 4, Wood: 8 },
    dlc: true
  },
  {
    id: 'large-soviet-crate',
    name: 'Large Soviet Crate',
    category: BuildingCategory.DECORATION,
    size: '3x1',
    ...parseSize('3x1'),
    description: 'A wooden crate used by Soviet forces to transport items.',
    resources: { Wood: 2, Steel: 2 }
  },
  {
    id: 'old-outhouse',
    name: 'Old Outhouse',
    category: BuildingCategory.DECORATION,
    size: '2x2',
    ...parseSize('2x2'),
    description: 'A simple, time tested classic. Convenient for all your lavatorial needs.',
    resources: { Textile: 4, Wood: 4 }
  },
  {
    id: 'resistance-decorative-hedge',
    name: 'Resistance Decorative Hedge',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Decorative hedge that is sometimes used by the Resistance to camouflage important positions.',
    resources: { Wood: 2, Plastic: 2 }
  },
  {
    id: 'resistance-tall-spotlight',
    name: 'Resistance Tall Spotlight',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Tall decorative lamppost with multiple spotlights.',
    resources: { Steel: 4, Electrolyte: 2 }
  },
  {
    id: 'portable-spotlight',
    name: 'Portable Spotlight',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'A motor driven spotlight on a tripod. Spotlight and automatic panning feature can be turned on or off as required.',
    resources: { Electrolyte: 2, Steel: 4 },
    dlc: true
  },
  {
    id: 'resistance-banner',
    name: 'Resistance Banner',
    category: BuildingCategory.DECORATION,
    size: '2x2',
    ...parseSize('2x2'),
    description: 'Improvised banner with the symbol of the Resistance.',
    resources: { Wood: 2, Textile: 2 }
  },
  {
    id: 'seeker-shooting-target',
    name: 'Seeker Shooting Target',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Seeker shooting target with highlighted weak points.',
    resources: { Wood: 2, Steel: 2 }
  },
  {
    id: 'tank-war-trophy',
    name: 'Tank War Trophy',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Mounted Tank trophy, a reminder of past victories.',
    resources: { Aluminum: 1, Wood: 4 },
    dlc: true
  },
  {
    id: 'resistance-tall-lantern',
    name: 'Resistance Tall Lantern',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'A classic decorative light source mounted on a tall pole.',
    resources: { Steel: 4, Electrolyte: 2 }
  },
  {
    id: 'resistance-low-lantern',
    name: 'Resistance Low Lantern',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Decorative light source mounted on an improvised tripod.',
    resources: { Wood: 4, Accelerant: 2 }
  },
  {
    id: 'runner-war-trophy',
    name: 'Runner War Trophy',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Mounted Runner trophy, a reminder of past victories.',
    resources: { Aluminum: 1, Wood: 4 },
    dlc: true
  },
  {
    id: 'hunter-shooting-target',
    name: 'Hunter Shooting Target',
    category: BuildingCategory.DECORATION,
    size: '2x1',
    ...parseSize('2x1'),
    description: 'Hunter shooting target with highlighted weak points.',
    resources: { Wood: 2, Steel: 2 }
  },
  {
    id: 'tick-war-trophy',
    name: 'Tick War Trophy',
    category: BuildingCategory.DECORATION,
    size: '1x1',
    ...parseSize('1x1'),
    description: 'Tick on a stick.',
    resources: { Wood: 4, Aluminum: 1 }
  }
];