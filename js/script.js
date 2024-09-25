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
