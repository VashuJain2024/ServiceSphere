import React, { useState, useEffect } from "react";
import "./TaskForm.css";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import Steps from "./Steps";

const TaskForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, title } = location.state || {};

  const [searchParams, setSearchParams] = useSearchParams();

  const [userLocation, setUserLocation] = useState(
    searchParams.get("userLocation") || ""
  );
  const [street, setStreet] = useState(searchParams.get("street") || "");
  const [taskSize, setTaskSize] = useState(searchParams.get("taskSize") || "");
  const [details, setDetails] = useState(searchParams.get("details") || "");
  const [media, setMedia] = useState(null);

  useEffect(() => {
    setSearchParams({
      userLocation,
      street,
      taskSize,
      details,
    });
  }, [userLocation, street, taskSize, details, setSearchParams]);

  return (
    <>
      <Steps step={1} />
      <div className="task-form">
        <h4 className="title">{title}</h4>
        <p className="taskpara">
          Tell us about your task. We use these details to show Taskers in your
          area who fit your needs.
        </p>

        <div className="task-section">
          <div className="input-group">
            <h4>Your task location</h4>
            <input
              type="text"
              placeholder="Delhi, India"
              value={userLocation}
              onChange={(e) => setUserLocation(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Street/Colony"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="task-section">
          <h4>Task Options</h4>
          <p>How big is your task?</p>
          <label>
            <input
              type="radio"
              name="taskSize"
              value="Small"
              checked={taskSize === "Small"}
              onChange={() => setTaskSize("Small")}
            />{" "}
            Small - Est. 1 hr
          </label>
          <label>
            <input
              type="radio"
              name="taskSize"
              value="Medium"
              checked={taskSize === "Medium"}
              onChange={() => setTaskSize("Medium")}
            />{" "}
            Medium - Est. 2-3 hrs
          </label>
          <label>
            <input
              type="radio"
              name="taskSize"
              value="Large"
              checked={taskSize === "Large"}
              onChange={() => setTaskSize("Large")}
            />{" "}
            Large - Est. 4+ hrs
          </label>
        </div>

        <div className="task-section">
          <h4>Tell us the details of your task</h4>
          <textarea
            placeholder="Describe your task..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="task-section">
          <h4>Upload Videos and Photos</h4>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setMedia(e.target.files[0])}
          />
        </div>

        <button
          className="final-btn"
          onClick={() =>
            navigate(`/services/task-form/taskers?${searchParams.toString()}`)
          }
        >
          See Taskers & Prices
        </button>
      </div>
    </>
  );
};

export default TaskForm;