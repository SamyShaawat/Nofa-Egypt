import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPen, faList, faFile } from "@fortawesome/free-solid-svg-icons";

const ControlPanelMenu = ({ selectedSection, setSelectedSection }) => {
  return (
    <div className="w-full md:w-1/4 bg-primary text-white p-6 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold mb-8 text-center">Control Panel</h2>
      <ul className="space-y-4">
        <li>
          <button
            className={`w-full flex items-center text-left p-4 rounded-lg ${
              selectedSection === "emailList"
                ? "bg-secondary text-black"
                : "bg-primary text-white"
            } hover:bg-secondary hover:text-black transition duration-300 ease-in-out`}
            onClick={() => setSelectedSection("emailList")}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`mr-3 text-xl ${
                selectedSection === "emailList" ? "text-black" : "text-white"
              }`}
            />
            E-Mail List
          </button>
        </li>
        <li>
          <button
            className={`w-full flex items-center text-left p-4 rounded-lg ${
              selectedSection === "emailForm"
                ? "bg-secondary text-black"
                : "bg-primary text-white"
            } hover:bg-secondary hover:text-black transition duration-300 ease-in-out`}
            onClick={() => setSelectedSection("emailForm")}
          >
            <FontAwesomeIcon
              icon={faPen}
              className={`mr-3 text-xl ${
                selectedSection === "emailForm" ? "text-black" : "text-white"
              }`}
            />
            E-Mail Form
          </button>
        </li>
        <li>
          <button
            className={`w-full flex items-center text-left p-4 rounded-lg ${
              selectedSection === "eventsList"
                ? "bg-secondary text-black"
                : "bg-primary text-white"
            } hover:bg-secondary hover:text-black transition duration-300 ease-in-out`}
            onClick={() => setSelectedSection("eventsList")}
          >
            <FontAwesomeIcon
              icon={faList}
              className={`mr-3 text-xl ${
                selectedSection === "eventsList" ? "text-black" : "text-white"
              }`}
            />
            Events List
          </button>
        </li>
        <li>
          <button
            className={`w-full flex items-center text-left p-4 rounded-lg ${
              selectedSection === "eventsForm"
                ? "bg-secondary text-black"
                : "bg-primary text-white"
            } hover:bg-secondary hover:text-black transition duration-300 ease-in-out`}
            onClick={() => setSelectedSection("eventsForm")}
          >
            <FontAwesomeIcon
              icon={faFile}
              className={`mr-3 text-xl ${
                selectedSection === "eventsForm" ? "text-black" : "text-white"
              }`}
            />
            Events Form
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ControlPanelMenu;
