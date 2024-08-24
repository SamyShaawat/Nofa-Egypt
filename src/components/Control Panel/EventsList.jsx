import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Pencil, Trash2, CheckCircle, XCircle } from 'lucide-react';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editForm, setEditForm] = useState({
    eventName: '',
    location: '',
    startDate: '',
    endDate: '',
    duration: '',
    startTime: '',
    endTime: '',
    startDay: '',
    endDay: '',
    notes: ''
  });
  const [success, setSuccess] = useState('');
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

  const handleEdit = (event) => {
    setEditingEventId(event.id);
    setEditForm({ ...event });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      setEvents(events.filter(event => event.id !== id));
      setSuccess('Event deleted successfully!');
    } catch (err) {
      console.error('Failed to delete event:', err);
      setError('Failed to delete event.');
    }
  };

  const handleSave = async () => {
    try {
      const eventDoc = doc(db, collectionName, editingEventId);
      await updateDoc(eventDoc, editForm);
      const updatedEvents = events.map(event =>
        event.id === editingEventId ? { ...event, ...editForm } : event
      );
      setEvents(updatedEvents);
      setEditingEventId(null);
      setSuccess('Event updated successfully!');
    } catch (err) {
      console.error('Failed to update event:', err);
      setError('Failed to update event.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Events List</h2>
      {success && (
        <div className="flex items-center text-green-500 mb-4">
          <CheckCircle className="w-6 h-6 mr-2" />
          {success}
        </div>
      )}
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
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                <td className="px-4 py-3 text-gray-600">
                  <button onClick={() => handleEdit(event)} className="text-blue-600 hover:text-blue-800 mr-2">
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(event.id)} className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {editingEventId && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Event</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(editForm).map((key) => (
              <div key={key} className="relative">
                <label htmlFor={key} className="block text-gray-700 font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type={key.includes('Date') ? 'date' : key.includes('Time') ? 'time' : 'text'}
                  name={key}
                  value={editForm[key]}
                  onChange={handleChange}
                  placeholder={key.replace(/([A-Z])/g, ' $1')}
                  className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={() => setEditingEventId(null)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsList;
