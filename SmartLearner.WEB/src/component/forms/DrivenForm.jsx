import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';



export default function DrivenForm() {

    const [drivenBefore, setDrivenBefore] = useState("");
    const [preferredType, setPreferredType] = useState("");
    const [location, setLocation] = useState("");
  
    const locationSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log("Form submitted:", { drivenBefore, preferredType, location });
    };
  return (
    <section className="driverSection">
    <div className="innerFormSection">
      <div className="search-Form">
        <form onSubmit={locationSubmit} id="locationForm">
          <div className="infoDetails">
            <div className="redio-box">
              <h3>Have you driven before?</h3>

              <label className="redio-btn">
                <input
                  type="radio"
                  value="yes"
                  checked={drivenBefore === "yes"}
                  onChange={(e) => setDrivenBefore(e.target.value)}
                />
                <span className="checkmark"></span>
                Yes
              </label>
              <label className="redio-btn">
                <input
                  type="radio"
                  value="no"
                  checked={drivenBefore === "no"}
                  onChange={(e) => setDrivenBefore(e.target.value)}
                />
                <span className="checkmark"></span>
                No
              </label>
            </div>
            <div className="redio-box">
              <h3>What do you prefer?</h3>

              <label className="redio-btn">
                <input
                  type="radio"
                  value="manual"
                  checked={preferredType === "manual"}
                  onChange={(e) => setPreferredType(e.target.value)}
                />
                <span className="checkmark"></span>
                Manual
              </label>
              <label className="redio-btn">
                <input
                  type="radio"
                  value="auto"
                  checked={preferredType === "auto"}
                  onChange={(e) => setPreferredType(e.target.value)}
                />
                <span className="checkmark"></span>
                Auto
              </label>
            </div>
          </div>
          <div className="submitFleid">
            <p>
              <FaLocationDot />
            </p>

            <input
              name="passcode"
              type="text"
              placeholder="ENTER POSTCODE PREFIX E.G. CV6"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>  
  )
}
