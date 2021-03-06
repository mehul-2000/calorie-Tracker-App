
import { FaCalendarAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import Wrapper from '../../assets/wrappers/Meal'
import { deleteMeal } from '../../actions/meal'
import { useSelector } from 'react-redux'
const Meal = ({ meal, color, setCurrentId, setList, date }) => {
    const dispatch = useDispatch();
    const meals = useSelector((state) => state.meals)
    return (
        <Wrapper>
            <header className={`header-${color}`}>
                <div className={`info`}>
                    <h5>{meal.name}</h5>
                    <p>{meal.calories}</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                    <span className='icon'><FaCalendarAlt /></span>
                    <span className='text'>{`${date}`}</span>
                </div>
                <footer>
                    <div className='actions'>
                        <button
                            className='btn edit-btn'
                            onClick={() => {
                                setCurrentId(meal._id)
                                document.documentElement.scrollTop = 0;
                            }}
                        >
                            Edit
                        </button>
                        <button
                            type='button'
                            className='btn delete-btn'
                            onClick={() => {
                                dispatch(deleteMeal(meal._id));
                                setList(meals)
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    )
}

export default Meal
