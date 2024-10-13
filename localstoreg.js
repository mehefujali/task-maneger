const getLocalStorageTask = () => {
      let localtask = []
      const gettask = localStorage.getItem("task")
      if (gettask) {
            localtask = JSON.parse(gettask)
      }
      console.log(localtask);
      return localtask



}
// console.log(getLocalStorageTask());



const setItemLocal = (color, title, des) => {
      const task = getLocalStorageTask()
      const newTask = {
            color,
            title,
            des
      }
      task.push(newTask)
      localStorage.setItem("task", JSON.stringify(task))
}

