const Node = require("../classes/Node");

const handleCreateAction = (cmd, dirTree) => {
  cmd[1].split("/").reduce((node, value) => {
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].value === value) {
        return children[i];
      }
    }
    const nextNode = new Node(value);
    children.push(nextNode);
    return nextNode;
  }, dirTree);
  return cmd.join(" ");
};

module.exports = handleCreateAction;
