import { useState } from "react"
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
const filterkeys = Object.keys(FILTER_MAP);

const initialState = [
    new Task('0', 'leer pdf false', '05:00 PM', true),
    new Task('1', 'leer pdf true', '08:00 PM', false),
    new Task('3', 'leer pdf false', '10:00 PM', true)
]

const App = () => {

    const [tasks, setTasks] = useState(initialState)
    const [filter, setFilter] = useState('all')
    const [showModal, setShowModal] = useState('hidde')
    const [isEditing, setIsEditing] = useState(false)

    const handleChangeCompleteTask = (id: string) => {
        const newTasks = tasks.map(task => {
            if(task.id === id) 
                return {...task, completed: !task.completed}
            return task
        })
        setTasks(newTasks)
    }

    const deleteTask = (id: string) => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }

    const handleShowModalAdd = () => {
        setShowModal(showModal === 'hidde' ? '' : 'hidde')
        setIsEditing(false)
    }

    const handleShowModalEdit = () => {
        setShowModal(showModal === 'hidde' ? '' : 'hidde')
        setIsEditing(true)
    }

    return (
        <>
            <header>Hello Alan,</header>
            <section className="calendar">
                <p className="month">April</p>
                <section className="cards-days">
                    <DayItem />
                    <DayItem />
                    <DayItem />
                    <DayItem />
                    <DayItem />
                </section>
            </section>
            <section className="card-tasks">
                <p className="num-tasks">Tasks</p>
                <section className="filters">
                    {filterkeys.map(filterkey =>(
                        <button key={filterkey} onClick={() => setFilter(filterkey)}>{filterkey}</button>
                    ))}
                </section>
                <section className="tasks">
                    {tasks.filter(FILTER_MAP['all']).map(({id, title, time, completed}) => (
                        <TaskItem key={id} id={id} title={title} time={time} completed={completed}/>
                    ))}
                </section>
            </section>
            <div className="btn">
                <button onClick={handleShowModalAdd} ><i className="fas fa-plus"></i></button>
                <button onClick={() => handleChangeCompleteTask('0')}><i className="fas fa-check"></i></button>
                <button onClick={() => deleteTask('0')}><i className="fas fa-trash-alt"></i></button>
                <button onClick={handleShowModalEdit}><i className="fas fa-edit"></i></button>
            </div>
            <Form showModal={showModal} setShowModal={setShowModal} tasks={tasks} setTasks={setTasks} isEditing={isEditing}/>
        </>
    )
}

export default App
