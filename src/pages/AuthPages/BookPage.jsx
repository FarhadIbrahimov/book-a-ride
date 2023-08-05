import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Authorize/AuthContext";
import { v4 as uuidv4 } from "uuid";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LeafletMap from "../../Widgets/Map";
import Autocomplete from "../../Widgets/AutoComplete";
import { FaTrashAlt } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";

function BookPage({ data }) {
  const params = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();
  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState(null);
  // State to store the selected time
  const [selectedTime, setSelectedTime] = useState("12:00");

  //State to Passenger Count
  const [passenger, setPassenger] = useState(1);
  //State to Luggage Count
  const [luggage, setLuggage] = useState(0);
  //State to totalHours Count
  const [hours, setHours] = useState(1.0);
  const [draggedStopIndex, setDraggedStopIndex] = useState(null);

  const services = [
    "Birthday",
    "Hourly/AsDirected",
    "Sporting Events",
    "From Airport",
    "To Airport",
  ];
  const [userForm, setUserForm] = useState({
    service: "",
    date: "",
    time: "",
    map: {},
    stops: [],
    member: "",
    pickupLocation: "",

    id: uuidv4(),
  });
  const [stops, setStops] = useState([]); // State to store stops

  // Function to add a new stop
  const addStop = () => {
    // Check if the last stop's address is empty, and if so, don't add a new stop
    if (stops.length > 0 && stops[stops.length - 1].trim() === "") {
      return;
    }

    setStops([...stops, ""]); // Add an empty string to the stops array
  };

  // Function to handle drag start event
  const onDragStart = (index) => {
    setDraggedStopIndex(index);
  };

  // Function to handle drag over event
  const onDragOver = (index) => {
    // Prevent default to allow the drop
    event.preventDefault();
  };

  // Function to handle drop event
  const onDrop = (index) => {
    // Move the dragged stop to the new position
    const updatedStops = [...stops];
    const draggedStop = updatedStops[draggedStopIndex];
    updatedStops.splice(draggedStopIndex, 1);
    updatedStops.splice(index, 0, draggedStop);
    setStops(updatedStops);

    // Reset the dragged stop index
    setDraggedStopIndex(null);
  };

  // Function to handle stop address change
  const handleStopChange = (index, value) => {
    const updatedStops = [...stops];
    updatedStops[index] = value; // Update the address at the given index
    setStops(updatedStops);
  };

  // Function to remove a stop by index
  const removeStop = (index) => {
    const updatedStops = [...stops];
    updatedStops.splice(index, 1); // Remove the stop at the given index
    setStops(updatedStops);
  };
  const addStops = () => {
    // Check if the last stop's address is empty, and if so, don't add a new stop
    if (stops.length > 0 && stops[stops.length - 1].trim() === "") {
      return;
    }

    setStops([...stops, ""]); // Add an empty string to the stops array
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };
  // Function to handle time change
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  function handleChange(event) {
    console.log(event.target);

    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  }

  function MyComponent() {
    return (
      <div>
        {/* Using the trash icon */}
        <FaTrashAlt />
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userForm);
  }

  return (
    <div className="bg-slate-300 p-4 flex flex-col ">
      {/* Title */}
      <h1 className="text-2x1 font-bold mb-4">Book Page</h1>
      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        {/* Left column */}
        <div className="w-full md:w-1/2 mb-4 md:pr-2 ">
          {/* Select Service Dropdown */}
          <label className="mb-4">
            <h4>Select a Service:</h4>
            <select
              className="w-full px-4 py-2 text-gray-800 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type=""
              name="Service"
              value={userForm.service}
              onChange={handleChange}
            >
              {services.map((service) => {
                return (
                  <option key={service} value={service}>
                    {service}
                  </option>
                );
              })}
            </select>
          </label>

          {/* DatePicker and TimePicker container */}
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
            <div className="w-full mb-4">
              {/* The DatePicker component */}
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                value={userForm.date}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a date"
                className="w-full px-4 py-2 text-gray-800 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              {/* The TimePicker component */}
              <TimePicker
                onChange={handleTimeChange}
                value={userForm.selectedTime}
                className="w-full px-4 py-2 text-gray-800 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* TIME GOES HERE */}
          <div className="mb-4">
            <label>
              Pick-Up Location
              <input
                type="text"
                name="pickupLocation"
                value={userForm.pickupLocation}
                onChange={handleChange}
                placeholder="Enter Pick-Up Location"
                className="w-full px-4 py-2 text-gray-800 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <Autocomplete /> */}
            </label>
          </div>

          {/* Add Stop */}
          <div className="mb-4 mt-8 justify-center">
            <button
              className=" text-center flex pr-2 hover:underline"
              onClick={addStop}
            >
              + <ul>Add Stop</ul>
            </button>

            {stops.map((stop, index) => (
              <div
                key={index}
                className="mb-4 flex  justify-center"
                draggable={true}
                onDragStart={() => onDragStart(index)}
                onDragOver={() => onDragOver(index)}
                onDrop={() => onDrop(index)}
              >
                <RxDotsVertical className="scale-150 mt-3 justify-between hover:cursor-pointer" />
                <label>
                  <input
                    type="text"
                    name={`stop-${index}`}
                    value={stop}
                    onChange={(e) => handleStopChange(index, e.target.value)}
                    placeholder="Enter Stop Address"
                    className="w-full px-4 py-2 text-gray-800 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
                <button onClick={() => removeStop(index)} className="ml-2">
                  <FaTrashAlt size={18} color="black" />
                </button>
              </div>
            ))}
          </div>
          <br></br>

          {/* Passenger Count */}
          <div className="mb-4 ">
            <label className="block text-center">Passenger Count:</label>
            <div className="flex items-center justify-center ">
              <button
                onClick={() =>
                  setPassenger((prevPass) => Math.max(prevPass - 1, 1))
                }
                className="p-2 bg-gray-200 w-1/6 rounded-l"
              >
                -
              </button>
              <p className="p-2 bg-gray-300 w-1/2 text-center">{passenger}</p>
              <button
                onClick={() => setPassenger((prevPass) => prevPass + 1)}
                className="p-2 bg-gray-200 w-1/6 rounded-r"
              >
                +
              </button>
            </div>
          </div>

          <br></br>
          {/* Luggage Count */}
          <div className="  mb-4">
            <label className="block text-center ">
              <p>Luggage Count</p>
              <div className="flex items-center justify-center">
                <button
                  onClick={() =>
                    setLuggage((prevLuggage) => Math.max(prevLuggage - 1, 0))
                  }
                  className="p-2 bg-gray-200 w-1/6 rounded-1"
                >
                  -
                </button>
                <p className="p-2 bg-gray-300 w-1/2 text-center">{luggage}</p>
                <button
                  onClick={() => setLuggage((prevLuggage) => prevLuggage + 1)}
                  className="p-2 bg-gray-200 w-1/6 rounded-r"
                >
                  +
                </button>
              </div>
            </label>
          </div>
          <br></br>

          {/* Number of Hours */}

          <div className="  mb-4">
            <label className="block text-center ">
              <p>Number of Hours</p>
              <div className="flex items-center justify-center">
                <button
                  onClick={() =>
                    setHours((prevHours) => Math.max(prevHours - 0.5, 1.0))
                  }
                  className="p-2 bg-gray-200 w-1/6 rounded-1"
                >
                  -
                </button>
                <p className="p-2 bg-gray-300 w-1/2 text-center">
                  {hours.toFixed(1)}
                </p>
                <button
                  onClick={() => setHours((prevHours) => prevHours + 0.5)}
                  className="p-2 bg-gray-200 w-1/6 rounded-r"
                >
                  +
                </button>
              </div>
            </label>
          </div>
          <br></br>
          <input type="submit" value="Submit" />
        </div>
        <LeafletMap address={userForm.pickupLocation} />
      </form>
    </div>
  );
}

export default BookPage;
