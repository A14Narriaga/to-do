import { useState } from "react"
import { nanoid } from "nanoid"
import Task from "./Task"

const Form = (
    { showModal, setShowModal, tasks, setTasks, isEditing }:
        { showModal: string, setShowModal: any, tasks: Task[], setTasks: any, isEditing: boolean }
) => {

    const [title, setTitle] =  useState('')
    const [time, setTime] = useState(isEditing ? '00:00' : '')

    const addNewTask = () => {
        setTasks([new Task(nanoid(3), title, time, false), ...tasks])
        setShowModal('hidde')
        setTitle('')
        setTime('')
    }

    const editTask = (id: string) => {
        const newTasks = tasks.map(t => {
            if (t.id === id)
                return {...t, title: title, time: time}
            return t
        })
        setTasks(newTasks)
        setShowModal('hidde')
        setTitle('')
        setTime('')
    }

    return (
        <section className={`modal ${showModal}`}>
            <form onSubmit={(e) => e.preventDefault()}>
                <p>{!isEditing ? 'New' : 'Edit'} Task</p>
                <div className="inputs">
                    <input type="text" onChange={(e) => setTitle(e.target.value)} id="myTask" value={title} />
                    <input type="time" onChange={(e) => setTime(e.target.value)} id="myTime" value={time} />
                </div>
                <div className="options">
                    {!isEditing ? 
                        <button onClick={addNewTask}>Add</button> :
                        <button onClick={() => editTask('0')}>Edit</button>
                    }
                    <button onClick={() => setShowModal('hidde')} >Cancel</button>
                </div>
            </form>
        </section>
    )
}

export default Form
