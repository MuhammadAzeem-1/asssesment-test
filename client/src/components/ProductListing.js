import React, { useEffect } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../actions/UserData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <section className="bg-white w-4/5 flex justify-center flex-col align-center drop-shadow-md m-9 mx-auto">
      <div className="flex justify-center flex-col  ">
        <div className="w-full px-20 py-8">
          <h2 className="text-xl font-semibold tracking-wider	">
            List of Products
          </h2>
        </div>
        {isLoading ? (
          <p className="flex justify-center">
            <AiOutlineLoading3Quarters size={50} />
          </p>
        ) : (
          <ProductList data={users} />
        )}
      </div>
    </section>
  );
};

export default ProductListing;
