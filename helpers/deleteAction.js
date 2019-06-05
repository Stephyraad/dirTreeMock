const handleDeleteAction = (cmd, dirTree) => {
  const paths = cmd[1].split("/");
  const pathLength = paths.length;
  const result = paths.reduce((node, value, index) => {
    if (typeof node === "string" || node instanceof String) {
      return node;
    } else {
      const children = node.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].value === value) {
          return index === pathLength - 1 ? children.splice(i, 1) : children[i];
        }
      }

      return `Cannot ${cmd} - ${value} does not exist`;
    }
  }, dirTree);

  return typeof result === "string" ? result : cmd.join(" ");
};

module.exports = handleDeleteAction;
