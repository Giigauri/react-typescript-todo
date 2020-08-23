import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()

    return (
        <React.Fragment>
            <h1>Infromation</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing alit. 
                Non nostrum vero, repundianod amitium random pages.</p>
            <button 
                className="btn" 
                onClick={ () => history.push('/') }
            >
                Back To Main Page</button>
        </React.Fragment>
    )
}