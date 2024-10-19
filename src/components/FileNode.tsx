import React, { useState } from "react";
import { FolderNode, FileNode as FileNodeType } from "../models/fileModels";
import ContextMenu from "./ContextMenu";
import { icons } from "../utils/icons.ts";
import { getFileIcon } from "../utils/fileUtils";

type NodeProps = {
  node: FolderNode | FileNodeType;
  level: number;
};

const FileNode: React.FC<NodeProps> = ({ node, level }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleLeftClick = (name: string) => {
    setSelected((prevSelected) => (prevSelected === name ? null : name));
    setContextMenu(null); // Close context menu on left click
  };

  const handleRightClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setSelected(name);
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  const handleCopy = () => {
    console.log(`${selected} - Copy`);
    handleCloseContextMenu();
  };

  const handleDelete = () => {
    console.log(`${selected} - Delete`);
    handleCloseContextMenu();
  };

  const handleRename = () => {
    console.log(`${selected} - Rename`);
    handleCloseContextMenu();
  };

  return (
    <div>
      {node.type === "folder" ? (
        <div>
          <div
            className={`folder ${selected === node.name ? "selected" : ""}`}
            style={{ paddingLeft: `${level * 10}px` }}
            onClick={() => setExpanded(!expanded)}
            onContextMenu={(e) => handleRightClick(e, node.name)}
          >
            <img
              src={icons.folder}
              alt="folder icon"
              style={{ width: "16px", marginRight: "8px" }}
            />
            {node.name}
          </div>
          {expanded && (
            <div className="folder-contents">
              {node.data.map((childNode, idx) => (
                <FileNode key={idx} node={childNode} level={level + 1} />
              ))}
            </div>
          )}
          {contextMenu && selected === node.name && (
            <ContextMenu
              x={contextMenu.x}
              y={contextMenu.y}
              onClose={handleCloseContextMenu}
              onCopy={handleCopy}
              onDelete={handleDelete}
              onRename={handleRename}
            />
          )}
        </div>
      ) : (
        <div>
          <div
            className={`file ${selected === node.name ? "selected" : ""}`}
            style={{ paddingLeft: `${level * 10}px` }}
            onClick={() => handleLeftClick(node.name)}
            onContextMenu={(e) => handleRightClick(e, node.name)}
          >
            <img
              src={getFileIcon(node.meta)}
              alt={`${node.meta} file icon`}
              style={{ width: "16px", marginRight: "8px" }}
            />
            {node.name}
          </div>
          {contextMenu && selected === node.name && (
            <ContextMenu
              x={contextMenu.x}
              y={contextMenu.y}
              onClose={handleCloseContextMenu}
              onCopy={handleCopy}
              onDelete={handleDelete}
              onRename={handleRename}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FileNode;
