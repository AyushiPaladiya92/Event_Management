import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';

function EventDetails() {
  const { id } = useParams();
  const { events } = useEventContext();

  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="container mx-auto px-4 py-8 text-center">Event not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-indigo-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-800">{event.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={event.image} alt={event.title} className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-indigo-600 text-lg font-semibold mb-2">{event.date}</p>
          <p className="text-gray-800 text-lg mb-4">{event.location}</p>
          <p className="text-gray-700 text-base mb-6">{event.description}</p>
          <Link to="/events" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
