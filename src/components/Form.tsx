import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Task from "./Task"

const Form = (
    { showModal, setShowModal, tasks, setTasks, isEditing, currentTask }:
        { showModal: string, setShowModal: any, tasks: Task[], setTasks: any, isEditing: boolean, currentTask: string }
) => {

    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        if (isEditing) {
            const myTask = tasks.find(task => task.id === currentTask)
            if(myTask){
                setTitle(myTask.title)
                setTime(myTask.time)
            }
        }
        else {
            setTitle('')
            setTime('')
        }
    }, [isEditing, tasks, currentTask])

    const addNewTask = () => {
        setTasks([new Task(nanoid(3), title, time, false), ...tasks])
        setShowModal('hidde')
        setTitle('')
        setTime('')
    }

    const editTask = (id: string) => {
        const newTasks = tasks.map(task => {
            if (task.id === id)
                return { ...task, title: title, time: time }
            return task
        })
        setTasks(newTasks)
        setShowModal('hidde')
        setTitle('')
        setTime('')
    }

    const cancelBtn = () => {
        setShowModal('hidde')
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
                        <button onClick={() => editTask(currentTask)}>Edit</button>
                    }
                    <button onClick={cancelBtn} >Cancel</button>
                </div>
            </form>
        </section>
    )
}

export default Form
