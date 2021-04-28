
const TaskItem = (
    { id, title, time, completed, handleTaskBtns }: 
    { id: string, title: string, time: string, completed: boolean, handleTaskBtns: any }
) => {
    return (
        <div className="task taskSelected" onClick={() => handleTaskBtns(id)}>
            <span>{completed ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}</span>
            <div className="task-card">
                <p className="title" id={`task-${id}`}>{title}</p>
                <p className="time">{time}</p>
            </div>
        </div>
    )
}

export default TaskItem
