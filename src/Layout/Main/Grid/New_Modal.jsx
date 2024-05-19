import React, { useState, useEffect } from "react";

const New_Modal = ({ serviceInfo, onClose }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (serviceInfo) {
      setShowContent(true);
    }
  }, [serviceInfo]);

  const handleClose = () => {
    setShowContent(false);
    onClose();
  };

  if (!showContent) return null;

  return (
    <div className="fixed class inset-0 flex items-center justify-center z-50">
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full md:max-w-2xl max-h-85"
      >
        <div className="relative p-4 w-full max-w-2xl">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                {serviceInfo.title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
                onClick={handleClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="flex justify-center items-center w-full h-64">
              <img
                src={serviceInfo.image}
                alt="Service Image"
                className="object-cover w-1/3 h-auto rounded-lg"
              />
            </div>
            <div className="p-4 space-y-4">
              <p className="text-base leading-relaxed text-gray-500">
                {serviceInfo.description}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-lg font-semibold text-gray-900 ml-4">
                $
              </span>
              <span className="text-lg font-semibold text-gray-900">
                {serviceInfo.price}
              </span>
            </div>

            <div className="flex items-center p-4 border-t border-gray-200 rounded-b">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default New_Modal;
