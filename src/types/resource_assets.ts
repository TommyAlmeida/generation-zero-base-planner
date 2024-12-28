
const getImgUrl = (name: string) => {
    return `src/assets/resources/${name}_Item.png`;
}

export const resourceAssets: Record<string, string> = {
    Steel: getImgUrl('Steel'),
    Cement: getImgUrl('Cement'),
    Wood: getImgUrl('Wood'),
    Textile: getImgUrl('Textile'),
    Electrolyte: getImgUrl('Electrolyte'),
    Explosive: getImgUrl('Explosive'),
    Aluminum: getImgUrl('Aluminum'),
    Copper: getImgUrl('Copper'),
    Lead: getImgUrl('Lead'),
    Titanium: getImgUrl('Titanium'),
    Accelerant: getImgUrl('Accelerant'),
    Thread: getImgUrl('Thread'),
    Adhesive: getImgUrl('Adhesive'),
    Plastic: getImgUrl('Plastic'),
};