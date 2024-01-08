import img1 from "../../../assets/images/banner-image/banner2.jpg";
import img2 from "../../../assets/images/banner-image/banner3.jpg";
import css from "./Banner.css";

const Banner = () => {
  return (
    <div className="lg:pt-8 md:pt-28 pt-24 lg:pb-[88px] pb-10 banner-bg hero">
      <div className="flex lg:flex-y lg:mt-[200px] lg:gap-20 md:gap-40 gap-20 relative z-10 mx-7">
        <div className="lg:space-y-3">
          <h4 className="text-start text-transparent text-3xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block font-secondary">
            Creative Thinking
          </h4>
          <h2 className="text-white lg:text-5xl font-bold">
            Strategic Thinking,
          </h2>
          <h2 className="text-white lg:text-5xl font-bold">
            Tangible <span className="gradiant-text">Results for</span>
          </h2>
          <h2 className="text-white lg:text-5xl font-bold gradiant-text">
            Business
          </h2>
          <p className="text-white text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            quae. Assumenda voluptatem excepturi obcaecati aliquid laborum iure{" "}
          </p>
          <button className="bg-blue-500 text-white text-xs px-5 py-2 rounded-full hover:opacity-70 bg-gradient-to-r from-indigo-500 from-10% to-emerald-500 via-30%  to-90%">
            Explore Now
          </button>
        </div>
        <div className="lg:flex ">
          <div className="lg:mt-20 ">
            <img
              className="lg:h-[250px] md:h-[150px] h-[90px] lg:w-[200px] md:w-[80px] w-[60px]  -ms-10 -mb-20 rounded-full object-cover  border-slate-300 border-4 z-20"
              src={img1}
              alt="Image 1"
            />
          </div>
          <div className="lg:-ms-20">
            <img
              className="lg:h-[350px] md:h-[200px] h-[120px] lg:w-[200px] md:w-[120px] w-[250px] sm:-mt-32 rounded-full object-cover relative"
              src={img2}
              alt="Image 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
