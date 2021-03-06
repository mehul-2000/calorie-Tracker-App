import React, { useState, useEffect } from 'react'
import { NavBar, Meals, DashboardForm } from '../components'
import Wrapper from '../assets/wrappers/SharedLayout'
import { useDispatch } from 'react-redux'
import { getMeals } from '../actions/meal'
//importing actions 

function Dashboard() {

    const [list, setList] = useState([])
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMeals())
        // eslint-disable-next-line
    }, [list])
    return (
        <Wrapper>
            <NavBar />
            <div className="dashboard-page">

                <DashboardForm currentId={currentId} setCurrentId={setCurrentId} setList={setList} />
                <Meals currentId={currentId} setCurrentId={setCurrentId} setList={setList} />
            </div>
        </Wrapper>

    )
}

export default Dashboard
