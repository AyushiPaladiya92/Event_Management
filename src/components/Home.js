import React from 'react';
import EventCard from './EventCard';
import { useEventContext } from '../context/EventContext';

function Home() {
  const { events } = useEventContext();

  return (
    <div className="container mx-auto px-4 py-10 bg-gradient-to-r from-indigo-100 to-indigo-50">
      <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-8">Explore Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.length > 0 ? (
          events.map(event => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
            <p className="text-lg text-gray-600">No upcoming events available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
