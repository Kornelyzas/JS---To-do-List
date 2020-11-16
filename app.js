//Selectors


//Task class
class Task {
    constructor(subject, priority, date, status, percent) {
       
      this.subject = subject;
      this.priority = priority;
      this.date = date;
      this.status = status;
      this.percent = `<div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>`;
      
    }
  }


//UI Class
class UI {
    static displayTasks(){
        const storedTasks = [
            {
                subject: 'to finish code',
                priority: '<span class="badge badge-pill badge-danger">High</span>',
                date: '18/11/2020',
                status: 'In Progress',
                percent: '<div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'
            }
        ];
        const tasks = storedTasks;
        tasks.forEach((task) => UI.addTaskToList(task));
    }
    static addTaskToList(task){
        const list = document.querySelector('#task-listy');

        const row = document.createElement('tr');

        row.innerHTML = 
        `<td>
            <button type="button" class="btn btn-success chkBtn btn-sm">Check</button>
            <button type="button" class="btn btn-danger btn-sm">Delete</button>
        </td>
        <td>${task.subject}</td>
        <td>${task.priority}</td>
        <td>${task.date}</td>
        <td>${task.status}</td>
        <td>${task.percent}</td>
        `;
        list.appendChild(row);
    }
}

//Display tasks
document.addEventListener('DOMContentLoaded', UI.displayTasks);

//Add a task
document.querySelector('#task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    //Form Values
    const subject = document.querySelector('.subjectf').value;
    const priority = document.querySelector('.priof').value;
    const date = document.querySelector('.datef').value;
    const status = document.querySelector('.optf').value;
    

    //New Task
    const task = new Task(subject, priority, date, status);
    console.log(task);

    //Add Task to UI
    UI.addTaskToList(task);


     // Clear value
        document.querySelector('.subjectf').value = "";
        document.querySelector('.priof').value = "";
        document.querySelector('.datef').value = "";
        document.querySelector('.optf').value = "";
        

    
});

 //delete task

 let taskListy = document.querySelector('#task-listy');

 taskListy.addEventListener('click', deleteTask);


function deleteTask(el) {
     console.log(el.target);
    const item = el.target;
    const todo = item.parentElement;
    if (item.classList.contains('btn-danger')) {
        el.target.parentElement.parentElement.remove();
    }
    
}
//checkTask
taskListy.addEventListener('click', checkTask);

function checkTask(ell) {
    console.log(ell.target);
    const itemm = ell.target;
    const todoo = itemm.parentElement.parentElement;
    //check
    if (itemm.classList.contains('chkBtn')) {
        todoo.classList.toggle('completed')};
        console.log(todoo);
}
