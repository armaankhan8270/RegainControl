import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "./armaan1-removebg-preview.png";
import Edit from "./Edit";

const Diary = () => {
  const [data, setData] = useState([]);
  const [Deltedd, setDeltedd] = useState(false);
  const [edit, setedit] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(response.data[0]._id);
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Optional: Smooth scrolling animation
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [Deltedd]);

  async function DeletePost(id) {
    try {
      await axios.delete(`http://localhost:3001/${id}`);
      console.log("deleted");
      setDeltedd(true);
      setTimeout(() => {
        setDeltedd(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="lg:mx-72">
      {Deltedd ? (
        <div className="flex w-full m-2 p-4 lg:ml-32 max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-center w-12 bg-red-500">
            <svg
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-red-500 dark:text-red-400">
                Deleted
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Record is Delted
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data.map((item, index) => (
        <div className="p-6 font-serif shadow-md my-2 rounded-md  ">
          <div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  DeletePost(item._id);
                }}
                className="text-xs  font-medium text-red-400 font-bold shadow-md p-3 rounded-md uppercase dark:text-blue-400"
              >
                Delete
              </button>
            </div>

            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              {item.topic}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {item.LearnedTopics}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={image}
                  alt="Avatar"
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabindex="0"
                  role="link"
                >
                  Armaan khan
                </a>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {item.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diary;
