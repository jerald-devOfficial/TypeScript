interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")! as HTMLFormElement;
const list = document.getElementById("todolist")!;

const readTodos = (): Todo[] => {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
};

const todos: Todo[] = readTodos();

todos.forEach(createTodo);

// or do it as (<HTMLInputElement>input).value

// btn.addEventListener("click", () => alert(input.value));

// let mystery: unknown = "Hello world!!";

// // type assertions
// const numChars = (mystery as string).length;

const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  input.value = "";
};

function createTodo(todo: Todo) {
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
