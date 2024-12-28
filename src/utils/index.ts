export const GRID_SIZE = 100;

export const isWithinBounds = (x: number, y: number, width: number, height: number) => {
    return (
        x >= 0 &&
        y >= 0 &&
        x + width <= GRID_SIZE &&
        y + height <= GRID_SIZE
    );
};

export const getValidPosition = (x: number, y: number, width: number, height: number) => {
    return {
        x: Math.max(0, Math.min(x, GRID_SIZE - width)),
        y: Math.max(0, Math.min(y, GRID_SIZE - height))
    };
};