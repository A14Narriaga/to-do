import "../sass/App.scss"

const App = () => {
    return (
        <>
            <header>Hello Alan,</header>
            <section className="calendar">
                <p className="month">April</p>
                <section className="cards-days">
                    <div className="card-day">
                        <p className="day">Mon</p>
                        <p className="num" >26</p>
                    </div>
                    <div className="card-day">
                        <p className="day">Tue</p>
                        <p className="num" >27</p>
                    </div>
                    <div className="card-day">
                        <p className="day">Wed</p>
                        <p className="num" >28</p>
                    </div>
                    <div className="card-day">
                        <p className="day">Thu</p>
                        <p className="num" >29</p>
                    </div>
                    <div className="card-day">
                        <p className="day">Fri</p>
                        <p className="num" >30</p>
                    </div>
                    <div className="card-day">
                        <p className="day">Sat</p>
                        <p className="num" >1</p>
                    </div>
                    <div className="card-day">
                        <p className="day">Sun</p>
                        <p className="num" >2</p>
                    </div>
                </section>
            </section>
            <section className="card-tasks">
                <p className="num-tasks">1 Tasks</p>
                <section className="tasks">
                    <div className="task">
                        <span><i className="far fa-circle"></i></span>
                        <div className="task-card">
                            <p className="tittle">Example task</p>
                            <p className="time">06:00 AM</p>
                        </div>
                    </div>
                    <div className="task">
                        <span><i className="far fa-circle"></i></span>
                        <div className="task-card">
                            <p className="tittle">Example task</p>
                            <p className="time">06:00 AM</p>
                        </div>
                    </div>
                    <div className="task">
                        <span><i className="far fa-circle"></i></span>
                        <div className="task-card">
                            <p className="tittle">Example task</p>
                            <p className="time">06:00 AM</p>
                        </div>
                    </div>
                    <div className="task">
                        <span><i className="far fa-circle"></i></span>
                        <div className="task-card">
                            <p className="tittle">Example task</p>
                            <p className="time">06:00 AM</p>
                        </div>
                    </div>
                </section>
            </section>
            <div className="btn">
                <button><i className="fas fa-plus"></i></button>
                <button><i className="fas fa-check"></i></button>
                <button><i className="fas fa-trash-alt"></i></button>
            </div>
        </>
    )
}

export default App
