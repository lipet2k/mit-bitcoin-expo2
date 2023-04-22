import { Link } from "react-router-dom";

const NewReport = () => {
  return (
      <div className="generate-keys">
        <h1>New Report</h1>
        <form class="main-form" action="" method="get">
            <h2>Christian Adelmund</h2>
            <p class="secondary">hdI4yZ5ew18JH4JW9jbhUFrviQzM7</p>

            <div class="top-right"><button class="secondary">Import</button></div>

            <div class="half-width inner-form-container">
                <h3>Conditions</h3>
                <input
                class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="condition-1"
                type="text"
                value="High Blood Pressure"
                ></input>

                <input
                class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="condition-2"
                type="text"
                placeholder="New Condition"
                ></input>

                <a href="#">+ Add Condition</a>
            </div>

            <div class="half-width inner-form-container second-col">
                <h3>Accommodations</h3>
                <input
                class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="condition-1"
                type="text"
                value="Reserved Parking"
                ></input>

                <input
                class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="condition-2"
                type="text"
                placeholder="New Accommodation"
                ></input>

                <a href="#">+ Add Accommodation</a>
            </div>

            <button
            class="button-main right hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            >
                Encrypt and Publish
            </button>
        </form>
      </div>
  );
};

export default NewReport;
