import React, { useState } from "react";
import { FolderData } from "./classes";
import styles from "./styles.module.css";

interface FolderProps {
  explorer: FolderData;
  handleInsertNode: (folderId: string, item: string, isFolder: boolean) => void;
}

const Folder = ({ explorer, handleInsertNode }: FolderProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (event: any, isFolder: boolean) => {
    event.stopPropagation();
    setIsExpanded(true);

    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      //add logic to add folder
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className={styles.folder}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>
            {isExpanded ? "📂" : "📁"} {explorer.name}
          </span>
          <div>
            <button
              className={styles.add}
              onClick={(e) => handleNewFolder(e, true)}
            >
              📁Folder +
            </button>
            <button
              className={styles.add}
              onClick={(e) => handleNewFolder(e, false)}
            >
              📄File +
            </button>
          </div>
        </div>
        <div
          style={{ display: isExpanded ? "block" : "none", paddingLeft: 25 }}
        >
          {showInput.visible && (
            <div className={styles.input_container}>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                className={styles.input_container_input}
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((item) => (
            <Folder
              handleInsertNode={handleInsertNode}
              explorer={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
  return <span className={styles.file}>📄 {explorer.name}</span>;
};

export default Folder;
