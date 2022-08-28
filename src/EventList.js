import React from "react";
import { Link } from "react-router-dom";

const EventList = ( {events, title} ) => {

    return ( 
        <div className="event-list">
            <h2>{title}</h2>
            {events.map((event) => (
                <div className="event-preview" key={event.id}>
                    <Link to={`events/${event.id}`}>
                        <h2>{event.title}</h2>
                        <p>Artist: {event.artist}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default EventList;