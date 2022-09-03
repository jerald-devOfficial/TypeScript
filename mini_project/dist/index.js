"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const readTodos = () => {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
};
const todos = readTodos();
todos.forEach(createTodo);
// or do it as (<HTMLInputElement>input).value
// btn.addEventListener("click", () => alert(input.value));
// let mystery: unknown = "Hello world!!";
// // type assertions
// const numChars = (mystery as string).length;
const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
};
function createTodo(todo) {
    const newLI = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.onchange = () => {
        todo.completed = checkbox.checked;
        saveTodos();
    };
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
