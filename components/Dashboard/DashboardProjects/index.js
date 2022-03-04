import React from 'react';

const Projects = () => {
  return (
    <div className="relative h-screen flex overflow-hidden">
      {/* <!-- Content area --> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <!-- Main content --> */}
        <div className="flex-1 flex items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex">
                <h1 className="flex-1 text-4xl leading-6 font-medium text-slate-100">
                  Projects
                </h1>
                <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                  {/*  */}
                </div>
              </div>

              {/* <!-- Tabs --> */}
              <div className="mt-3 sm:mt-2">
                <div className="flex items-center border-b border-slate-700">
                  <nav
                    className="flex-1 -mb-px flex space-x-6 xl:space-x-8"
                    aria-label="Tabs"
                  >
                    {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
                    <a
                      href="#"
                      aria-current="page"
                      className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      Recently Viewed
                    </a>

                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      Recently Added
                    </a>

                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      Favorited
                    </a>
                  </nav>
                  <div className="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
                    {/*  */}
                  </div>
                </div>
              </div>

              {/* <!-- Gallery --> */}
              <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className="sr-only">
                  Recently viewed
                </h2>
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                >
                  <li className="relative">
                    {/* <!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500" --> */}
                    <div className="ring-2 ring-offset-2 ring-indigo-500 group block w-full h-52 rounded-lg bg-gray-100 overflow-hidden">
                      {/* <!-- Current: "", Default: "group-hover:opacity-75" --> */}
                      <img
                        src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="h-full w-full object-cover pointer-events-none"
                      />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for IMG_4985.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_4985.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.9 MB
                    </p>
                  </li>
                  <li className="relative">
                    {/* <!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500" --> */}
                    <div className="ring-2 ring-offset-2 ring-indigo-500 group block w-full h-52 rounded-lg bg-gray-100 overflow-hidden">
                      {/* <!-- Current: "", Default: "group-hover:opacity-75" --> */}
                      <img
                        src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        className="h-full w-full object-cover pointer-events-none"
                      />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for IMG_4985.HEIC
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                      IMG_4985.HEIC
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      3.9 MB
                    </p>
                  </li>

                  {/* <!-- More files... --> */}
                </ul>
              </section>
            </div>
          </main>

          {/* <!-- Details sidebar --> */}
          <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto">
            <div className="pb-16 space-y-6">
              <div>
                <div className="block w-full rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt=""
                    className="object-cover h-52 w-full"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      <span className="sr-only">Details for </span>IMG_4985.HEIC
                    </h2>
                    <p className="text-sm font-medium text-gray-500">3.9 MB</p>
                  </div>
                  <button
                    type="button"
                    className="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {/* <!-- Heroicon name: outline/heart --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="sr-only">Favorite</span>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Information</h3>
                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Uploaded by</dt>
                    <dd className="text-gray-900">Marie Culver</dd>
                  </div>

                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Created</dt>
                    <dd className="text-gray-900">June 8, 2020</dd>
                  </div>

                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Last modified</dt>
                    <dd className="text-gray-900">June 8, 2020</dd>
                  </div>

                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Dimensions</dt>
                    <dd className="text-gray-900">4032 x 3024</dd>
                  </div>

                  <div className="py-3 flex justify-between text-sm font-medium">
                    <dt className="text-gray-500">Resolution</dt>
                    <dd className="text-gray-900">72 x 72</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Description</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm text-gray-500 italic">
                    Add a description to this image.
                  </p>
                  <button
                    type="button"
                    className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {/* <!-- Heroicon name: solid/pencil --> */}
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span className="sr-only">Add description</span>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Shared with</h3>
                <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="ml-4 text-sm font-medium text-gray-900">
                        Aimee Douglas
                      </p>
                    </div>
                    <button
                      type="button"
                      className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Remove<span className="sr-only"> Aimee Douglas</span>
                    </button>
                  </li>

                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="ml-4 text-sm font-medium text-gray-900">
                        Andrea McMillan
                      </p>
                    </div>
                    <button
                      type="button"
                      className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Remove<span className="sr-only"> Andrea McMillan</span>
                    </button>
                  </li>

                  <li className="py-2 flex justify-between items-center">
                    <button
                      type="button"
                      className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                        {/* <!-- Heroicon name: solid/plus --> */}
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                        Share
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Download
                </button>
                <button
                  type="button"
                  className="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Projects;
