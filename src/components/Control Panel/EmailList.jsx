import React from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa"; // Import icons from react-icons

const EmailList = ({
  emails,
  editEmail,
  newEmail,
  setNewEmail,
  handleEdit,
  handleDelete,
  handleUpdate,
}) => {
  return (
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
                {email.email}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm md:text-base">
                {editEmail === email.id ? (
                  <div className="flex flex-col md:flex-row md:space-x-2 items-center">
                    <input
                      type="text"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="border p-1 rounded-md mb-2 md:mb-0 text-sm"
                    />
                    <button
                      onClick={() => handleUpdate(email.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center space-x-1"
                    >
                      <FaSave />
                      <span className="ml-1">Save</span>
                    </button>
                  </div>
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
  );
};

export default EmailList;
