import React from 'react';
import { Link } from 'gatsby'

import listEvents from '../hooks/list-events'
import indexStyles from './index.module.scss';


const Index = () => {
    const events = listEvents()
    return (
        <div className={indexStyles.container}>
            <nav>
            <Link to="/calendar-page"><button>Calendar Page</button></Link>
            <Link to="/cal-two"><button>calv2</button></Link>
            <Link to="/calv5"><button>calv5</button></Link>
            <a href="https://reactcalendar-v3.netlify.com/">online</a>
            <Link to="/eye"><button>eye</button></Link>
            <Link to="/cal-canvas"><button>CalWrap</button></Link>
            <Link to="/calv4"><button>cal V4</button></Link>
            
            </nav>

            <hr />
            {events.map((event) => (
                <div className={indexStyles.eventListing} key={event.slug}>
                    <Link to={`/events/${event.slug}`}><h1>{event.title}</h1></Link>
                    <ul>{event.datesArray.map((date, idx) => <li key={idx}><span>{date}</span></li>)}</ul>
                </div>
            ))}
        </div>
    )
}
export default Index;
