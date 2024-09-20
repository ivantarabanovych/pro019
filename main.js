const taskPrototype = {
    init: function(id, title, description, status, deadline) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.status = status;
      this.deadline = deadline || new Date();
    },
    completeTask: function() {
      this.status = 'completed';
      console.log(`Задача "${this.title}" виконана.`);
    },
    getDetails: function() {
      return `ID: ${this.id}\nЗаголовок: ${this.title}\nОпис: ${this.description}\nСтатус: ${this.status}\nДедлайн: ${this.deadline}`;
    }
  };

const task1 = Object.create(taskPrototype);
task1.init(1, 'Підготувати презентацію', 'Створити слайди для завтрашньої презентації', 'in progress', new Date('2024-09-21'));

const task2 = Object.create(taskPrototype);
task2.init(2, 'Закрити перший модуль', 'Виконати всі завдання для модуля 1', 'pending', new Date('2024-09-25'));

const task3 = Object.create(taskPrototype);
task3.init(3, 'Написати звіт', 'Підготувати звіт про виконані завдання', 'in progress', new Date('2024-09-22'));

console.log(task1.getDetails());
console.log(task2.getDetails());
console.log(task3.getDetails());

task1.completeTask();
console.log(task1.getDetails());