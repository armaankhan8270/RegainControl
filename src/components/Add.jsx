import React, { useState, useEffect } from "react";
import axios from "axios";

export const Add = () => {
  const [date, setdate] = useState("");
  const [topic, settopic] = useState("");
  const [LearnedTopic, setlearnedTopic] = useState("");
  const [Success, setSuccess] = useState(false);
  const [Edit, setEdit] = useState(false);
  const postData = {
    date: date,
    topic: topic,
    LearnedTopics: LearnedTopic,
  };

  async function PostData() {
    try {
      const response = await axios.post("http://localhost:3001/", postData);
      console.log("Post created:", response.data);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-700 to-gray-300 dark:bg-gray-800">
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 p-6 transform translate-y-8 hover:translate-y-6 transition-transform duration-300">
          {Success ? (
            <div class="flex m-4 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div class="flex items-center justify-center w-12 bg-emerald-500">
                <svg
                  class="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-emerald-500 dark:text-emerald-400">
                    Success
                  </span>
                  <p class="text-sm text-gray-600 dark:text-gray-200">
                    Your record has been saved
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <h1 className="bg-gradient-to-r from-blue-200 to-blue-600 mb-4 p-4 rounded-md text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            Kya kiya pura dinnn
          </h1>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm text-gray-600 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={topic}
              onChange={(e) => settopic(e.target.value)}
              placeholder="eg: mongodb"
              className="w-full mt-2 p-3 border  shadow-md focus:outline-none outline:none rounded-lg   dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm text-gray-600 dark:text-gray-300"
            >
              Date
            </label>
            <input
              type="text"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              id="date"
              placeholder="21 august 2023"
              className="w-full mt-2 p-3 border  shadow-md focus:outline-none outline:none rounded-lg   dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm text-gray-600 dark:text-gray-300"
            >
              Kya Kiya Pura dinn
            </label>
            <textarea
              id="description"
              value={LearnedTopic}
              rows={5}
              onChange={(e) => setlearnedTopic(e.target.value)}
              placeholder="lorem..."
              className="w-full mt-2 p-3 border  shadow-md focus:outline-none outline:none rounded-lg   dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
            ></textarea>
          </div>
          <button
            onClick={PostData}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-00 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100 bg-blue-700 rounded-md text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>

            <span>Upload</span>
          </button>
        </div>
      </div>
    </div>
  );
};
