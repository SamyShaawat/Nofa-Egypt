import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useAuth } from '../../contexts/authContext';
import { CheckCircle } from 'lucide-react'; // Import the checkmark icon from lucide-react

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const EventsForm = () => {
  const { userLoggedIn } = useAuth();
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [duration, setDuration] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [noEventsMessage, setNoEventsMessage] = useState('');
  const collectionName = 'nofa_egypt_events_list';

  useEffect(() => {
    const checkEventsCollection = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        if (querySnapshot.empty) {
          setNoEventsMessage('There are no events at the moment.');
        } else {
          setNoEventsMessage('');
        }
      } catch (err) {
        console.error('Failed to check events collection:', err);
      }
    };

    checkEventsCollection();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventName || !location || !startDate || !endDate || !startDay || !endDay || !duration || !startTime || !endTime) {
      setError('Please fill out all required fields.');
      return;
    }

    try {
      await addDoc(collection(db, collectionName), {
        eventName,
        location,
        startDate,
        endDate,
        startDay,
        endDay,
        duration,
        startTime,
        endTime,
        notes,
        createdAt: new Date(),
        ...(userLoggedIn?.uid ? { userId: userLoggedIn.uid } : {})
      });
      setSuccess('Event added successfully!');
      setError('');
      // Clear form fields after successful submission
      setEventName('');
      setLocation('');
      setStartDate('');
      setEndDate('');
      setStartDay('');
      setEndDay('');
      setDuration('');
      setStartTime('');
      setEndTime('');
      setNotes('');
    } catch (err) {
      setError('Failed to add event. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Add a New Event</h2>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
      {success && (
        <div className="flex items-center justify-center text-green-600 mb-4">
          <CheckCircle className="w-6 h-6 mr-2" />
          {success}
        </div>
      )}
      {noEventsMessage && <p className="text-gray-600 mb-4 text-center">{noEventsMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="eventName" className="block text-gray-700 font-medium mb-2">Event Name</label>
            <input
              id="eventName"
              type="text"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">Start Date</label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="endDate" className="block text-gray-700 font-medium mb-2">End Date</label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="startDay" className="block text-gray-700 font-medium mb-2">Start Day</label>
            <select
              id="startDay"
              value={startDay}
              onChange={(e) => setStartDay(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Start Day</option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <label htmlFor="endDay" className="block text-gray-700 font-medium mb-2">End Day</label>
            <select
              id="endDay"
              value={endDay}
              onChange={(e) => setEndDay(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select End Day</option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">Duration</label>
            <input
              id="duration"
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="startTime" className="block text-gray-700 font-medium mb-2">Start Time</label>
            <input
              id="startTime"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="endTime" className="block text-gray-700 font-medium mb-2">End Time</label>
            <input
              id="endTime"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="relative">
          <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">Notes (optional)</label>
          <textarea
            id="notes"
            placeholder="Additional notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventsForm;