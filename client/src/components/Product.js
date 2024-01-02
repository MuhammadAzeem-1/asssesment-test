import React, { useState } from "react";
import { IoWalletSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userData } from "../actions/UserData";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    star: "",
    productName: "",
  });

  // handle starred
  const handleStarClick = (rating) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      productName: data.name,
      star: rating,
    }));

    setIsModalOpen(true);
  };

  // handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userData(formData));

    setFormData({
      email: "",
      name: "",
      star: "",
    });

    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // price format
  function formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(price);
  }

  return (
    <>
      <div className="w-80 max-w-[570px] bg-customCream py-8 px-5 text-center border-dashed border-2 border-transparent hover:border-customDark  ">
        <h3 className="text-customBlue pb-2  font-bold sm:text-base ">
          {data.name}
        </h3>

        <p className="text-customLightBlue mb-10 text-[14px] pt-4 leading-relaxed">
          {data.description}
        </p>
        <div className="border-b-2 border-gray-300 mb-2"></div>

        <div className="flex justify-between text-center">
          <div className="flex justify-start px-1 items-center">
            <IoWalletSharp />

            <span className="text-[15px] font-light pl-2">
              {formatPrice(data.price)}
            </span>
          </div>
          <div className="flex">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => handleStarClick(ratingValue)}
                    className="hidden"
                  />

                  <FaStar
                    className="cursor-pointer"
                    color={
                      ratingValue <= (hover || formData.star)
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                    size={20}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center pt-8">
          <button className="text-customDark  block w-24  border border-gray-700 p-3 text-center text-xs font-medium transition  hover:bg-customDark hover:text-white">
            Show Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl bg-gray-800">
              {/*content*/}
              <div className=" flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Enter Your Email & Name
                </h3>

                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={closeModal}
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>

                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Product;
