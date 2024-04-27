export default function WorkoutOptions() {
  return (
    <div className="lg:col-span-3 hidden lg:inline-block">
      <div className="min-w-full">
        <div className="hidden lg:block">
          <div className="shadow rounded-lg border border-gray-50 sticky top-20 mt-auto overflow-visible my-auto mx-auto mb-8 overflow-y-auto">
            <section aria-labelledby="exercise-filtering" className="w-full">
              <form className="block">
                <div className="border-b bg-blue-400 border-gray-200 py-5 rounded-t-md xl:px-2 px-0.5">
                  <div className="flex items-center justify-between mx-4 2xl:gap-x-14">
                    <div className="flex items-center lg:scale-90 xl:scale-100">
                      <span
                        className="mr-1 xl:mr-2 text-xs xl:text-sm 2xl:text-base rtl:ml-1 rtl:xl:ml-2"
                        id="headlessui-label-:rn:"
                        htmlFor="headlessui-switch-:ro:"
                      >
                        <span className="font-medium text-white">Male</span>
                      </span>

                      <button
                        className="bg-mw-blue-300 xl:focus:ring-mw-blue-600 text-right disabled:bg-mw-blue-400 disabled:transition-none relative inline-flex 
                         h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none 
                         focus:ring-2 focus:ring-offset-2"
                        id="headlessui-switch-:ro:"
                        role="switch"
                        type="button"
                        tabIndex="0"
                        aria-checked="true"
                        aria-labelledby="headlessui-label-:rh: headlessui-label-:rj:"
                      >
                        <span className="sr-only">Gender Selector</span>
                        <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                          <span
                            className="opacity-0 duration-100 ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                            aria-hidden="true"
                          >
                            <svg
                              stroke="blue"
                              fill="blue"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              className="xl:h-4 xl:w-4 h-3.5 w-3.5 text-mw-red-800"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-58v44h58v58h44v-58h58v-44h-58v-31.39c85.6-10.84 152-84.12 152-172.61zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130z"></path>
                            </svg>
                          </span>

                          <span
                            className="opacity-100 duration-200 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                            aria-hidden="true"
                          >
                            <svg
                              stroke="white"
                              fill="white"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              className="xl:h-4 xl:w-4 h-3.5 w-3.5 text-mw-blue-600"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M330 48v44h58.89l-60.39 60.39c-68.2-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 00246 0c62.57-62.58 67.43-161.34 14.57-229.54L420 123.11V182h44V48zm-16.08 333.92a130.13 130.13 0 01-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0 50.69 133.16 0 183.84z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>

                      <span
                        className="ml-1 xl:ml-2 rtl:mr-1 rtl:xl:mr-2 text-xs xl:text-sm 2xl:text-base"
                        htmlFor="headlessui-label-:rj:"
                      >
                        <span className="font-medium text-white">Female</span>
                      </span>
                    </div>

                    <div className="flex items-center text-xs 2xl:text-base lg:scale-90 xl:scale-100">
                      <button
                        className="bg-mw-blue-300 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-mw-blue-600 focus:ring-offset-2"
                        id="headlessui-switch-:r1g:"
                        role="switch"
                        type="button"
                        tabIndex="0"
                        aria-checked="false"
                        data-headlessui-state
                        aria-labelledby="headlessui-label-:r1h:"
                      >
                        <span
                          aria-hidden="true"
                          className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        ></span>
                      </button>

                      <span
                        className="ml-1 xl:ml-0.5 2xl:ml-2 text-xs xl:text-sm 2xl:text-base rtl:mr-1 rtl:xl:mr-0.5 rtl:2xl:mr-2"
                        id="headlessui-label-:r1h:"
                        htmlFor="headlessui-switch-:r1g:"
                      >
                        <span className="font-medium text-white">Advanced</span>
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="sr-only">Categories</h3>

                <div
                  className="border-t border-gray-200 py-6 px-2"
                  data-headlessui-state="open"
                >
                  <h3 className="-my-3 flow-root">
                    <button
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      id="headlessui-disclosure-button-:rm:"
                      type="button"
                      aria-expanded="true"
                      data-headlessui-state="open"
                      aria-controls="headlessui-disclosure-panel-:rn:"
                    >
                      <span className="font-medium text-gray-900 px-2 xl:text-base">
                        Equipment
                      </span>
                      <span className="ml-6 flex items-center">
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    className="pt-4 xl:pt-4"
                    id="headlessui-disclosure-panel-:rn:"
                  >
                    <div className="space-y-3.5 xl:space-y-3.5 grid lg:grid-cols-2 grid-cols-1 gap-1">
                      <div className="flex items-center my-auto xl:px-2 2xl:px-6">
                        <input
                          id="featured"
                          type="checkbox"
                          name="featured"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                          checked
                        />

                        <label
                          htmlFor="featured"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 66 32"
                            fill="none"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-1 text-blue-400"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.807"
                              d="M9.84 25.648a8.52 8.52 0 0 1-1.212-4.152 11.276 11.276 0 0 1 2.642-7.615l-.501-.957a7.542 7.542 0 0 1 .116-7.24 7.404 7.404 0 0 1 6.037-3.776c.124-.005.24-.008.35-.008h5.29c.11 0 .227.003.351.008a7.404 7.404 0 0 1 6.037 3.775 7.543 7.543 0 0 1 .116 7.241l-.121.233m.79 12.9a7.598 7.598 0 0 1-.428.578m-11.858 3.321h4.938m-2.2-20.109a11.23 11.23 0 0 0-6.657 1.983l-.148-.281a4.597 4.597 0 0 1 .071-4.408c.768-1.358 2.093-2.19 3.636-2.277.065-.003.124-.006.181-.006h5.292c.057 0 .116 0 .181.006 1.544.088 2.869.919 3.636 2.277a4.59 4.59 0 0 1 .07 4.408l-.152.292a11.203 11.203 0 0 0-6.113-1.994h.003Z"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.807"
                              d="M30.304 26.635c-1.83-1.668-3.024-4.425-3.024-7.547 0-5.094 3.18-9.224 7.101-9.224a5.53 5.53 0 0 1 1.716.272c3.092.996 5.386 4.626 5.386 8.952 0 3.122-1.195 5.88-3.024 7.547"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.807"
                              d="M36.094 10.136h.003a5.571 5.571 0 0 1 1.707-.27c2.401 0 4.522 1.547 5.808 3.912.51.936.886 2.002 1.096 3.154.13.692.198 1.413.198 2.156 0 .743-.068 1.466-.198 2.158a10.558 10.558 0 0 1-1.096 3.151 8.511 8.511 0 0 1-1.725 2.238"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.807"
                              d="M54.425 25.62c1.292-1.668 2.09-3.98 2.09-6.532 0-4.329-2.296-7.959-5.391-8.952a5.59 5.59 0 0 0-1.71-.27c-2.399 0-4.522 1.547-5.802 3.912M45.33 26.635a8.542 8.542 0 0 1-1.718-2.238"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.807"
                              d="M51.124 10.136a5.59 5.59 0 0 1 1.71-.27c3.925 0 7.102 4.128 7.102 9.222 0 2.552-.799 4.864-2.087 6.532M34.381 21.243c.916 0 1.66-.965 1.66-2.155s-.744-2.156-1.66-2.156c-.916 0-1.66.965-1.66 2.156 0 1.19.744 2.155 1.66 2.155Z"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="1.807"
                              d="M44.708 21.246h3.485c1.19 0 2.155-.964 2.155-2.158a2.153 2.153 0 0 0-2.155-2.156h-3.485M19.122 29.956A2.643 2.643 0 0 1 17.007 31H3.673a2.646 2.646 0 0 1-1.889-.785 2.675 2.675 0 0 1 1.889-4.566h13.334a2.646 2.646 0 0 1 2.067.986h-3.022a1.66 1.66 0 0 0-1.659 1.662 1.655 1.655 0 0 0 1.656 1.66h3.073ZM46.112 26.635H19.076M46.112 29.956h-26.99M61.541 25.62h-13.34a2.672 2.672 0 0 0-2.67 2.674v.003a2.672 2.672 0 0 0 2.67 2.675h13.34a2.672 2.672 0 0 0 2.67-2.675v-.003a2.672 2.672 0 0 0-2.67-2.674Z"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="1.092"
                              d="m63.49 30.126-.06.06a2.68 2.68 0 0 0 0-3.784 2.67 2.67 0 0 0-3.777 0l.06-.06a2.68 2.68 0 0 0 0 3.784 2.67 2.67 0 0 0 3.776 0Z"
                            ></path>
                          </svg>
                          Featured
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-0"
                          type="checkbox"
                          name="equipments[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />

                        <label
                          htmlFor="filter-equipments-0"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            viewBox="0 0 67 40"
                            fill="none"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <g
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              clipPath="url(#a)"
                            >
                              <path
                                stroke-width="1.757"
                                d="M25.435 17.064c.23-1.459.36-3.086.36-4.8 0-6.29-1.73-11.382-3.862-11.382M13.548 13.477c.207 5.715 1.844 10.171 3.838 10.171 2.131 0 3.86-5.099 3.86-11.383 0-6.284-1.729-11.386-3.86-11.386-1.994 0-3.635 4.453-3.838 10.167M62.33.879c2.132 0 3.86 5.096 3.86 11.383 0 6.287-1.728 11.38-3.86 11.38M53.942 13.477c.206 5.715 1.843 10.168 3.838 10.168 2.131 0 3.86-5.096 3.86-11.38C61.64 5.98 59.91.882 57.78.882c-1.995 0-3.635 4.453-3.838 10.167M17.386.879h4.547M17.386 23.645h4.547M57.78.879h4.55M57.78 23.645h4.55"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M25.795 11.046h30.773c.67 0 1.215.546 1.215 1.216 0 .67-.545 1.215-1.215 1.215H25.795v-2.43ZM11.56 13.477h4.61a1.216 1.216 0 1 0 0-2.43h-4.61a1.216 1.216 0 1 0 0 2.43Z"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M11.56 13.477h.118a1.216 1.216 0 1 0 0-2.43h-.118a1.216 1.216 0 0 0 0 2.43ZM66.165 11.046h2.328c.337 0 .64.137.861.358.222.221.358.524.358.86 0 .67-.546 1.216-1.216 1.216h-2.328M55.81 30.7c0 1.27-3.032 2.297-6.776 2.297-3.743 0-6.772-1.028-6.772-2.298"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M11.56 13.477h.118a1.216 1.216 0 1 0 0-2.43h-.118a1.216 1.216 0 0 0 0 2.43ZM66.165 11.046h2.328c.337 0 .64.137.861.358.222.221.358.524.358.86 0 .67-.546 1.216-1.216 1.216h-2.328M55.81 30.7c0 1.27-3.032 2.297-6.776 2.297-3.743 0-6.772-1.028-6.772-2.298"
                              ></path>

                              <path
                                stroke-width="1.054"
                                d="M48.868 28.086c-.791.027-1.407.255-1.407.53 0 .295.706.534 1.577.534.87 0 1.576-.24 1.576-.534 0-.275-.615-.503-1.407-.53"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M55.81 28.61v2.09M42.262 28.61v2.09M44.7 24.394c0 2.134-5.096 3.862-11.384 3.862-6.287 0-11.38-1.728-11.38-3.862M32.1 16.009c-5.713.206-10.17 1.843-10.17 3.837 0 2.132 5.1 3.86 11.383 3.86 6.285 0 11.384-1.728 11.384-3.86 0-1.994-4.454-3.634-10.168-3.837"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M33.035 18.961c-1.328.049-2.365.428-2.365.892 0 .494 1.185.897 2.647.897 1.46 0 2.646-.403 2.646-.898 0-.463-1.034-.845-2.364-.89M44.7 19.846v4.548M21.933 19.846v4.548M21.936 29.138c0 2.131 5.096 3.862 11.38 3.862 3.814 0 7.188-.637 9.252-1.616M44.7 26.843v-2.252M21.933 24.59v4.548"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h70.591v39H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          Barbell
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-1"
                          type="checkbox"
                          name="equipments[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />

                        <label
                          htmlFor="filter-equipments-1"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            viewBox="0 0 62 61"
                            fill="none"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M52.063 33.672c5.176-5.176 3.933-14.812-2.777-21.522-6.71-6.71-16.346-7.954-21.523-2.777-5.177 5.176-3.933 14.812 2.777 21.523 6.71 6.71 16.346 7.953 21.523 2.776Z"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M25.858 11.983a10.49 10.49 0 0 0-2.613 1.903c-5.18 5.18-3.93 14.81 2.78 21.522 6.711 6.71 16.341 7.953 21.518 2.776a10.422 10.422 0 0 0 1.904-2.613"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20.337 28.597c-4.296-1.278-8.618-.596-11.448 2.234-4.623 4.623-3.512 13.234 2.486 19.23 5.997 5.998 14.604 7.106 19.227 2.483 2.827-2.826 3.512-7.151 2.238-11.444"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7.188 33.167a9.231 9.231 0 0 0-2.333 1.701C.228 39.495 1.343 48.102 7.341 54.099c5.997 5.998 14.6 7.109 19.227 2.482a9.453 9.453 0 0 0 1.701-2.333M42.75 24.36c1.21-1.21.92-3.46-.648-5.027-1.566-1.567-3.817-1.857-5.026-.647-1.21 1.209-.92 3.46.648 5.026 1.567 1.567 3.817 1.857 5.026.648Z"
                            ></path>

                            <path
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="2"
                              d="M23.444 32.3 18.846 36.9a4.02 4.02 0 1 0 5.685 5.685l4.598-4.598"
                            ></path>
                          </svg>
                          Dumbbells
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-2"
                          type="checkbox"
                          name="equipment[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />
                        <label
                          htmlFor="filter-equipment-2"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            id="Layer-2"
                            data-name="Layer 2"
                            viewBox="0 0 63.14 155"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <defs>
                              <style>
                                {`
                                  .bodyw__cls-1 {
                                    fill: none;
                                    stroke: currentcolor;
                                    stroke-linecap: round;
                                    stroke-linejoin: round;
                                    stroke-width: 6;
                                  }
                              `}
                              </style>
                            </defs>
                            <g id="Layer_1-2" data-name="Layer 1">
                              <path
                                d="M31.57 2.5c5.23 0 7.63 4.24 7.63 9.47 0 2.31 5.13 12.36-7.63 12.36M31.57 2.5c-5.23 0-7.63 4.24-7.63 9.47 0 2.31-5.13 12.36 7.63 12.36M60.64 79.73c0 27.25-5.6-30.07-29.07-30.07S2.5 106.98 2.5 79.73s13.01-49.34 29.07-49.34 29.07 22.09 29.07 49.34Z"
                                className="bodyw__cls-1"
                              ></path>

                              <path
                                d="M52.22 140.27c0 45.35-20.65-50.05-20.65-50.05s-20.65 95.4-20.65 50.05 9.24-82.11 20.65-82.11 20.65 36.76 20.65 82.11Z"
                                className="bodyw__cls-1"
                              ></path>
                            </g>
                          </svg>
                          Bodyweight
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-3"
                          type="checkbox"
                          name="equipment[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />

                        <label
                          htmlFor="filter-equipment-3"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            viewBox="0 0 67 40"
                            fill="none"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <g
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              clipPath="url(#a)"
                            >
                              <path
                                stroke-width="1.757"
                                d="M25.435 17.064c.23-1.459.36-3.086.36-4.8 0-6.29-1.73-11.382-3.862-11.382M13.548 13.477c.207 5.715 1.844 10.171 3.838 10.171 2.131 0 3.86-5.099 3.86-11.383 0-6.284-1.729-11.386-3.86-11.386-1.994 0-3.635 4.453-3.838 10.167M62.33.879c2.132 0 3.86 5.096 3.86 11.383 0 6.287-1.728 11.38-3.86 11.38M53.942 13.477c.206 5.715 1.843 10.168 3.838 10.168 2.131 0 3.86-5.096 3.86-11.38C61.64 5.98 59.91.882 57.78.882c-1.995 0-3.635 4.453-3.838 10.167M17.386.879h4.547M17.386 23.645h4.547M57.78.879h4.55M57.78 23.645h4.55"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M25.795 11.046h30.773c.67 0 1.215.546 1.215 1.216 0 .67-.545 1.215-1.215 1.215H25.795v-2.43ZM11.56 13.477h4.61a1.216 1.216 0 1 0 0-2.43h-4.61a1.216 1.216 0 1 0 0 2.43Z"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M11.56 13.477h.118a1.216 1.216 0 1 0 0-2.43h-.118a1.216 1.216 0 0 0 0 2.43ZM66.165 11.046h2.328c.337 0 .64.137.861.358.222.221.358.524.358.86 0 .67-.546 1.216-1.216 1.216h-2.328M55.81 30.7c0 1.27-3.032 2.297-6.776 2.297-3.743 0-6.772-1.028-6.772-2.298"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M48.313 26.328c-3.401.121-6.054 1.097-6.054 2.285 0 1.268 3.035 2.298 6.776 2.298 3.74 0 6.775-1.027 6.775-2.298 0-1.188-2.65-2.161-6.05-2.285"
                              ></path>

                              <path
                                stroke-width="1.054"
                                d="M48.868 28.086c-.791.027-1.407.255-1.407.53 0 .295.706.534 1.577.534.87 0 1.576-.24 1.576-.534 0-.275-.615-.503-1.407-.53"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M55.81 28.61v2.09M42.262 28.61v2.09M44.7 24.394c0 2.134-5.096 3.862-11.384 3.862-6.287 0-11.38-1.728-11.38-3.862M32.1 16.009c-5.713.206-10.17 1.843-10.17 3.837 0 2.132 5.1 3.86 11.383 3.86 6.285 0 11.384-1.728 11.384-3.86 0-1.994-4.454-3.634-10.168-3.837"
                              ></path>

                              <path
                                stroke-width="1.757"
                                d="M33.035 18.961c-1.328.049-2.365.428-2.365.892 0 .494 1.185.897 2.647.897 1.46 0 2.646-.403 2.646-.898 0-.463-1.034-.845-2.364-.89M44.7 19.846v4.548M21.933 19.846v4.548M21.936 29.138c0 2.131 5.096 3.862 11.38 3.862 3.814 0 7.188-.637 9.252-1.616M44.7 26.843v-2.252M21.933 24.59v4.548"
                              ></path>
                            </g>

                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h70.591v39H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          Machine
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-4"
                          type="checkbox"
                          name="equipment[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />

                        <label
                          htmlFor="filter-equipment-4"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            viewBox="0 0 38 37"
                            fill="none"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <path
                              fill="currentColor"
                              d="M19 0C8.513 0 0 8.29 0 18.5S8.513 37 19 37s19-8.29 19-18.5S29.487 0 19 0Zm0 1.43c9.688 0 17.532 7.637 17.532 17.07S28.688 35.57 19 35.57c-9.688 0-17.532-7.637-17.532-17.07S9.312 1.43 19 1.43Zm-2.137 2.459c-2.535.696-5.226 1.994-7.42 3.884.62.342 1.231.723 1.827 1.144 2.046-1.866 4.697-3.364 8.015-4.07-.905-.533-1.794-.864-2.422-.958Zm4.02 2.132c-3.604.498-6.368 1.935-8.455 3.8.84.723 1.614 1.541 2.29 2.446 1.73-1.429 4.282-2.533 8.074-3.136-.253-1.223-1.003-2.279-1.908-3.11Zm-12.54 2.8C6.645 10.6 5.4 12.815 4.994 15.443c.172.977.477 1.803.873 2.51a18.987 18.987 0 0 1 3.306-6.75c.326-.428.677-.841 1.052-1.246A14.968 14.968 0 0 0 8.342 8.82Zm3.04 2.025c-.374.389-.717.794-1.035 1.215-1.884 2.453-2.927 5.232-3.31 7.424 1.198 1.167 2.69 1.746 3.954 1.969.204-2.994.669-5.892 2.675-8.17a13.97 13.97 0 0 0-2.283-2.438Zm22.948 9.044c-2.659 5.764-9.06 12.18-17.859 12.386.66.722 4.061 1.437 6.238.714 7.617-2.525 10.528-9.472 11.62-13.1Z"
                            ></path>
                            <circle
                              cx="20.5"
                              cy="15.5"
                              r="10.5"
                              fill="#fff"
                            ></circle>
                            <ellipse
                              cx="15.5"
                              cy="14"
                              fill="#fff"
                              rx="12.5"
                              ry="11"
                            ></ellipse>
                          </svg>
                          Medicine Ball
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-5"
                          type="checkbox"
                          name="equipment[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />

                        <label
                          htmlFor="filter-equipment-5"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            viewBox="0 0 92.09 113"
                            fill="none"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <path
                              d="m79.35 48.69 1.97-3.75c4.62-8.79 4.45-19.21-.45-27.87C76.04 8.53 67.33 3.09 57.59 2.54c-.47-.03-.93-.04-1.35-.04h-20.4c-.42 0-.87.01-1.35.04-9.74.56-18.45 5.99-23.28 14.53-4.9 8.66-5.07 19.08-.45 27.87l1.93 3.68a43.344 43.344 0 0 0-10.2 28.01c0 .44 0 .87.02 1.3.53 18.22 15.78 32.57 34.01 32.57h19.04c18.2 0 33.44-14.31 34-32.5.01-.43.02-.87.02-1.3.02-10.61-3.85-20.4-10.24-28.01Zm-32.27-15.6a43.373 43.373 0 0 0-25.67 7.63l-.57-1.08a17.622 17.622 0 0 1 .28-16.96c2.96-5.23 8.07-8.43 14.02-8.77.25-.01.49-.02.7-.02h20.4c.22 0 .45 0 .7.02 5.95.34 11.06 3.54 14.02 8.77 2.98 5.27 3.09 11.62.28 16.96l-.59 1.12c-6.74-4.66-14.84-7.47-23.57-7.67Z"
                              data-name="Layer 1"
                              style={{
                                fill: "none",
                                stroke: "currentColor",
                                strokeDasharray: "0, 0, 120, 10",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 5,
                              }}
                            ></path>
                          </svg>
                          Kettlebells
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-6"
                          type="checkbox"
                          name="equipment[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />
                        <label
                          htmlFor="filter-equipment-6"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            id="Layer-2"
                            data-name="Layer 2"
                            viewBox="0 0 155 140.96"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <defs>
                              <style>
                                {`
                                  .cables__cls-1 {
                                    fill: none;
                                    stroke: currentcolor;
                                    stroke-linecap: round;
                                    stroke-linejoin: round;
                                    stroke-width: 6;
                                  }
                              `}
                              </style>
                            </defs>

                            <g id="Layer_1-2" data-name="Layer 1">
                              <circle
                                cx="77.5"
                                cy="31.51"
                                r="7.48"
                                className="cables__cls-1"
                              ></circle>
                              <path
                                d="M77.5 27.98V2.5M77.5 55.28l-4.45 4.45-3.72 3.73-36.31 36.29-.05.06 8.17 8.17.06-.05 31.85-31.86 4.45-4.44"
                                className="cables__cls-1"
                              ></path>
                              <path
                                d="m42.94 109.671-28.78 28.78L2.5 126.79l28.78-28.78z"
                                className="cables__cls-1"
                              ></path>
                              <path
                                d="M28.52 100.78a37.17 37.17 0 0 1 6.27 17.05M18.08 111.22a37.17 37.17 0 0 1 6.27 17.05M7.64 121.65a37.22 37.22 0 0 1 6.21 16.49M77.5 38.99v16.29l4.45 4.44 3.73 3.73 36.3 36.3.05.06-8.17 8.17-.06-.05-31.85-31.85-4.45-4.45"
                                className="cables__cls-1"
                              ></path>
                              <path
                                d="m123.722 98.011 28.779 28.78-11.66 11.66-28.78-28.78z"
                                className="cables__cls-1"
                              ></path>
                              <path
                                d="M126.48 100.78a37.17 37.17 0 0 0-6.27 17.05M136.92 111.22a37.17 37.17 0 0 0-6.27 17.05M147.36 121.65a37.22 37.22 0 0 0-6.21 16.49M73.05 76.07V59.73M81.95 76.08V59.72"
                                className="cables__cls-1"
                              ></path>
                            </g>
                          </svg>
                          Cables
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-8"
                          type="checkbox"
                          name="equipment[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />
                        <label
                          htmlFor="filter-equipment-8"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            id="Layer-2"
                            data-name="Layer 2"
                            viewBox="0 0 130 73.39"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <defs>
                              <style>
                                {`
                                  .bands__cls-1 {
                                    fill: none;
                                    stroke: currentcolor;
                                    stroke-linecap: round;
                                    stroke-linejoin: round;
                                    stroke-width: 6;
                                  }
                              `}
                              </style>
                            </defs>

                            <g id="prefix__Layer_1-2" data-name="Layer 1">
                              <path
                                d="M46.78 40c32.23-12.1 71.79-29.08 79.41-19.46.86 1.08 1.31 2.48 1.31 4.26 0 25.46-20.63 46.09-46.08 46.09-19.05 0-35.39-11.55-42.42-28.03M35.51 28.89c.42 4.92 1.63 9.62 3.49 13.98-12.35 4.44-23 7.68-29.41 7.68-4.52 0-6.62-1.62-7.02-4.13h0c-.11-.62-.1-1.28 0-2 .35-2.67 2-5.96 4.39-9.31 8.97-12.6 28.36-25.97 28.36-10.31 0 1.38.07 2.74.18 4.08"
                                class="bands__cls-1"
                              ></path>

                              <path
                                d="M6.97 35.11c.76.15 1.64.23 2.63.23 5.79 0 15.06-2.65 25.92-6.45M2.58 31.2C.72 19.56 35.33-11.33 35.33 9.59c0 6.41 1.3 12.51 3.67 18.06M46.78 40c-3.2-3.65-5.84-7.81-7.78-12.34 36.73-13.23 88.5-37.11 88.5-18.07 0 3.77-.46 7.44-1.31 10.95-4.91 20.17-23.08 35.14-44.77 35.14-13.81 0-26.2-6.07-34.64-15.69M127.5 24.81V9.6M2.58 30.22V46.42"
                                class="bands__cls-1"
                              ></path>
                            </g>
                          </svg>
                          Band
                        </label>
                      </div>

                      <div className="flex items-center xl:px-2 2xl:px-6 self-center pb-1">
                        <input
                          id="filter-equipments-9"
                          type="checkbox"
                          name="equipment[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />
                        <label
                          htmlFor="filter-equipment-9"
                          className="xl:ml-2.5 text-md xl:text-md text-gray-600 tracking-tight leading-0 disabled:bg-slate-100 flex justify-evenly items-center"
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            id="Layer-2"
                            data-name="Layer 2"
                            viewBox="0 0 114.9 155"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <defs>
                              <style>
                                {`
                                  .plate__cls-1 {
                                    fill: none;
                                    stroke: currentcolor;
                                    stroke-linecap: round;
                                    stroke-linejoin: round;
                                    stroke-width: 6;
                                  }
                              `}
                              </style>
                            </defs>

                            <g id="Layer_1-2" data-name="Layer 1">
                              <path
                                d="M47.97 2.5h18.56c25.11 0 45.47 33.58 45.47 75s-20.36 75-45.47 75H47.97"
                                className="plate__cls-1"
                              ></path>

                              <ellipse
                                cx="47.97"
                                cy="77.5"
                                class="plate__cls-1"
                                rx="45.47"
                                ry="75"
                              ></ellipse>

                              <ellipse
                                cx="47.97"
                                cy="77.5"
                                class="plate__cls-1"
                                rx="35.64"
                                ry="62.34"
                              ></ellipse>

                              <ellipse
                                cx="47.97"
                                cy="77.5"
                                class="plate__cls-1"
                                rx="6.95"
                                ry="11.47"
                              ></ellipse>
                            </g>
                          </svg>
                          Plate
                        </label>
                      </div>

                      {/* <div className="flex items-center my-auto xl:px-2 2xl:px-6">
                        <input
                          id="filter-equipments-10"
                          type="checkbox"
                          name="equipment[]"
                          className="h-4 w-4 rounded border-gray-300 text-mw-blue-600 focus:ring-mw-blue-500 disabled:bg-slate-100"
                        />
                        <label
                          htmlFor="filter-equipment-10"
                          className="xl:ml-2.5 text-xs xl:text-sm text-gray-600 tracking-tight leading-0 dark:text-gray-300 disabled:bg-slate-100 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 166 166"
                            className="xl:h-6 xl:w-9 h-5 w-8 xl:mr-2 sm:mr-2 text-blue-400"
                          >
                            <g
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="7"
                              clip-path="url(#a)"
                            >
                              <path
                                stroke-linejoin="round"
                                d="M82.905 147.183 18.651 87.755C-16.363 52.586 34.718-15.521 82.905 39.567c48.187-54.922 99.742 13.174 64.242 48.188l-64.242 59.428Z"
                              ></path>
                              <path
                                stroke-linejoin="round"
                                d="M41.678 80.071h18.141l12.237-23.335L90.588 99.72l15.925-19.648h17.785"
                              ></path>
                              <path d="M114 80h55M-13 80h55"></path>
                            </g>

                            <defs>
                              <clipPath id="a">
                                <path
                                  fill="currentColor"
                                  d="M0 0h166v166H0z"
                                ></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span>Cardio</span>
                        </label>
                      </div> */}
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
