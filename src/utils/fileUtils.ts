// src/utils/fileUtils.ts
import { icons } from "./icons";

// Helper function to get the file icon based on the meta type
export const getFileIcon = (meta: string) => {
  switch (meta) {
    case "js":
      return icons.js;
    case "ts":
      return icons.ts;
    case "html":
      return icons.html;
    case "css":
      return icons.css;
    case "img":
      return icons.img;
    case "svg":
      return icons.svg;
    default:
      return icons.js; // Default to js icon if type is unknown
  }
};
