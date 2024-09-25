let clicked = false;
document.getElementById('create-task-btn').addEventListener('click', function () {
      clicked = !clicked;
      const taskForm = document.getElementById('task-form');
      if (clicked) {

            taskForm.classList.remove('hidden');
      }
      else {
            taskForm.classList.add('hidden');
      }


});

document.getElementById('save-btn').addEventListener('click', function () {
      const title = document.getElementById('task-title').value
      const des = document.getElementById('task-des').value
      const color = '#553171'
      addTask(title, des, color)
})