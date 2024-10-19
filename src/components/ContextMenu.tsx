import { type FC } from "react";

type ContextMenuProps = {
  x: number;
  y: number;
  onClose: () => void;
  onCopy: () => void;
  onDelete: () => void;
  onRename: () => void;
};

const ContextMenu: FC<ContextMenuProps> = ({
  x,
  y,
  onClose,
  onCopy,
  onDelete,
  onRename,
}) => {
  return (
    <div
      className="context-menu"
      style={{ top: `${y}px`, left: `${x}px` }}
      onClick={onClose}
    >
      <div className="context-menu-item" onClick={onCopy}>
        Copy
      </div>
      <div className="context-menu-item" onClick={onDelete}>
        Delete
      </div>
      <div className="context-menu-item" onClick={onRename}>
        Rename
      </div>
    </div>
  );
};

export default ContextMenu;
