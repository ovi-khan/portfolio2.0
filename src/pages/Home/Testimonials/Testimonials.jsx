import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './Testimonials.css';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className="slick-next2"
        style={{ }}
        onClick={onClick}
      >
        <button className='btn btn-circle'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>

      </div>

    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-prev2"
        style={{  }}
        onClick={onClick}>
            <button className='btn btn-circle'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
</button>

        </div>
    
    );
  }
const Testimonials = () => {


      const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              arrows:false
            }
          }
        ]
      }


    const customers = [
     
        {"id":1, "name":"Adam " , "profession": "Illustrator", "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://i.ibb.co/r2N2wsD/customer5.jpg"},
        {"id":2, "name":"Samston" , "profession": "Artist", "review":" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://i.ibb.co/tsdbzVc/customer7.jpg"},
        {"id":3, "name":"Era John" , "profession": "Designer", "review":" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://i.ibb.co/hy1BdvW/customer8.jpg"},
        {"id":4, "name":"Auki" , "profession": "Illustrator", "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://i.ibb.co/r2N2wsD/customer5.jpg"},
        {"id":5, "name":"Samil" , "profession": "Artist", "review":" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://i.ibb.co/tsdbzVc/customer7.jpg"},
     
      

 ];


    return (
        <div className=''>
            <div className=' mx-auto  testimonialbg'>
                <h1 className=' text-center  md:text-start  text-transparent text-3xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block mx-10  pt-20 '>Testimonials</h1>
                <h1 className=' text-center  md:text-start font-extrabold text-2xl md:text-4xl my-4 mx-10'>What Our Customer <br></br>Say About Us</h1>
                <Slider {...settings} className=' max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3  w-full gap-4  mt-10 '>
                    {
                        customers.map((customer) => (<div className="card card-compact w-24 md:w-40 p-6 bg-white">
                       
                        <div className="card-body  flex   ">
                            <div className='flex items-center  '>

                                <div className='avatar justify-start  '>
                                     <div className='w-16 md:w-24 rounded-full ring ring-gradient-to-r from-emerald-500 to-indigo-500 ring-offset-base-100 ring-offset-2'>
                                                  <img src={customer.image}></img>

                                    </div>

                                  </div>

                              
                                <div className=' flex justify-end'>

                            <div className='flex flex-col lg:flex-row   ml-7 lg:ml-5 lg:w-72 justify-between   '>
                            <div className=" ">
                                      <h2 className="md:text-lg font-medium ">{customer.name}</h2>
                                      <h2 className=" md:text-lg font-medium text-slate-500">{customer.profession}</h2>
                                  </div>


                                    <div className='flex items-center mt-2 justify-end  '>
                                      <img src="https://i.ibb.co/6RFRT14/star-1.png" className='stars  ' alt="" />
                                      <img src="https://i.ibb.co/6RFRT14/star-1.png"  className='stars ' alt="" />
                                      <img src="https://i.ibb.co/6RFRT14/star-1.png"  className='stars ' alt="" />
                                      <img src="https://i.ibb.co/6RFRT14/star-1.png"  className='stars ' alt="" />
                                      <img src="https://i.ibb.co/5rtmfBS/rating.png"  className='stars ' alt="" />
                                    </div>
                                </div>

                            </div>
                                
                            
                            
                            </div>
                            
                            <div className=' flex justify-around  items-center  '>
                                <div className='w-80   bg-gradient-to-r from-emerald-500 to-indigo-500 quoteline   '></div>
                                <div>
                                  <img src="https://i.ibb.co/3Yp4MjC/chat-7147073.png" className='w-10 h-10 md:w-12 md:h-12' alt="" />
                                </div>
                               </div>


                              <div className='justify-start m-2'>
                              <h1 className='text-start text-transparent text-xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block pb-2'>Customer Review</h1>
                            <p className='text-slate-500 text-left'>{customer.review}</p>
                              </div>

                        
                        </div>
                    </div>))
                    }
        
            </Slider>    
            

            
            </div>
        </div>
    );
};

export default Testimonials;