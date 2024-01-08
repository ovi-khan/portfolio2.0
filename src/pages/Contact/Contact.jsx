import { FaMailBulk, FaPhone } from "react-icons/fa";
import css from "./Contact.css";


const Contact = () => {
  return (
    <div className="lg:pt-[150px] lg:px-56 px-10 pb-5 pt-10">
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 gap-10  lg:bg-black rounded-3xl lg:bg-opacity-10 px-10 py-10">
        <div className=" space-y-4 lg:text-left md:text-left text-center">
          <h3 className="text-start text-transparent text-3xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block font-secondary">
            Get In Touch
          </h3>
          <h2 className="lg:text-3xl font-bold text-black">
            Have any Project Plan In Your Mind?
          </h2>
          <p className="text-slate-700 lg:text-md text-sm">
            It has Survived Only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release{" "}
          </p>
          <div className="flex  gap-5 items-center">
            <div className="bg-gradient-to-r from-emerald-500 to-indigo-500 transition-transform p-3 rounded-full text-white text-sm hover:opacity-70">
              <FaPhone />
            </div>
            <div className="text-sm">
              <p className="text-slate-700 font-semibold">For urgent help</p>
              <p className="text-black font-semibold">+0000 123-456-789</p>
            </div>
          </div>
          <div className="flex  gap-5 items-center">
            <div className="bg-gradient-to-r from-emerald-500 to-indigo-500 transition-transform p-3 rounded-full text-white text-sm hover:opacity-70">
              <FaMailBulk />
            </div>
            <div className="text-sm">
              <p className="text-slate-700 font-semibold">Mail us 24/7</p>
              <p className="text-black font-semibold">Hello@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-success bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered input-success bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">How can help you?</span>
              </label>
              <textarea
                className="textarea input-bordered input-success bg-white"
                required
                name=""
                id=""
                cols=""
                rows="2"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success hover:bg-opacity-80 ">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
