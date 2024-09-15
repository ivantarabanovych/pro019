class Task {
    constructor(id, title, description, status = 'Невиконано', dedline) {
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

    isOverdue(){
        const today = new Date();
        return this.dedline < today && this.status !== 'Виконано';
    }

    isToday(){
        const today = new Date().toLocaleDateString('uk-UA');
        return this.dedline.toLocaleDateString('uk-UA') === today;
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

    removeTask(taskId){
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        console.log(`Задача з ID: ${taskId} видалена зі списку "${this.listName}"`);
    }

    getTasksForToday(){
        return this.tasks.filter(task => task.isToday());
    }

    getOverdueTasks(){
        return this.tasks.filter(task => task.isOverdue());
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

    removeListTask(listId){
        this.listTasks = this.listTasks.filter(listTask => listTask.id !== listId);
        console.log(`Список задач з ID ${listId} видалено з планера "${this.plannerName}"`);
    }

    getTasksForToday(){
        let todayTasks = [];
        this.listTasks.forEach(listTask => {
            todayTasks = todayTasks.concat(listTask.getTasksForToday());
        });

        return todayTasks;
    }

    getOverdueTasks(){
        let overdueTasks = [];
        this.listTasks.forEach(listTask => {
            overdueTasks = overdueTasks.concat(listTask.getOverdueTasks());
        });

        return overdueTasks;
    }

    printPlanner() {
        console.log(`Планер: ${this.plannerName}`);
        this.listTasks.forEach(listTask => {
            listTask.printTasks();
        });
    }

    printTasksForToday(){
        const todayTasks = this.getTasksForToday();
        console.log('Задачі на сьогодні:');
        if (todayTasks.length > 0) {
            todayTasks.forEach(task => {
                console.log(`ID: ${task.id}, Назва: ${task.title}, Опис: ${task.description}, Статус: ${task.status}, Дедлайн: ${task.dedline.toLocaleDateString('uk-UA')}`);
            });
        }else{
            console.log('Задач немає');
        }
        
    }

    printOverdueTasks(){
        const overdueTasks = this.getOverdueTasks();
        console.log('Прострочені задачі');
        if(overdueTasks.length > 0){
            overdueTasks.forEach(task => {
                console.log(`ID: ${task.id}, Назва: ${task.title}, Опис: ${task.description}, Статус: ${task.status}, Дедлайн: ${task.dedline.toLocaleDateString('uk-UA')}`);
            });
        }else{
            console.log('Прострочених задач немає');
        }
    }
}

const task1 = new Task(1, 'Сходити за продуктами', 'Купити хліба та ковбаси', 'Невиконано', '2024-09-15');
const task2 = new Task(2, 'Зробити вечерю', 'Запекти картоплю у духовці', 'Невиконано', '2024-09-15');
const task3 = new Task(3, 'Вигуляти собаку', 'Не менше години', 'Невиконано', '2024-09-15');

const list1 = new ListTask(1, 'Завдання для вихідного дня', 'Список завдань для вихідного дня');
const list2 = new ListTask(2, 'Робочий тиждень', 'Задачі для робочих днів');

list1.addTask(task1);
list1.addTask(task2);
list2.addTask(task3);

const myPlanner = new Planner(1, 'Мій план на тиждень', 'Основні завдання на поточний тиждень');

myPlanner.addListTask(list1);
myPlanner.addListTask(list2);

myPlanner.printPlanner();

myPlanner.printTasksForToday();

myPlanner.printOverdueTasks();
