const handleListAction = children => {
  let output = "";
  const recurseTree = (children, tag = "") => {
    tag += "->";
    children.map(node => {
      output += tag + " " + node.value + "\n";
      if (node.children) {
        return recurseTree(node.children, tag);
      }
    });
  };

  recurseTree(children);
  return output;
};
module.exports = handleListAction;
