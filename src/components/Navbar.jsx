export default function Navbar() {
  return (
    <div className="top-0 sticky ease-in-out transition-all duration-1000 z-40 lg:flex sm:h-14 shrink-0 items-center bg-white px-4 gap-x-6 sm:px-6 lg:px-8 hidden">
      <a className="ml-0 mr-auto">
        <img
          src="/image/Fit-Forge.png"
          alt="FitForge"
          className="h-10 w-auto object-contain lg:h-14 lg:w-auto"
        />
      </a>

      <div className="lg:flex lg:justify-end items-center gap-x-6 mr-0 ml-auto">
        <div className="relative inline-block">
          <div>
            <button
              className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm lg:ring-inset lg:ring-mw-blue-500 hover:bg-gray-50 border  border-mw-blue-500"
              id="headlessui-menu-button-:rl:"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg"
                style={{
                  display: "inline-block",
                  width: "22px",
                  height: "1em",
                  verticalAlign: "middle",
                }}
              />
              <span className="hidden lg:block text-mw-blue">English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="mw-blue"
                aria-hidden="true"
                data-slot="icon"
                class="-mr-1 rtl:-ml-1 h-5 w-5 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-80">
          <label
            htmlFor="desktopSearch"
            className="block text-sm font-medium leading-6 text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="h-5 w-5 text-mw-blue stroke-[3px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="desktopSearch"
              id="desktopSearch"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-mw-blue-500 placeholder:text-mw-blue focus:ring-2 focus:ring-inset focus:ring-mw-blue-600 sm:text-sm sm:leading-6"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="relative">
          <button
            className="-m-1.5 flex items-center p-1.5"
            id="headlessui-menu-button-:rm:"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open user menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="h-8 w-auto text-mw-blue stroke-2"
            >
              <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
