import React, { useState } from 'react';
import { useEventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';

function CreateEvent() {
  // State for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  // Get the addEvent function from EventContext
  const { addEvent } = useEventContext();
  // Get the navigate function for redirection
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new event object
    const newEvent = {
      title,
      description,
      date,
      location,
      image: image || `https://source.unsplash.com/random/800x600?${title}` // Use provided image or generate a random one
    };

    addEvent(newEvent);
    navigate('/events');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-indigo-100 to-indigo-300 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-800">Create New Event</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-gray-700 font-semibold">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-gray-700 font-semibold">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2 text-gray-700 font-semibold">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 text-gray-700 font-semibold">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-gray-700 font-semibold">Image URL (optional)</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition duration-200">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
