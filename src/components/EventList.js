import React from 'react';
import { useEventContext } from '../context/EventContext';
import { Link } from 'react-router-dom';

function EventList() {
  const { events, deleteEvent } = useEventContext();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-indigo-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-800">Event List</h1>
      
      <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="py-3 px-4 border-b">Title</th>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Location</th>
            <th className="py-3 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id} className="hover:bg-gray-100 transition duration-200">
              <td className="py-3 px-4 border-b">{event.title}</td>
              <td className="py-3 px-4 border-b">{event.date}</td>
              <td className="py-3 px-4 border-b">{event.location}</td>
              <td className="py-3 px-4 border-b flex space-x-2">
                <Link to={`/events/${event.id}`} className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150">View</Link>
                <Link to={`/edit-event/${event.id}`} className="text-green-600 hover:text-green-800 font-semibold transition duration-150">Edit</Link>
                <button 
                  onClick={() => handleDelete(event.id)} 
                  className="text-red-600 hover:text-red-800 font-semibold transition duration-150"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <hr className="my-6 border-gray-300" />
      
      <Link to="/create-event" className="block text-center text-indigo-600 hover:text-indigo-800 font-semibold mb-4">
        Create New Event
      </Link>
    </div>
  );
}

export default EventList;
