import inquirer from 'inquirer';
let todos = [];
let condition = true;
while (condition) {
    let add_task = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: "what you want to add in todo?"
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: "do you want add more",
            default: "false"
        }
    ]);
    todos.push(add_task.todo);
    condition = add_task.addmore;
    //console.log(add_task.todo);
    console.log(todos);
}
