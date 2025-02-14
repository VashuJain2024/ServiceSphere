import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TaskScheduler.css";
import { useNavigate, useSearchParams } from "react-router";
import Steps from "./Steps";
import taskers from "../data/Taskers";  

const TaskScheduler = () => {
  const [searchParams] = useSearchParams();
  const taskerName = searchParams.get("tasker");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:30pm");
  const navigate = useNavigate();
  const isLogged = false;  
 
  const tasker = taskers.find((t) => t.name === taskerName);
  const profileImage = tasker ? tasker.image : "/default-profile.png";  

  return (
    <>
      <Steps step={3} />
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Choose your task date and start time:</h2>
          <div className="profile">
            <img src={profileImage} alt={taskerName || "Tasker"} />
            <span>
              {taskerName
                ? `${taskerName}'s Availability`
                : "Tasker's Availability"}
            </span>
          </div>

          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>

          <select
            className="time-select"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {["8:00am", "10:00am", "12:30pm", "2:00pm", "4:00pm", "6:30pm"].map(
              (t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              )
            )}
          </select>

          <p>
            You can chat to adjust task details or change the start time after
            confirming.
          </p>

          <div className="summary">
            <strong>Request for:</strong> {date.toDateString()}, {time}
          </div>

          <button
            className="confirm-btn"
            onClick={() =>
              navigate(
                true
                  ? `/services/task-form/taskers/taskSchedule/terms?${taskerName}/${date.toISOString()}/${time}`
                  : "/login-signup"
              )
            }
          >
            Select & Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskScheduler;
