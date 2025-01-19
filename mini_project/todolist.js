import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1. Enter a task");
  console.log("2. View Tasks");
  console.log("3. Exit!!!");
  console.log("4. Remove a Task");
  
  rl.question("Choose a option: ", handleInput);
};

const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter a task: ", (task) => {
      todos.push(task);
      console.log("Task added: ", task);
      showMenu();
    });
  } else if (option === "2") {
    console.log("\nYour Todo List ---");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    }); 
    showMenu(); 
  } else if (option === "3") {
    console.log("Goodbye!!!");
    rl.close();
  } else if(option==="4"){
    if(todos.length===0){
        console.log("Empty List, Nothing to remove");
    } 
    else{
        rl.question("Enter index to remove => ",(index) => {
            const removeIndex = parseInt(index)-1;
            if(removeIndex >= 0 && removeIndex < todos.length){
                const removedTask = todos.splice(removeIndex, 1)[0];
                console.log(`Task Removed => ${removedTask}`);
            }else {
                console.log("Invaild Index");
            }
            showMenu();
        });
    }
  } else {
    console.log("Error 404 Option not found");
    showMenu(); 
  }
};

showMenu();