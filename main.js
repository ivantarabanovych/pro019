function Task(id, title, description, status, deadline) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.deadline = deadline || new Date();
  }

  Task.prototype.completeTask = function() {
    this.status = 'completed';
    console.log(`Задача "${this.title}" виконана.`);
  };
  
  Task.prototype.getDetails = function() {
    return `ID: ${this.id}\nЗаголовок: ${this.title}\nОпис: ${this.description}\nСтатус: ${this.status}\nДедлайн: ${this.deadline}`;
  };
  
function TaskList(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tasks = [];  
  }

  TaskList.prototype.addTask = function(task) {
    this.tasks.push(task);
    console.log(`Задача "${task.title}" додана до списку "${this.name}".`);
  };
  
  TaskList.prototype.getTasks = function() {
    return this.tasks.map(task => task.getDetails()).join('\n\n');
  };
  
  TaskList.prototype.getTaskCount = function() {
    return this.tasks.length;
  };
  
const task1 = new Task(1, 'Підготувати презентацію', 'Створити слайди для завтрашньої презентації', 'in progress', new Date('2024-09-21'));
const task2 = new Task(2, 'Закрити перший молуль', 'Виконати всі завдання до модуля 1', 'pending', new Date('2024-09-25'));
const task3 = new Task(3, 'Написати звіт', 'Підготувати звіт про виконані завдання', 'in progress', new Date('2024-09-22'));

const taskList1 = new TaskList(1, 'Щотижневі завдання', 'Список завдань на цей тиждень');

taskList1.addTask(task1);
taskList1.addTask(task2);
taskList1.addTask(task3);

console.log('Список задач:\n', taskList1.getTasks());

console.log(`Кількість задач у списку: ${taskList1.getTaskCount()}`);
