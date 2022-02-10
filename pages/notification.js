import Image from "next/image";

const Notification = () => {
  return (
    <div className="bg-slate-50 m-10 rounded pb-8 pt-5">
      <div className="container m-5 rounded bg-white  mx-auto">
        <div className="p-5">
          {/* header-icon-section */}
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-2xl font-bold">
                Notification{" "}
                <span className="bg-orange-600 m-0  px-4 py-1 rounded font-normal text-white text-base">
                  23
                </span>
              </h3>
            </div>
            <div className="flex gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 bg-gray-100 p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 bg-gray-100 p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 bg-gray-100 p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
          {/* main-Notification-items */}
          <div className=" mt-8 flex transition duration-500 ease-in-out hover:bg-slate-300 rounded">
            <div className="w-10/12  flex p-2 ">
              <div style={{ height: "50px" }} className="relative">
                <Image
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
                  height={50}
                  width={50}
                  alt="img"
                />
                <span className="bg-orange-600 m-0  font-normal text-white text-base rounded-full h-7 w-7 absolute bottom-0 right-0 p-1">
                  23
                </span>
              </div>
              <div className="pl-5">
                <p className="font-sans font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  rem reiciendis veritatis culpa officiis non blanditiis
                  consectetur odit! Quia, facilis!
                </p>
                <p className="font-bold text-gray-400">12 minutes ago</p>
              </div>
            </div>
            <div className="w-2/12 flex items-center justify-end pr-5">
              <div className="bg-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* second-Notification
           */}
          <div className=" mt-2 flex transition duration-500 ease-in-out hover:bg-slate-300 ">
            <div className="w-10/12  flex p-2 ">
              <div style={{ height: "50px" }} className="relative h-25">
                <Image
                  className="relative"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
                  height={50}
                  width={50}
                  alt="img"
                />
                <span className="bg-orange-600 m-0  font-normal text-white text-base rounded-full h-7 w-7 absolute bottom-0 right-0 p-1">
                  23
                </span>
              </div>

              <div className="pl-5">
                <p className="font-sans font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  rem reiciendis veritatis culpa officiis non blanditiis
                  consectetur odit! Quia, facilis!
                </p>
                <p className="font-bold text-gray-400">12 minutes ago</p>
              </div>
            </div>
            <div className="w-2/12 flex items-center justify-end pr-5">
              <div className="bg-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
