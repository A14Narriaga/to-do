import { useState } from "react"
import "../sass/App.scss"
import TaskItem from "./TaskItem"
import DayItem from "./DayItem"

class Task {
    id: number
    tittle: string
    completed: boolean
    constructor(id: number, tittle: string, completed: boolean) {
        this.id = id
        this.tittle = tittle
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
    new Task(0, 'leer pdf', false),
    new Task(0, 'leer pdf', true),
    new Task(0, 'leer pdf', false)
]

const App = () => {

    const [tasks, setTasks] = useState(initialState)
    const [filter, setFilter] = useState('all')

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
                        <button onClick={() => setFilter(filterkey)}>{filterkey}</button>
                    ))}
                </section>
                <section className="tasks">
                    {tasks.filter(FILTER_MAP['all']).map(task => <TaskItem />)}
                </section>
            </section>
            <div className="btn">
                <button><i className="fas fa-plus"></i></button>
                <button><i className="fas fa-check"></i></button>
                <button><i className="fas fa-trash-alt"></i></button>
                <button><i className="fas fa-edit"></i></button>
            </div>
        </>
    )
}

export default App
