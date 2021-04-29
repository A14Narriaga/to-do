import { useState, useEffect } from "react"
import "../sass/App.scss"
import Task from "./Task"
import TaskItem from "./TaskItem"
import DayItem from "./DayItem"
import Form from "./Form"

const FILTER_MAP = {
    all: () => true,
    active: (task: Task) => !task.completed,
    completed: (task: Task) => task.completed
}
type options = keyof typeof FILTER_MAP
const filterkeys = Object.keys(FILTER_MAP) as Array<options>

const initialState: Array<Task> = JSON.parse(localStorage.getItem("tasks") || "[]")
const filterInitialState = (localStorage.getItem("filter") || "all") as options

const App = () => {

    const [tasks, setTasks] = useState(initialState)
    const [filter, setFilter] = useState<options>(filterInitialState)
    const [showModal, setShowModal] = useState('hidde')
    const [isEditing, setIsEditing] = useState(false)
    const [showTaskBtns, setShowTaskBtns] = useState('hidde')
    const [showAddBtn, setShowAddBtn] = useState('')
    const [currentTask, setCurrentTask] = useState('')
    const [taskClicked, setTaskClicked] = useState(false)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        localStorage.setItem("filter", filter)
    }, [filter])

    const handleChangeCompleteTask = (id: string) => {
        const newTasks = tasks.map(task => {
            if (task.id === id)
                return { ...task, completed: !task.completed }
            return task
        })
        setTasks(newTasks)
        setTaskClicked(false)
        setShowTaskBtns('hidde')
        setShowAddBtn('')
    }

    const deleteTask = (id: string) => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
        setTaskClicked(false)
        setShowTaskBtns('hidde')
        setShowAddBtn('')
    }

    const handleShowModalAdd = () => {
        setShowModal(showModal === 'hidde' ? '' : 'hidde')
        setIsEditing(false)
    }

    const handleShowModalEdit = () => {
        setShowModal(showModal === 'hidde' ? '' : 'hidde')
        setIsEditing(true)
    }

    const handleTaskBtns = (id: string) => {
        // console.log(id)
        setCurrentTask(id)
        setShowTaskBtns(showTaskBtns === 'hidde' ? '' : 'hidde')
        setShowAddBtn(showAddBtn === 'hidde' ? '' : 'hidde')
        setTaskClicked(taskClicked === false ? true : false)
    }

    return (
        <>
            <header>Hello,</header>
            <section className="calendar hidde">
                <p className="month">April</p>
                <section className="cards-days">
                    <DayItem />
                </section>
            </section>
            <section className="card-tasks">
                <p className="num-tasks">Tasks</p>
                <section className="filters">
                    {filterkeys.map(filterkey => (
                        <button key={filterkey} onClick={() => setFilter(filterkey)}>{filterkey}</button>
                    ))}
                </section>
                <section className="tasks">
                    {tasks.length>0 ? 
                        tasks.filter(FILTER_MAP[filter]).map(({ id, title, time, completed }) => (
                        <TaskItem 
                            key={id} 
                            id={id} 
                            title={title} 
                            time={time} 
                            completed={completed} 
                            handleTaskBtns={handleTaskBtns} 
                            currentTask={currentTask}
                            taskClicked={taskClicked}
                        />)) :
                        <h1>Empty task list</h1>
                    }
                </section>
            </section>
            <div className="btn">
                <button className={`${showAddBtn}`} onClick={handleShowModalAdd} ><i className="fas fa-plus"></i></button>
                <button className={`${showTaskBtns}`} onClick={() => deleteTask(currentTask)}><i className="fas fa-trash-alt"></i></button>
                <button className={`${showTaskBtns}`} onClick={() => handleChangeCompleteTask(currentTask)}><i className="fas fa-check"></i></button>
                <button className={`${showTaskBtns}`} onClick={handleShowModalEdit}><i className="fas fa-edit"></i></button>
            </div>
            <Form showModal={showModal} setShowModal={setShowModal} tasks={tasks} setTasks={setTasks} isEditing={isEditing} currentTask={currentTask} />
        </>
    )
}

export default App