function Task(id, title, description, status, dedline) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dedline = new Date(dedline);
}

Task.prototype.completeTask = function() {
    this.status = 'Виконано';
    console.log(`Завдання: ${this.title} з ID: ${this.id} виконано`);
};

function ListTask(id, listName, listDescription) {
    this.id = id;
    this.listName = listName;
    this.listDescription = listDescription;
    this.tasks = []; 
}

ListTask.prototype.addTask = function(task) {
    this.tasks.push(task); 
    console.log(`Задача "${task.title}" додана до списку "${this.listName}"`);
};

ListTask.prototype.printTasks = function() {
    console.log(`Список задач: "${this.listName}"`);
    this.tasks.forEach(task => {
        console.log(`ID: ${task.id}, Назва: ${task.title}, Опис: ${task.description}, Статус: ${task.status}, Дедлайн: ${task.dedline.toLocaleDateString('uk-UA')}`);
    });
};

const task1 = new Task(1, 'Сходити за продуктами', 'Купити хліба та ковбаси', 'Невиконано', '2024-09-15');
const task2 = new Task(2, 'Зробити вечерю', 'Запекти картоплю у духовці', 'Невиконано', '2024-09-15');

const myListTask = new ListTask(2, 'Завдання для вихідного дня', 'Список завдань для вихідного дня');

myListTask.addTask(task1);  
myListTask.addTask(task2);  

myListTask.printTasks();

task1.completeTask();

myListTask.printTasks();
