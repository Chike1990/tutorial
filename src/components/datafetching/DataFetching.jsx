// https://jsonplaceholder.typicode.com/users

// Project description: Your job is to display the data from the API in ur UI using React

// Functional components that will house the dependencies, the functionalities, and renders the UI.
// .js for num UI components while .js is used when you are to return or render something to the UI
// Pseudocode
// Import necessary dependencies
// Define functional component (DataFetching)
// create our state variables to manage data (data from api, loading state and error state)
// Define our functions to handle data fetching
// Use the useEffect to fetch data when the components mount(used to display things or perform side effects when an app mounts - without having the user ---- used whenever you're doing something that is outside React)
// Use Axios to make a get request to an api endpoint
// Update the data state with the fetched data
// handle errors and loading state
// Call the function when the component mounts

import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import "./datafetching.css";

function DataFetching() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const {data} = await axios.get(
          "http://localhost:3000/countries"
        );
        setCountries(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">loading...</div>;
  }
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="data-container">
      <ul className="country-list">
        {countries.map((item, index) => (
          <li key={index} className="country-item">
            <div className="country-name">
            {item.name}
            </div>
            <div className="captital">
            {item.capital}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
