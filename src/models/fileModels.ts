// Define the type for a file node
export interface FileNode {
  type: "file";
  name: string;
  meta: string; // e.g., 'js', 'ts', 'html', etc.
}

// Define the type for a folder node
export interface FolderNode {
  type: "folder";
  name: string;
  data: (FileNode | FolderNode)[]; // A folder can contain files or other folders
}

// Define the overall file structure type
export type FileStructure = FolderNode;
