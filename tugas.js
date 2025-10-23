
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const loadingIndicator = document.getElementById("loading-indicator");

let tasks = [];

function toggleLoading(isLoading) {
  loadingIndicator.style.display = isLoading ? "block" : "none";
}

function saveTaskAsync(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push(task);
      resolve(`Tugas "${task.text}" berhasil disimpan.`);
    }, 500);
  });
}

function deleteTaskAsync(taskId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const taskToDelete = tasks.find((task) => task.id === taskId);
      const taskText = taskToDelete ? taskToDelete.text : "";

      tasks = tasks.filter((task) => task.id !== taskId);
      resolve(`Tugas "${taskText}" berhasil dihapus.`);
    }, 500);
  });
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id; 

    if (task.completed) {
      li.classList.add("completed");
    }
    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Batal" : "Selesai";
    completeBtn.className = task.completed ? "uncomplete-btn" : "complete-btn";
    completeBtn.addEventListener("click", () => handleToggleComplete(task.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => handleDeleteTask(task.id));

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);
    li.appendChild(taskText);
    li.appendChild(taskActions);

    taskList.appendChild(li);
  });
}

async function handleAddTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Nama tugas tidak boleh kosong!");
    return;
  }

  const newTask = {
    id: Date.now(), 
    text: taskText,
    completed: false,
  };

  toggleLoading(true);
  try {
    const successMessage = await saveTaskAsync(newTask);
    console.log(successMessage);
    renderTasks();
  } catch (error) {
    console.error("Gagal menyimpan tugas:", error);
  } finally {
    toggleLoading(false);
    taskInput.value = "";
    taskInput.focus();
  }
}

async function handleDeleteTask(taskId) {
  toggleLoading(true);
  try {
    const successMessage = await deleteTaskAsync(taskId);
    console.log(successMessage);
    renderTasks();
  } catch (error) {
    console.error("Gagal menghapus tugas:", error);
  } finally {
    toggleLoading(false);
  }
}

function handleToggleComplete(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

addTaskBtn.addEventListener("click", handleAddTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAddTask();
  }
});

renderTasks();
