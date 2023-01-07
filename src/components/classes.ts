export interface FolderData {
  id: string;
  name: string;
  isFolder: boolean;
  items: FolderData[];
}
