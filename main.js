const TaskPrototype = {
    completeTask(){
        this.status = "Завдання виконано!";
        console.log(`Задача з ID: ${this.id} виконана`);
    },
    PrintTaskDetails(){
        console.log(`Заголовок: ${this.title}`);
        console.log(`Опис: ${this.description}`);
        console.log(`Статус: ${this.status}`);
        console.log(`Дедлайн: ${this.dedline}`);
        console.log(`---------------------------------`);
    }
};

const task1 = Object.create(TaskPrototype);
task1.id = 1;
task1.title = 'Виконати ДЗ';
task1.description = 'Виконати тест та 4 завданян в уроці 19';
task1.status = 'Невиконано';
task1.dedline = new Date('2024-09-15');

const task2 = Object.create(TaskPrototype);
task2.id = 2;
task2.title = 'Придбати меблі';
task2.description = 'Купити компютерний стіл та диван';
task2.status = 'Невиконано';
task2.dedline = new Date('2024-09-15');

task1.PrintTaskDetails();
task2.PrintTaskDetails();

task1.completeTask();
task1.PrintTaskDetails();

task2.completeTask();
task2.PrintTaskDetails();

