import React, {useState} from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [taskList, setTaskList] = useState(tasks)
  
  function handleRemove(text){
    const newList = taskList.filter((task) => task.text !== text);

    setTaskList(newList);
  }




  return (
    <div className="tasks">
      {taskList.map((task)=>(
      <Task key={task.text}text={task.text} category={task.category} remove={handleRemove}/>
      ))}
    </div>
  );
}

export default TaskList;
