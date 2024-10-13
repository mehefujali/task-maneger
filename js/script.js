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
      }
      else {
            if (title === '') {
                  document.getElementById('task-title').classList.add('border-red-500')
            }
            else if (des === '') {
                  document.getElementById('task-des').classList.add('border-red-500')
            }
      }



})

// document.getElementById('task-title').addEventListener('keyup', function (event) {
//       console.log(event);

// })
// document.getElementById('task-des').addEventListener('keyup', function (event) {
//       if (event.key === 'Enter') {
//             alert('')
//       }
// })

const tasks = document.getElementById('task-container')

tasks.addEventListener('click', function (event) {
      const deleteBtn = event.target.attributes.value.value;
      if (deleteBtn === deleteBtn) {
            event.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode.parentNode)
      }


})

