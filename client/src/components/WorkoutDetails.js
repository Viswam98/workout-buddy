import { formatDistanceToNow } from 'date-fns'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import { useState } from 'react'

const WorkoutDetails = ({workout}) => {

    const [title, setTitle] = useState(workout.title)
    const [load, setLoad] = useState(workout.load)
    const [reps, setReps] = useState(workout.reps)
    const [error, setError] = useState(null)


    const [hover, setHover] = useState(false)
    const [edit, setEdit] = useState(false)

    const {dispatch} = useWorkoutsContext()
    
    const handleDelete = async() => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const updatedWorkout = {title,load,reps}
        const response = await fetch(`api/workouts/${workout._id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedWorkout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok) {
            dispatch({type: 'UPDATE_WORKOUT', payload: {...json,title,load,reps}})
            setEdit(false)
        }
    }

    return ( 
        
        <div 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            className="workout-details"
        >
            {edit ? (
                    <>
                        <span 
                            className='back'
                            onClick={() => setEdit(false)}
                        >
                            <BiArrowBack/>
                        </span>
                        <form onSubmit={handleSubmit}>
                            
                            <label className='inline'>
                                <div><p><strong>Title:</strong></p></div>
                                <input 
                                    type="text" 
                                    onChange={(e)=>setTitle(e.target.value)}
                                    value={title}
                                    required
                                />
                            </label>

                            <label className='inline'>
                                <div><p><strong>Load (kg):</strong></p></div>
                                <input 
                                    type="number" 
                                    onChange={(e)=>setLoad(e.target.value)}
                                    value={load}
                                    required
                                />
                            </label>

                            <label className='inline'>
                                <div><p><strong>Reps:</strong></p></div>
                                <input 
                                    type="number"
                                    onChange={(e)=>setReps(e.target.value)}
                                    value={reps}
                                    required
                                />
                            </label>

                            <button>Update</button>
                        </form>
                    </>
                ) 
                : 
                (
                    <>
                        <h4>{workout.title}</h4>
                        <p><strong>Load (kg): </strong>{workout.load}</p>
                        <p><strong>Reps: </strong>{workout.reps}</p>
                        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true,includeSeconds: true})}</p>
                        <div className="container">
                            <span 
                                className={`edit ${hover ? '' : 'disappear'}`} 
                                onClick={() => setEdit(true)}
                            >
                                <FaEdit/>
                            </span> 
                            <span 
                                className={`delete ${hover ? '' : 'disappear'}`} 
                                onClick={handleDelete}
                            >
                                <FaTrash/>
                            </span> 
                        </div>
                    </>
                )
                
            }
        {error && <div className="error">{error.message}</div>}
        </div>
        
    );
}
 
export default WorkoutDetails;