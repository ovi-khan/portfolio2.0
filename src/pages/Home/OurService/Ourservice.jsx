import React, { useEffect, useState } from "react";
import "./OurService.css";
import { Link } from "react-router-dom";

const Ourservice = () => {
  const [services, setServices] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);
  const maxCardsToShow = 4;
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="py-10">
      <div className="text-center space-y-3 lg:px-96 px-10 mb-20">
        <h3 className="text-start text-transparent text-3xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block font-secondary">
          Our Service
        </h3>
        <h2 className="text-3xl font-bold text-black">Service We Provide</h2>
        <p>
          It has Survived Only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release{" "}
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-20 lg:px-28 lg:py-18 mx-10 mt-5">
        {services
          .slice(0, showAllCards ? services.length : maxCardsToShow)
          .map((item) => (
            <div
              key={item.id}
              className="relative group  text-black   border-gradient-to-r from-emerald-400 to-indigo-400 rounded-lg mt-14"
            >
              <div className="">
                <div className="card h-56 bg-violet-400 bg-opacity-40 shadow-xl p-4 group-hover:bg-opacity-50 group-hover:bg-white hover:bg-gradient-to-r from-emerald-400 to-indigo-400">
                  <div className="mx-auto -mt-[59px] bg-black p-6 rounded-effect overflow-hidden transform group-hover:bg-gradient-to-r from-emerald-500 to-indigo-500 transition-transform">
                    <img
                      className="w-10 "
                      src={item.image}
                      alt="Service Image"
                    />
                  </div>
                  <div className=" text-center mt-10">
                    <h2 className="text-xl mb-3 font-semibold text-black">
                      {item.title}
                    </h2>
                    <p className="text-slate-800">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="text-center mt-10">
        <Link to="">
          <button
            className="commonbutton rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400"
            onClick={toggleShowAllCards}
          >
            <span className="block text-black px-6 py-2 rounded-full bg-white hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white">
              {showAllCards ? "Show Less" : "See More"}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ourservice;
