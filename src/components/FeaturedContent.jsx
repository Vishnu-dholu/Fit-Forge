export default function FeaturedContent() {
  return (
    <div className="bg-white lg:-mx-7 -mx-4 px-4 rounded-md shadow">
      <header className="shrink-0 bg-white mt-5 mb-2 border-b border-slate-500">
        <h2 className="ltr:ml-3 text-2xl font-bold text-mw-blue-700 sm:text-4xl py-3">
          Featured Content
        </h2>
      </header>

      <ul className="hidden lg:grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 pt-3 rounded-b-md">
        <li className="overflow-hidden rounded-md shadow lg:hover:scale-100 lg:scale-95 ease-in-out duration-300 lg:my-10">
          <button type="button">
            <a href="http://www.musclewiki.com/articles/how-to-create-the-perfect-routine">
              <img
                src="https://media.musclewiki.com/media/uploads/programming-for-beginnners_xL2gwki.jpg"
                alt="How to Create The Perfect Routine"
                className="relative overflow-visible object-fit"
              />
            </a>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-200">
                <dd className="mt-1 font-medium text-2xl text-justify text-mw-blue sm:col-span-3 sm:mt-0 truncate">
                  How To Create The Perfect Routine
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-50">
                <dd className="mt-1 text-xl font-medium text-slate-950 sm:col-span-3 sm:mt-0 lg:h-20 h-28">
                  Program design basics for beginners (free routine at the end).
                </dd>
              </div>
            </dl>
          </button>
        </li>

        <li className="overflow-hidden rounded-md shadow lg:hover:scale-100 lg:scale-95 ease-in-out duration-300 lg:my-10">
          <button type="button">
            <a href="https://youtu.be/zgjVmJun4d4">
              <img
                src="https://media.musclewiki.com/media/uploads/do-your-first-pullup_HfZWlPh.jpg"
                alt="FINALLY Achieve Your First Pull-up"
                className="relative overflow-visible object-fit"
              />
            </a>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-200">
                <dd className="mt-1 font-medium text-2xl text-justify text-mw-blue sm:col-span-3 sm:mt-0 truncate">
                  FINALLY Achieve Your First Pull-up
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-50">
                <dd className="mt-1 text-xl font-medium text-slate-950 sm:col-span-3 sm:mt-0 lg:h-20 h-28">
                  One of the most challenging exercises is the pull-up. Follow
                  this step guide to achieve your first pullup.
                </dd>
              </div>
            </dl>
          </button>
        </li>

        <li className="overflow-hidden rounded-md shadow lg:hover:scale-100 lg:scale-95 ease-in-out duration-300 lg:my-10">
          <button type="button">
            <a href="https://youtu.be/-gzO-JcPzHg">
              <img
                src="https://media.musclewiki.com/media/uploads/how-much-protein.jpeg"
                alt="How Much Protein Do You Really Need?"
                className="relative overflow-visible object-fit"
              />
            </a>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-200">
                <dd className="mt-1 font-medium text-2xl text-justify text-mw-blue sm:col-span-3 sm:mt-0 truncate">
                  How Much Protein Do You Really Need?
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-50">
                <dd className="mt-1 text-xl font-medium text-slate-950 sm:col-span-3 sm:mt-0 lg:h-20 h-28">
                  Ultimate Guide for Muscle Gain, Weight Loss & Health
                </dd>
              </div>
            </dl>
          </button>
        </li>
      </ul>
    </div>
  );
}
