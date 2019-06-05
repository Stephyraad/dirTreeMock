const handleMoveCmd = (cmd, dirTree) => {
  const oldPath = cmd[1].split("/");
  const newPath = cmd[2].split("/");

  const nodeToMove = oldPath.reduce((node, value, index) => {
    if (typeof node === "string" || node instanceof String) {
      return node;
    } else {
      const children = node.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].value === value) {
          return index === oldPath.length - 1
            ? children.splice(i, 1)
            : children[i];
        }
      }
      return `Cannot ${cmd} - ${value} does not exist`;
    }
  }, dirTree);

  if (typeof nodeToMove === "string" || nodeToMove instanceof String) {
    return nodeToMove;
  } else {
    return newPath.reduce((node, value, index) => {
      const children = node.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].value === value) {
          if (index === newPath.length - 1) {
            children[i].children.push(nodeToMove[0]);
            return cmd.join(" ");
          } else {
            return children[i];
          }
        }
      }
    }, dirTree);
  }
};

module.exports = handleMoveCmd;
