import { useState } from "react";
import "./App.css";
import { FolderData } from "./components/classes";
import Folder from "./components/Folder";
import { explorer } from "./data/folderData";
import { useTreeTravese } from "./hooks/useTreeTravese";

const App = () => {
  const [explorerData, setExplorerData] = useState<FolderData>(explorer);

  const { insertNode } = useTreeTravese();

  const handleInsertNode = (
    folderId: string,
    item: string,
    isFolder: boolean
  ) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree!);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default App;
