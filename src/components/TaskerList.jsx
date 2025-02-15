import React, { useState, useEffect } from "react";
import "./TaskerList.css";
import taskers from "../data/Taskers";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Steps from "./Steps";

const TaskerList = () => {
  const [sortBy, setSortBy] = useState("Recommended");
  const [selectedDate, setSelectedDate] = useState(null);
  const [customDate, setCustomDate] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTimes, setSelectedTimes] = useState(
    searchParams.get("times") ? searchParams.get("times").split(",") : []
  );
  const navigate = useNavigate();

  const updateURL = (newParams) => {
    const updatedParams = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) updatedParams.set(key, value);
      else updatedParams.delete(key);
    });
    setSearchParams(updatedParams);
  };

  const timeOptions = {
    "Morning (8am - 12pm)": "morning",
    "Afternoon (12pm - 5pm)": "afternoon",
    "Evening (5pm - 9:30pm)": "evening",
  };

  const handleCheckboxChange = (time) => {
    const newSelectedTimes = selectedTimes.includes(time)
      ? selectedTimes.filter((t) => t !== time)
      : [...selectedTimes, time];

    setSelectedTimes(newSelectedTimes);
    updateURL({ times: newSelectedTimes.join(",") });
  };

  const sortedTaskers = [...taskers].sort((a, b) => {
    if (sortBy === "Price Low to High") {
      return (
        parseFloat(a.price.replace("Rs. ", "")) -
        parseFloat(b.price.replace("Rs. ", ""))
      );
    } else if (sortBy === "Price High to Low") {
      return (
        parseFloat(b.price.replace("Rs. ", "")) -
        parseFloat(a.price.replace("Rs. ", ""))
      );
    } else if (sortBy === "Recommended") {
      return parseFloat(b.rating) - parseFloat(a.rating);
    }
    return 0;
  });

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    updateURL({ date: date !== "Choose Dates" ? date : "" });

    if (date !== "Choose Dates") {
      setCustomDate("");
    }
  };

  useEffect(() => {
    if (customDate) {
      updateURL({ date: customDate });
    }
  }, [customDate]);

  return (
    <>
      <Steps step={2} />
      <div className="tasker-container">
        <h2>
          Find trusted professionals with years of experience and excellent
          reviews.
        </h2>

        <div className="sorting">
          <label>Sorted By:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Recommended">Recommended</option>
            <option value="Price Low to High">Price: Low to High</option>
            <option value="Price High to Low">Price: High to Low</option>
          </select>
        </div>

        <div className="left-right">
          <div className="filter-container">
            <h3>Date</h3>
            <div className="date-buttons">
              {["Today", "Within 3 Days", "Within A Week", "Choose Dates"].map(
                (date) => (
                  <button
                    key={date}
                    className={selectedDate === date ? "active" : ""}
                    onClick={() => handleDateSelection(date)}
                  >
                    {date}
                  </button>
                )
              )}
            </div>

            {selectedDate === "Choose Dates" && (
              <input
                type="date"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                className="date-picker"
                required
              />
            )}

            <h3>Time of day</h3>
            <div className="time-options">
              {Object.entries(timeOptions).map(([label, value]) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    checked={selectedTimes.includes(value)}
                    onChange={() => handleCheckboxChange(value)}
                    required
                  />{" "}
                  {label}
                </label>
              ))}
            </div>

            <div className="divider">or choose a specific time</div>
            <select
              className="dropdown"
              onChange={(e) => updateURL({ times: e.target.value })}
            >
              <option>I'm Flexible</option>
              {Object.keys(timeOptions).map((label) => (
                <option key={label}>{label}</option>
              ))}
            </select>
            <div className="info-box">
              Always have peace of mind. All Taskers undergo ID and criminal
              background checks.
            </div>
          </div>

          <div className="tasker-list">
            {sortedTaskers.map((tasker, index) => (
              <div key={index} className="tasker-card">
                <img
                  src={tasker.image}
                  alt={tasker.name}
                  className="tasker-image"
                />
                <div className="tasker-info">
                  <h3>{tasker.name}</h3>
                  <p>
                    <strong>Profession:</strong> {tasker.profession}
                  </p>
                  <p>
                    <strong>Experience:</strong> {tasker.experience}
                  </p>
                  <p>
                    <strong>Location:</strong> {tasker.location}
                  </p>
                  <p>
                    <strong>Rating:</strong>{" "}
                    <span className="stars">
                      {Array.from({ length: Math.round(tasker.rating) }).map(
                        (_, i) => (
                          <FaStar key={i} color="#FFD700" />
                        )
                      )}
                    </span>{" "}
                    ({tasker.rating})
                  </p>
                  <p className="price">{tasker.price}</p>
                  <button
                    className="select-button"
                    onClick={() =>
                      navigate(
                        `/services/task-form/taskers/taskSchedule?tasker=${encodeURIComponent(
                          tasker.name
                        )}`
                      )
                    }
                  >
                    Select & Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskerList;