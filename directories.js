const fs = require("fs");
const Node = require("./classes/Node");

const handleListAction = require("./helpers/listAction");
const handleMoveAction = require("./helpers/moveAction");
const handleCreateAction = require("./helpers/createAction");
const handleDeleteAction = require("./helpers/deleteAction");

const stdOutput = [];
const dirTree = new Node();
const filePath = __dirname + "/mock-inputs/commands.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  let i = 0;
  let start = 0;
  const commands = [];

  for (; i < data.length; i++) {
    if (data[i] === `\n`) {
      commands.push(data.slice(start, i));
      start = i + 1;
    }
  }

  commands.push(data.slice(start));
  commands.forEach(interpreteCommand);
  console.log(stdOutput.join("\n"));
});

function interpreteCommand(command) {
  const cmd = command.split(" ");

  switch (cmd[0]) {
    case "CREATE":
      stdOutput.push(handleCreateAction(cmd, dirTree));
      break;
    case "DELETE":
      stdOutput.push(handleDeleteAction(cmd, dirTree));
      break;
    case "MOVE":
      stdOutput.push(handleMoveAction(cmd, dirTree));
      break;
    case "LIST":
      stdOutput.push(handleListAction(dirTree.children));
      break;
  }
}
