interface TreeNode<T> {
  value: T;
  children?: TreeNode<T>[];
}

const tree: TreeNode<string> = {
  value: "Root",
  children: [
    {
      value: "Child 1",
      children: [
        {
          value: "Grandchild 1.1",
          children: [],
        },
        {
          value: "Grandchild 1.2",
        },
      ],
    },
    {
      value: "Child 2",
      children: [
        {
          value: "Grandchild 2.1",
        },
        {
          value: "Grandchild 2.2",
          children: [
            {
              value: "Great-Grandchild 2.2.1",
            },
          ],
        },
      ],
    },
  ],
};
