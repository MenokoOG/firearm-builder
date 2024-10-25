// utils/colorMap.js
const colorMap = {
  black: "#000000",
  silver: "#C0C0C0",
  wooden: "#8B4513", // Brown color for wood
  polymer: "#D3D3D3", // Light grey
  tan: "#D2B48C",
};

export const getValidColor = (color) => colorMap[color] || "#FFFFFF"; // Default to white if unknown
