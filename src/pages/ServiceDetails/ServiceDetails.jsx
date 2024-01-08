import React from "react";
import css from "./ServiceDetails.css";
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import groupImg from "../../assets/images/about-image/aboutImg4.jpg";
import logoIcon from "../../assets/images/icon/ui-design.png";
import webIcon from "../../assets/images/icon/group.png";

const ServiceDetails = () => {
  const allFAQ = [
    {
        question: 'What is digital platform',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil'
    },
    {
        question: 'How can a digital platform helps your business grow?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil'
    },
    {
        question: 'How do i book my slot to meet with your technical team?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil'
    },
    {
        question: 'How many projects have your completed so far?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil',
    },
]
  return (
    <div className="">
      <div className="lg:pt-[150px] md:pt-[100px] pt-[80px]  lg:px-56 px-10 pb-20 service-details-bg">
        <h2 className="lg:text-4xl text-white font-semibold">Service Details</h2>
        <h4 className="text-xs text-white font-semibold mt-2">
          Home {">"} Service Details
        </h4>
      </div>
      <div className="grid lg:grid-cols-2 pt-10  lg:px-40 gap-2 bg-white">
        <div className="px-10">
          <img
            className="lg:w-[500px] w-[400px] lg:h-[250px] rounded-2xl object-cover"
            src={groupImg}
            alt=""
          />
          <h2 className="lg:text-2xl text-black font-semibold mt-5 mb-4">
            Digital marketing
          </h2>
          <p className="text-sm text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            incidunt atque voluptatum a eligendi excepturi fugit nesciunt ad?
            Adipisci accusantium perspiciatis saepe laudantium vitae fuga,
            blanditiis a voluptates? Nemo ab, nobis velit, minus corrupti
            doloremque autem ducimus assumenda numquam blanditiis eum fuga
            corporis <br /> <br />
            reprehenderit necessitatibus tenetur doloribus explicabo voluptatem
            ut consequatur officia molestiae sequi dignissimos. Magni facere ad
            dolorum commodi ducimus mollitia nulla velit nemo quidem temporibus!
            Repudiandae officiis ad ut qui ab nam. Ad <br /> <br />
            molestiae alias laudantium architecto dolore iusto, eum debitis quos
            natus nostrum voluptates nemo numquam quam quo quisquam commodi
            aspernatur asperiores sunt inventore! Nam, illo vero.
          </p>
          <div className="mt-20 grid lg:grid-cols-2 gap-10">
            <div className="card w-56 shadow-xl p-4 bg-gradient-to-r from-emerald-200 to-indigo-300">
              <div className="mx-auto ms-5 -mt-[59px] bg-opacity-20 bg-black p-3 rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-500 to-indigo-500">
                <img className="w-10" src={logoIcon} alt="Service Image" />
              </div>
              <div className=" text-left mt-4 px-4">
                <h2 className="text-xl mb-2 font-bold text-black">
                  Logo Design
                </h2>
                <p className="text-slate-800 text-justify">
                  Log life readable English. Many desktop publishing packages
                  and web page editors now use Lorem Ipsum as their.{" "}
                </p>
              </div>
            </div>
            <div className="card w-56  shadow-xl p-4 bg-gradient-to-r from-emerald-200 to-indigo-300">
              <div className="mx-auto ms-5 -mt-[59px] bg-opacity-20 bg-black p-3 rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-500 to-indigo-500">
                <img className="w-10" src={webIcon} alt="Service Image" />
              </div>
              <div className=" text-left mt-4  px-4">
                <h2 className="text-xl mb-2 font-bold text-black">
                  web Design
                </h2>
                <p className="text-slate-800 text-justify">
                  Log life readable English. Many desktop publishing packages
                  and web page editors now use Lorem Ipsum as their.{" "}
                </p>
              </div>
            </div>
           
          </div>
          <p className="text-sm mt-5 mb-10 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            labore officiis quam fugiat dolorem exercitationem eligendi quas
            illo ipsam necessitatibus.
          </p>
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <img
                className="lg:Lw-56 lg:h-52 rounded-lg object-cover"
                src={groupImg}
                alt=""
              />
            </div>
            <div className="">
              <h2 className="text-xl text-black font-semibold">
                Digital Marketing
              </h2>
              <p className="text-sm text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita repellat enim illo obcaecati aspernatur suscipit.
              </p>
              <div className="flex gap-3 items-center text-indigo-400 mt-2 text-xs font-semibold">
                <FaArrowCircleRight />
                <p>Use The Latest diagnostic equipment.</p>
              </div>
              <div className="flex gap-3 items-center text-indigo-400 mt-2 text-xs font-semibold">
                <FaArrowCircleRight />
                <p>Use The Latest diagnostic equipment.</p>
              </div>
              <div className="flex gap-3 items-center text-indigo-400 mt-2 text-xs font-semibold">
                <FaArrowCircleRight />
                <p>Use The Latest diagnostic equipment.</p>
              </div>
            </div>
          </div>
            <p className="text-sm mt-4 text-justify mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam labore, vel rem vitae officiis quas delectus iure
              reiciendis! Necessitatibus id fugit vitae accusantium facere,
              assumenda rem. Neque labore iure perspiciatis.
            </p>

          <div className='flex-1'>
                        <div className='rounded-lg bg-gradient-to-l from-indigo-500 to-emerald-500 p-[1px]'>
                            <div className="join join-vertical rounded-lg  p-4 lg:p-6 divide-y-2 bg-white">


                                {
                                    allFAQ.map((faq, index) => <div key={index} className="collapse collapse-arrow join-item border-base-300">
                                        <input type="radio" name="my-accordion-4" checked="checked" />
                                        <div className="collapse-title">
                                            <span className=' font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent'>
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className="collapse-content">
                                            <p className='text-lg text-gray-500'>{faq.ans}</p>
                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>
                    </div>
         
        </div>
        <div>
          <div className="lg:w-64  mx-10 px-10 py-3 mt-8 bg-gradient-to-r from-emerald-200 to-indigo-200 rounded-lg">
            <h2 className="text-xl text-indigo-500 font-bold ">
              All Services
            </h2>
            <hr className="custom-hr mt-2 " />

            <div className="flex items-center justify-between mt-2 group">
              <h4 className="font-semibold hover:text-indigo-400">
                Branding & Art
              </h4>
              <h2 className="text-start bg-black p-1 text-xs rounded-full inline-block transition-transform transform hover:scale-110 group-hover:bg-gradient-to-r from-emerald-500 to-indigo-500">
                <FaArrowRight />
              </h2>
            </div>
            <div className="flex items-center justify-between mt-1 group">
              <h4 className="font-semibold hover:text-indigo-400">
                Design & Development
              </h4>
              <h2 className="text-start bg-black p-1 text-xs rounded-full inline-block transition-transform transform hover:scale-110 group-hover:bg-gradient-to-r from-emerald-500 to-indigo-500">
                <FaArrowRight />
              </h2>
            </div>
            <div className="flex items-center justify-between mt-1 group">
              <h4 className="font-semibold hover:text-indigo-400">
                3D Animation
              </h4>
              <h2 className="text-start bg-black p-1 text-xs rounded-full inline-block transition-transform transform hover:scale-110 group-hover:bg-gradient-to-r from-emerald-500 to-indigo-500">
                <FaArrowRight />
              </h2>
            </div>
            <div className="flex items-center justify-between mt-1 group">
              <h4 className="font-semibold hover:text-indigo-400">
                Branding & Illustration
              </h4>
              <h2 className="text-start bg-black p-1 text-xs rounded-full inline-block transition-transform transform hover:scale-110 group-hover:bg-gradient-to-r from-emerald-500 to-indigo-500">
                <FaArrowRight />
              </h2>
            </div>
            <div className="flex items-center justify-between mt-1 group">
              <h4 className="font-semibold hover:text-indigo-400">
                Web Development
              </h4>
              <h2 className="text-start bg-black p-1 text-xs rounded-full inline-block transition-transform transform hover:scale-110 group-hover:bg-gradient-to-r from-emerald-500 to-indigo-500">
                <FaArrowRight />
              </h2>
            </div>
            <div className="flex items-center justify-between mt-1 group">
              <h4 className="font-semibold hover:text-indigo-400">
                Digital Marketing
              </h4>
              <h2 className="text-start bg-black p-1 text-xs rounded-full inline-block transition-transform transform hover:scale-110 group-hover:bg-gradient-to-r from-emerald-500 to-indigo-500">
                <FaArrowRight />
              </h2>
            </div>
          </div>
          <div className="w-64  mx-10 px-10  mt-8  space-y-2 bg-white  py-3 bg-gradient-to-r from-emerald-200 to-indigo-200 rounded-lg">
            <FaPhoneAlt className="border border-indigo-500 rounded-full text-3xl p-1  text-indigo-500" />
            <h2 className="text-indigo-500">+00 123 456 7899</h2>
            <p className="text-xs">Monday - Friday: 7:00 am - 8:00pm 24/7</p>
            <p className="text-xs">Emergency service</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
