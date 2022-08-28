import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './index.css';

import React from "react";
import {useSelector, useDispatch} from 'react-redux'; //useSelector to access the counter
import {increment, decrement} from './actions';

const EventDetails = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const { id } = useParams();
    const { events, error } = useFetch("http://localhost:8000/events/" + id);
    const history = useHistory();

    const handleClick = () => {

        fetch("http://localhost:8000/events/" + events.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        });
    }

    return ( 
        <div className="event-details">
            { error && <div>{ error }</div>}
            { events && (
                <article>
                    <h2>{ events.title }</h2>
                    <p><b>Artist :</b> { events.artist } &emsp;&emsp; <b>Location : </b> { events.location }</p>
                    <br/>
                    <div>{ events.body }</div>
                    <p style={{display: "inline"}}>Likes: {counter} &emsp;&emsp;</p>
                    <button style={{
                        display: "inline",
                        width: 25,
                        backgroundColor: "#1061be"}} onClick={() => dispatch(increment())}>+</button> {/*Create an action, and when we click it will dispatch */}
                    <button style={{
                        display: "inline",
                        width: 25,
                        backgroundColor: "#1061be"}} onClick={() => dispatch(decrement())}>-</button><br></br><br></br>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default EventDetails;