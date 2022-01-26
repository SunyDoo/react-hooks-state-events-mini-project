import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
console.log(CATEGORIES)

function App() {
  const [filterList, setFilterList] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selected, setSelected] = useState(false)

 function changeClass(){
   setSelected((selected) => !selected)
 }
  
 function handleFilterChange(event) {
  setSelectedCategory(event.target.textContent);
  console.log(selectedCategory)
  changeClass()
  setFilter()
  debugger
 }
  
 function setFilter(){
    if (selectedCategory === "All") {
      return true
    }
    setFilterList(filterList.filter((task)=> task.category === selectedCategory))
 }
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={handleFilterChange} className={selected}/>
      <NewTaskForm />
      <TaskList tasks={filterList} />
    </div>
  );
}

export default App;
