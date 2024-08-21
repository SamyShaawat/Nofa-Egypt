import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSave, FaPlus } from "react-icons/fa";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const [editEmail, setEditEmail] = useState(null);
  const [editValue, setEditValue] = useState("");
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(collection(db, "nofa_egypt_mail_list"), (snapshot) => {
        setEmails(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsub();
    }
  }, [db, user]);

  const handleAddEmail = async (e) => {
    e.preventDefault();
    if (newEmail.trim() !== "") {
      try {
        await addDoc(collection(db, "nofa_egypt_mail_list"), { email: newEmail });
        setNewEmail("");
      } catch (error) {
        console.error("Error adding email: ", error);
      }
    }
  };

  const handleEdit = (email) => {
    setEditEmail(email.id);
    setEditValue(email.email);
  };

  const handleUpdate = async (id) => {
    try {
      const emailRef = doc(db, "nofa_egypt_mail_list", id);
      await updateDoc(emailRef, { email: editValue });
      setEditEmail(null);
    } catch (error) {
      console.error("Error updating email: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "nofa_egypt_mail_list", id));
    } catch (error) {
      console.error("Error deleting email: ", error);
    }
  };

  return (
    <div>
      {user && (
        <form onSubmit={handleAddEmail} className="mb-4 flex items-center">
          <input
            type="email"
            placeholder="Enter new email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-3/4 lg:w-4/5 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-3 py-2 mt-2 ml-3 rounded-md hover:bg-green-600 flex items-center"
          >
            <FaPlus className="mr-2" />
            Add Email
          </button>
        </form>
      )}

      <div className="overflow-auto max-h-80 border border-gray-300 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-6 md:py-3">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-6 md:py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {emails.map((email) => (
              <tr key={email.id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm md:text-base">
                  {editEmail === email.id ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="border p-1 rounded-md text-sm w-full"
                    />
                  ) : (
                    email.email
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm md:text-base">
                  {editEmail === email.id ? (
                    <button
                      onClick={() => handleUpdate(email.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center space-x-1"
                    >
                      <FaSave />
                      <span className="ml-1">Save</span>
                    </button>
                  ) : (
                    <div className="flex flex-col md:flex-row md:space-x-2 items-center">
                      <button
                        onClick={() => handleEdit(email)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center space-x-1 mb-2 md:mb-0"
                      >
                        <FaEdit />
                        <span className="ml-1">Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(email.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center space-x-1"
                      >
                        <FaTrash />
                        <span className="ml-1">Delete</span>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailList;
