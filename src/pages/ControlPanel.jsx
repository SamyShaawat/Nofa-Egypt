import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ControlPanelMenu from "../components/Control Panel/ControlPanelMenu";
import EmailList from "../components/Control Panel/EmailList.jsx";
import EmailForm from "../components/Control Panel/EmailForm.jsx";
import EventsList from "../components/Control Panel/EventsList.jsx";
import EventsForm from "../components/Control Panel/EventsForm.jsx";

const ControlPanel = () => {
  const [emails, setEmails] = useState([]);
  const [editEmail, setEditEmail] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [selectedSection, setSelectedSection] = useState("emailList");

  useEffect(() => {
    const fetchEmails = async () => {
      const emailCollection = await getDocs(
        collection(db, "nofa_egypt_mail_list")
      );
      setEmails(
        emailCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchEmails();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "nofa_egypt_mail_list", id));
    setEmails(emails.filter((email) => email.id !== id));
  };

  const handleEdit = (email) => {
    setEditEmail(email.id);
    setNewEmail(email.email);
  };

  const handleUpdate = async (id) => {
    await updateDoc(doc(db, "nofa_egypt_mail_list", id), { email: newEmail });
    setEmails(
      emails.map((email) => (email.id === id ? { id, email: newEmail } : email))
    );
    setEditEmail(null);
    setNewEmail("");
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "emailList":
        return (
          <EmailList
            emails={emails}
            editEmail={editEmail}
            newEmail={newEmail}
            setNewEmail={setNewEmail}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        );
      case "emailForm":
        return <EmailForm />;
      case "eventsList":
        return <EventsList />;
      case "eventsForm":
        return <EventsForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-8 md:p-10 lg:p-12 max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
      <ControlPanelMenu
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <div className="w-full md:w-3/4 lg:w-4/5 bg-gradient-to-b from-white to-gray-100 p-8 rounded-lg shadow-2xl">
        {renderSection()}
      </div>
    </div>
  );
};

export default ControlPanel;
