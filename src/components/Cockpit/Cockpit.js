import React, { useEffect, useRef, useContext } from 'react'

import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext)

    console.log(authContext)

    useEffect(() => {
        toggleBtnRef.current.click()
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] 2nd Cleanup work in useEffect')
        }
    })

    const assignedClasses = []
    let btnClass = ''
    if (props.showPerson) {
        btnClass.push(classes.red)
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red)
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Some text</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
            Toggle persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit)