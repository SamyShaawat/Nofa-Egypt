import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const EmailForm = () => {
  const { currentUser } = useAuth();
  const [toEmails, setToEmails] = useState([]);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [links, setLinks] = useState([]);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      const emailList = [];
      const querySnapshot = await getDocs(
        collection(db, "nofa_egypt_mail_list")
      );
      querySnapshot.forEach((doc) => {
        emailList.push(doc.data().email);
      });
      setToEmails(emailList);
    };

    fetchEmails();
  }, []);

  const handleFileChange = (e) => {
    setAttachments([...e.target.files]);
  };

  const handleLinkChange = (e) => {
    setLinks(
      e.target.value
        .split("\n")
        .map((link) => link.trim())
        .filter((link) => link)
    );
  };

  const sendEmail = async () => {
    if (!currentUser) {
      alert("You must be logged in to send an email.");
      return;
    }

    // Create FormData to handle file and data submission
    const formData = new FormData();
    formData.append("bcc", toEmails.join(", "));
    formData.append("subject", subject);
    formData.append("text", body);
    formData.append("links", links.join("\n"));

    // Append each attachment to the FormData
    attachments.forEach((file) => {
      formData.append("attachments", file);
    });

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Email sent successfully!");
        setIsSuccess(true);
        setSubject("");
        setBody("");
        setAttachments([]);
        setLinks([]);
      } else {
        const errorText = await response.text();
        setMessage("Error sending email: " + errorText);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Error sending email: " + error.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Send New Email</h2>
      {message && (
        <div
          className={`mb-4 p-3 rounded-md ${
            isSuccess
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isSuccess ? "✔️ " : "❌ "} {message}
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium">To:</label>
        <input
          type="text"
          value={toEmails.join(", ")}
          onChange={(e) => setToEmails(e.target.value.split(", "))}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Attachments (optional):
        </label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Links (one per line, optional):
        </label>
        <textarea
          onChange={handleLinkChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button
        onClick={sendEmail}
        className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/80"
      >
        Send Email
      </button>
    </div>
  );
};

export default EmailForm;
