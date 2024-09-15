class Task {
    constructor(id, title, description, status, dedline) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.dedline = new Date(dedline);
    }

    completeTask() {
        this.status = 'Виконано';
        console.log(`Завдання: ${this.title} з ID: ${this.id} виконано`);
    }
}

class ListTask {
    constructor(id, listName, listDescription) {
        this.id = id;
        this.listName = listName;
        this.listDescription = listDescription;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task); 
        console.log(`Задача "${task.title}" додана до списку "${this.listName}"`);
    }

    printTasks() {
        console.log(`Список задач: "${this.listName}"`);
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Назва: ${task.title}, Опис: ${task.description}, Статус: ${task.status}, Дедлайн: ${task.dedline.toLocaleDateString('uk-UA')}`);
        });
    }
}

class Planner {
    constructor(id, plannerName, plannerDescription) {
        this.id = id;
        this.plannerName = plannerName;
        this.plannerDescription = plannerDescription;
        this.listTasks = [];
    }

    addListTask(listTask) {
        this.listTasks.push(listTask); 
        console.log(`Список задач "${listTask.listName}" додано до планера "${this.plannerName}"`);
    }

    printPlanner() {
        console.log(`Планер: ${this.plannerName}`);
        this.listTasks.forEach(listTask => {
            listTask.printTasks();
        });
    }
}

const task1 = new Task(1, 'Сходити за продуктами', 'Купити хліба та ковбаси', 'Невиконано', '2024-09-15');
const task2 = new Task(2, 'Зробити вечерю', 'Запекти картоплю у духовці', 'Невиконано', '2024-09-15');

const list1 = new ListTask(2, 'Завдання для вихідного дня', 'Список завдань для вихідного дня');

list1.addTask(task1);
list1.addTask(task2);

const myPlanner = new Planner(1, 'Мій план на тиждень', 'Основні завдання на поточний тиждень');

myPlanner.addListTask(list1);

myPlanner.printPlanner();
