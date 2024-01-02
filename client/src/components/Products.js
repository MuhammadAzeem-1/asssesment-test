import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/products";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Products = () => {
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <section className="flex justify-center text-center py-8">
      <div>
        <div className="flex justify-center text-center flex-col items-center	">
          <h2 className="text-xl font-semibold leading-9 py-8 uppercase tracking-wider	text-zinc-950">
            View Our Products
          </h2>
          <p className="font-base text-sm my-6 tracking-wider capitalize w-3/4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            ipsum. mollitia!
          </p>
        </div>
        {isLoading ? (
          <p className="flex justify-center">
            <AiOutlineLoading3Quarters size={50} />
          </p>
        ) : (
          <div className="flex justify-around">
            {product.map((data, index) => {
              return <Product data={data} key={index} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
