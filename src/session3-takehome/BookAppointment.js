import { useState } from "react";
import axios from "axios";

const POST_API = "https://jsonplaceholder.typicode.com/posts";

const BookApp = (props) => {
  const appointmentInit = {
    firstName: "",
    lastName: "",
    email: "",
    selectedDoctor: "",
    contactOptionSelected: "",
    date: ""
  };

  const [appointmentData, setappoinmentData] = useState(appointmentInit);
  const [isBooked, setisBooked] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handelChange = (e, docterData) => {
    const name = e.target.name;
    const value = e.target.value;
    setappoinmentData({ ...appointmentData, [name]: value });
  };

  const handelSubmit = async (event) => {
    console.log(appointmentData);
    event.preventDefault();
    setisLoading(true);
    try {
      const res = await axios.post(POST_API, appointmentData);
      setisBooked(true);
    } catch (e) {
      console.log(e.res);
    }
    setisLoading(false);
  };
  const handelCancel = () => {
    setisBooked(false);
  };

  return (
    <div>
      {isBooked ? (
        <section>
          <h2>Appoinment is Booked Succesfully</h2>
          <button type="button" onClick={handelCancel}>
            Cancel Appoinment
          </button>
        </section>
      ) : (
        <main>
          <div>
            <h1>Book a Call Session</h1>
            <h5>
              Fill in the form below to book a virtual Session with our docter
            </h5>
          </div>
          {isLoading ? (
            <h3>Scheduling the appointment....</h3>
          ) : (
            <div>
              <h5>Basic Info</h5>
              <form id="booking-form" onSubmit={handelSubmit}>
                <label htmlFor="firstName" className="form-label">
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    value={appointmentData.firstName}
                    onChange={(e) => handelChange(e)}
                  />
                </label>
                <br />
                <label htmlFor="lastName" className="form-label">
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={appointmentData.lastName}
                    onChange={(e) => handelChange(e)}
                  />
                </label>
                <br />
                <label htmlFor="email" className="form-label">
                  Email:
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={appointmentData.email}
                    onChange={(e) => handelChange(e)}
                  />
                </label>
                <br />
                
                <div>
                  <h5>Architecture</h5>
                  <select
                    className="form-select"
                    name="selectedDoctor"
                    value={appointmentData.selectedDoctor}
                    onChange={(e) => handelChange(e)}
                  >
                    <option value="">Select your doctor</option>
                    <option value="JOHN_HOPKINS">Shreya Mahajan</option>
                    <option value="MAYA_MARIN">Dr. Maya Marin</option>
                    <option value="DONNA_DOUGLAS">Dr. Donna Douglas</option>
                  </select>
                </div>
                {appointmentData.selectedDoctor && (
                  <div id="radio-btn">
                    <h5>Where?</h5>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="Google_meet"
                        value={appointmentData.contactOptionSelected}
                        className="form-check-input"
                        id="location-meet"
                        onChange={(e) => handelChange(e)}
                      />
                      <label
                        htmlFor="location-meet"
                        className="form-check-label"
                      >
                        Google Meet
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="PhonePe"
                        value={appointmentData.contactOptionSelected}
                        className="form-check-input"
                        id="location-phone"
                        onChange={(e) => handelChange(e)}
                      />
                      <label
                        htmlFor="location-phone"
                        className="form-check-label"
                      >
                        Phone
                      </label>
                    </div>
                  </div>
                )}

                {appointmentData.selectedDoctor && (
                  <div>
                    <h5>When?</h5>
                    <input
                      type="datetime-local"
                      name="date"
                      id="date"
                      className="form-control"
                      value={appointmentData.date}
                      onChange={(e) => handelChange(e)}
                    />
                  </div>
                )}
                <button type="submit">Confirm booking</button>
              </form>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default BookApp;
