import { Link } from "react-router-dom";
import "../styles/styles.css";

const GenerateKeys = () => {
    return (
      <div className="generate-keys bg-gradient-to-r from-purple-300 to-blue-300">
        <h1 className="text-5xl mb-10 middle-font">Generate Keys</h1>
        <GenerateKeysForm />
      </div>
    );
}

const GenerateKeysForm = () => {
  return (
      <div className="generate-keys-form">
        <form class="w-full max-w-sm" action="" method="get">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Jane Doe"
              ></input>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Password
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                placeholder="******************"
              ></input>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3"></div>
            <label class="md:w-2/3 block text-gray-900 font-bold">
              <input class="mr-2 leading-tight" type="checkbox"></input>
              <span class="text-sm">Send me your newsletter!</span>
            </label>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="shadow bg-blue-800 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Generate Keys
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default GenerateKeys;
