import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";

const EmailForm = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");

  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setStatus("You need to be logged in to send an email.");
      return;
    }

    try {
      const emailData = {
        to,
        from,
        cc,
        bcc,
        subject,
        message: `${message}\n\nLink: ${link}`,
        sender: user.email,
        timestamp: new Date(),
      };

      console.log("Email data:", emailData);

      await addDoc(collection(db, "sent_emails"), emailData);

      if (file) {
        // Implement file upload to Firebase Storage here
        console.log("File selected:", file);
        // const fileRef = doc(collection(db, "email_attachments")); // Save file reference
        // Upload file and get file URL
      }

      setTo("");
      setFrom("");
      setCc("");
      setBcc("");
      setSubject("");
      setMessage("");
      setFile(null);
      setLink("");
      setStatus("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email: ", error.message);
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Send a New Email</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="from"
            className="block text-sm font-medium text-gray-700"
          >
            From
          </label>
          <input
            type="email"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700"
          >
            To
          </label>
          <input
            type="email"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="cc"
            className="block text-sm font-medium text-gray-700"
          >
            CC
          </label>
          <input
            type="text"
            id="cc"
            value={cc}
            onChange={(e) => setCc(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="bcc"
            className="block text-sm font-medium text-gray-700"
          >
            BCC
          </label>
          <input
            type="text"
            id="bcc"
            value={bcc}
            onChange={(e) => setBcc(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Attach File
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium text-gray-700"
          >
            Link
          </label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
        {status && (
          <p className="mt-4 text-center text-sm text-green-600">{status}</p>
        )}
      </form>
    </div>
  );
};

export default EmailForm;
