import { Link } from "react-router-dom";

const UserRequest = () => {
  return (
      <div className="generate-keys">
        <h1>Fake Starbucks</h1>
        <p class="secondary">GRIBOgIBAAJBAKj34GkxFhD90vcNLJK</p>

        <form class="main-form" action="" method="get">
            <h2>Request Data</h2>
            <div class="inner-form-container">
                <input
                class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="condition-1"
                type="text"
                placeholder="Paste Request Data from Company"
                ></input>
            </div>

            <button
            class="button-main right hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            >
                Submit
            </button>
        </form>

        <form class="main-form" action="" method="get">
            <h2>Your Requests</h2>

            <div class="tertiary-group">
                <h4 class="green">PASS</h4>
                <p>Company Name: <span>Fake Starbucks</span></p>
                <p>Accommodations: <span>Reserved Parking</span></p>
                <p>Status: <span class="orange">Not Sent</span></p>

                <button
                class="button-main middle right hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                >
                    ENCRYPT AND PUBLISH
                </button>
            </div>

            <div class="tertiary-group">
                <h4 class="red">NOT PASS</h4>
                <p>Company Name: <span>Fake Starbucks</span></p>
                <p>Accommodations: <span>Flexible Work Hours</span></p>
                <p>Status: <span class="orange">Not Sent</span></p>

                <button
                class="button-main middle right hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                >
                    ENCRYPT AND PUBLISH
                </button>
            </div>
        </form>
      </div>
  );
};

export default UserRequest;
