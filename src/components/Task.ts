class Task {
    id: string
    title: string
    time: string
    completed: boolean
    constructor(id: string, title: string, time: string, completed: boolean) {
        this.id = id
        this.title = title
        this.time = time
        this.completed = completed
    }
}

export default Task