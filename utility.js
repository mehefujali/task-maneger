function addTask(title, des, color) {
      const taskContainer = document.getElementById('task-container')
      const cardDiv = document.createElement('div')
      cardDiv.innerHTML = `
      <div class="  ">
                              <!-- task title  -->
                              <div
                                    class=" flex  items-center justify-between text-xl text-white font-bold bg-[${color}] p-3 rounded-xl ">
                                    <div><i class="fa-solid fa-trash"></i></div>
                                    <h3>${title}</h3>
                                    <button class="bg-green-500 border-2 border-white w-6 h-6 rounded-full">

                                    </button>

                              </div>
                              <!-- task des  -->
                              <div class="  mt-6 bg-[${color}] p-3 rounded-xl text-white">
                                    <p >${des}</p>
                              </div>

                        </div>
                  </div>
      `
      taskContainer.appendChild(cardDiv)
}