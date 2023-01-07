export const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "index.js",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "7",
          name: "components",
          isFolder: true,
          items: [
            {
              id: "8",
              name: "App.js",
              isFolder: false,
              items: [],
            },
            {
              id: "9",
              name: "App.css",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: "10",
      name: "README.md",
      isFolder: false,
      items: [],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};
