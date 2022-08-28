import EventList from "./EventList";
import useFetch from "./useFetch";

const Home = () => {

    const { events, error } = useFetch("http://localhost:8000/events");

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            {events && <EventList events={events} title="All Events!"/>}
        </div>
     );
}
 
export default Home;