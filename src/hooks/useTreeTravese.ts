import { FolderData } from "../components/classes";

export const useTreeTravese = () => {
  const insertNode = (
    tree: FolderData,
    folderId: string,
    item: string,
    isFolder: boolean
  ): FolderData => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Math.random().toString(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((folderObject) =>
      insertNode(folderObject, folderId, item, isFolder)
    );

    return { ...tree, items: latestNode };
  };
  return { insertNode };
};
