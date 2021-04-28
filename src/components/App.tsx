import { useState } from "react"
import "../sass/App.scss"
import TaskItem from "./TaskItem"
import DayItem from "./DayItem"

class Task {
    id: number
    title: string
    time: string
    completed: boolean
    constructor(id: number, title: string, time: string, completed: boolean) {
        this.id = id
        this.title = title
        this.time = time
        this.completed = completed
    }
}

const FILTER_MAP = {
    all: () => true,
    active: (task: Task) => !task.completed,
    completed: (task: Task) => task.completed
}
const filterkeys = Object.keys(FILTER_MAP);

const initialState = [
    new Task(0, 'leer pdf false', '05:00 PM', true),
    new Task(1, 'leer pdf true', '08:00 PM', false),
    new Task(3, 'leer pdf false', '10:00 PM', true)
]

const App = () => {

    const [tasks, setTasks] = useState(initialState)
    const [filter, setFilter] = useState('all')
    const [show, setShow] = useState('hidde')

    const handleChangeCompleteTask = (id: number) => {
        const newTasks = tasks.map(task => {
            if(task.id === id) 
                task.completed = !task.completed
            return task
        })
        setTasks(newTasks)
    }

    const deleteTask = (id: number) => {
        const newTasks = tasks.map(task => {
            if(task.id === id) 
                task.completed = !task.completed
            return task
        })
        setTasks(newTasks)
    }

    const addTask = (id: number) => {
        const newTasks = tasks.map(task => {
            if(task.id === id) 
                task.completed = !task.completed
            return task
        })
        setTasks(newTasks)
    }

    const showModal = () => {
        setShow(show === 'hidde' ? '' : 'hidde')
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
                <button onClick={() => showModal()} ><i className="fas fa-plus"></i></button>
                <button onClick={() => handleChangeCompleteTask(0)}><i className="fas fa-check"></i></button>
                <button><i className="fas fa-trash-alt"></i></button>
                <button><i className="fas fa-edit"></i></button>
            </div>
            <section className={`modal ${show}`}>
                <form>
                    <p>New Task</p>
                    <div className="inputs">
                        <input type="text" name="myTask" id="myTask"/>
                        <input type="time" name="myTime" id="myTime"/>
                    </div>
                    <div className="options">
                        <button>Add</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default App
