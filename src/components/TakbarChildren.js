import "./TaskbarChildren.css";




const TaskbarChildren = ({id, children}) => {
  return (
    <div className="taskbarChildren" id={id}>
      {children}
    </div>
  );
};





export default TaskbarChildren;