
document.getElementById('create-task-btn').addEventListener('click', function () {

      const taskForm = document.getElementById('task-form');

      taskForm.classList.remove('hidden');




});
let taskColor = '#553171'
const colors = document.getElementsByClassName('color')

for (const color of colors) {
      color.addEventListener('click', function (event) {
            for (const cColor of colors) {
                  cColor.classList.remove('border-2', 'border-red-500')
            }
            event.target.classList.add('border-2', 'border-red-500')
            taskColor = event.target.value
      })
}
document.getElementById('save-btn').addEventListener('click', function () {
      const title = document.getElementById('task-title').value
      const des = document.getElementById('task-des').value
      if (title !== '' && des !== '') {
            addTask(title, des, taskColor)
            document.getElementById('task-title').value = ''
            document.getElementById('task-des').value = ''
            document.getElementById('task-form').classList.add('hidden')

      }
      else {
            if (title === '') {
                  document.getElementById('task-title').classList.add('border-red-500')
            }
            else if (des === '') {
                  document.getElementById('task-des').classList.add('border-red-500')
            }
            else {
                  document.getElementById('task-title').classList.add('border-black')
                  document.getElementById('task-des').classList.add('border-black')
            }
      }



})


const tasks = document.getElementById('task-container')


console.log("%c This is a secret message!", "color: cyan; font-size: 20px; background: black; padding: 10px;");
