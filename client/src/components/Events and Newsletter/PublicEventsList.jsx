import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const PublicEventsList = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const collectionName = 'nofa_egypt_events_list';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const eventsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsList);
      } catch (err) {
        console.error('Failed to fetch events:', err);
        setError('Failed to fetch events.');
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-xl border-2 overflow-x-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Events List</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {events.length === 0 ? (
        <p className="text-center text-gray-500">There are no events added yet.</p>
      ) : (
        <table className="w-full min-w-max divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Day</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Day</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Time</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map(event => (
              <tr key={event.id} className="text-sm">
                <td className="px-4 py-3 text-gray-900 truncate">{event.eventName}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.location}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.startDate}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.startDay}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.endDate}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.endDay}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.duration}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.startTime}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.endTime}</td>
                <td className="px-4 py-3 text-gray-600 truncate">{event.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PublicEventsList;
