import { useEffect, useState } from "react";

const Home = () => {
    const [workouts, setWorkouts] = useState([])
    useEffect(()=>{
        const fetchWorkouts = async() => {
            const response = await fetch('/api/workouts')
            console.log(response)
            const json = await response.json()
            if(response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])
    return ( 
        <div className="home">
            <div className="workouts">
                {workouts.map(workout => 
                    <div className="workout-details">
                        <h4>{workout.title}</h4>
                        <p><strong>Load (kg): </strong>{workout.load}</p>
                        <p><strong>Reps: </strong>{workout.reps}</p>
                        <p>{workout.createdAt}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Home;