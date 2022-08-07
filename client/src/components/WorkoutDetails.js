import { formatDistanceToNow } from 'date-fns'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { FaTrash } from 'react-icons/fa'
import { useState } from 'react'

const WorkoutDetails = ({workout}) => {
    const [hover, setHover] = useState(false)

    const {dispatch} = useWorkoutsContext()
    const handleClick = async() => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

    return ( 
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true,includeSeconds: true})}</p>
            <span 
                className={hover ? '' : 'disappear'} 
                onClick={handleClick}
            >
                <FaTrash/>
            </span> 
        </div>
    );
}
 
export default WorkoutDetails;