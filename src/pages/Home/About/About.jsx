import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

import Aboutinfo from "./Aboutinfo";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <div  className=" pt-20 ">
      <div className="max-w-[1440px] mx-auto my-24">
        <div className="grid sm:grid-cols-1 md:grid-cols-2  px-10">
          <Fade cascade triggerOnce direction="left" damping={0.2}>
          <div className=" relative ">
            <div className="rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  image1 ">
              <div className="rounded-full bg-white p-2">
                <img
                  src="https://i.ibb.co/889Ghgp/sebastian-herrmann-6j-Aq8-Mkb-ULo-unsplash.jpg"
                  alt="sebastian-herrmann-6j-Aq8-Mkb-ULo-unsplash"
                  className="rounded-full w-24 h-24 lg:w-64 lg:h-64  "
                ></img>
              </div>
            </div>
            <div className="rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  lg:image2 ">
              <div className="rounded-full bg-white p-4">
                <img
                  src="https://i.ibb.co/Xj2p3QR/shutterstock-370390046-632x420.jpg"
                  alt="shutterstock-370390046-632x420"
                  className="rounded-full w-48 h-48 md:w-64 md:h-64 "
                ></img>
              </div>
            </div>

            <div className="rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  lg:image3 ">
              <div className="rounded-full bg-white p-2">
                <img
                  src="https://i.ibb.co/7gX2bn2/working-with-data.jpg"
                  className="rounded-full lg:w-56 lg:h-56 w-28 h-28 ms-40 "
                ></img>
              </div>
            </div>

            <div className="rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  image4 ">
              <div className="rounded-full bg-white p-2">
                <img
                  src="https://i.ibb.co/cxm74zc/young-employees-sitting-office-table-using-laptop.jpg"
                  className="rounded-full w-24 h-24 lg:h-48 lg:w-48"
                ></img>
              </div>
            </div>

            <div></div>
          </div>
          </Fade>
          <Fade cascade triggerOnce direction="right" damping={0.2} className=" m-10">
            <div>
              <h1 className=" text-start text-transparent text-3xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block">
                About Us
              </h1>
              <h1 className=" text-start font-extrabold text-5xl my-4 text-black">
                Making your business<br></br> More unique
              </h1>
              <p className="text-sm text-slate-500 text-justify">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.<br></br>
                <br></br>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,<br></br>
                <br></br>by injected humour, or randomised words which don't
                look even slightly believable.
              </p>
              <Link to="">
                <button className="my-6 commonbutton rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  ">
                  <span className="block  text-black px-6 py-2  rounded-full bg-white hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white">
                    Read More
                  </span>
                </button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
      <Aboutinfo />
    </div>
  );
};

export default About;
