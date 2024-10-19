import { type FC } from "react";
import { FolderNode } from "../models/fileModels";
import FileNode from "./FileNode";

type FileExplorerProps = {
  data: FolderNode;
};

const FileExplorer: FC<FileExplorerProps> = ({ data }) => {
  return (
    <div className="file-explorer">
      <FileNode node={data} level={0} />
    </div>
  );
};

export default FileExplorer;
