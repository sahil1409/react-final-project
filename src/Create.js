import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [location, setLocation] = useState('');
    const [body, setBody] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = { title, artist, location, body };
        
        fetch('http://localhost:8000/events', {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(event)
        }).then(() => {
            history.push('/')
        });

    }

    return ( 
        <div className="create">
            <h2>Add a New Event</h2>
            <form onSubmit={handleSubmit}>
                <label>Event Title:</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Artist:</label>
                <input
                type="text" 
                required 
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                />
                <label>Location:</label>
                <input
                type="text" 
                required 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
                <label>Event Description:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button>Add Event</button>
            </form>
      </div>
     );
}
 
export default Create;