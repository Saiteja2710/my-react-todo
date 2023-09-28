import React, { Fragment, useState } from 'react';

const Tasks = () => {
  const [Task, setTask] = useState("");
  const [Taskdo, setTaskdo] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    if(Task.trim() !== "")
    {
      setTaskdo([...Taskdo, Task]);
      setTask("");
    }
    else{
      alert("Task is empty");
    }
  };

  const onDelete = (i)=> {
    const updatet = [...Taskdo];
    updatet.splice(i, 1);
    setTaskdo(updatet);
  }

  return (
        <div  className='list'>
          <div>
        <form onSubmit={onSubmit}>
          <label>Enter the Task :</label>
          <input className='inp' value={Task}  onChange={(e) => setTask(e.target.value)} />
          <button className='btn'>Add Task</button>
        </form>
      </div>

      <div>
            {Taskdo.map((x,i) => {
              return(
                <div className='div' key={i}>
                  <p className='para'>{x}
                  <button className='del' onClick={() => onDelete(i)}>Delete</button></p>
                </div>
              );
            })}
      </div>
        </div>
  );
};

export default Tasks;
