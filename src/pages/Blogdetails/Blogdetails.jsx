import React from 'react';
import { Link } from 'react-router-dom';
import './Blogdetails.css';
import Footer from '../shared/Footer/Footer';
const Blogdetails = () => {
    return (
        <div>
            <div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1440px] mx-auto py-20 pr-5 pb-5 pl-5 '>
                <div className=' md:col-span-2 mx-5 md:mx-0 '>
                        <div className='mx-auto '>
                            <img className="w-full md:h-96 rounded-2xl" src="https://i.ibb.co/4tMJZh1/businesspeople-listening-their-workmate-talking.jpg" alt="" />
                        </div>
                        <div className=' grid grid-cols-1 md:grid-cols-3 mt-2' >
                                                        <div className='flex items-center'>
                                                            <img src="https://i.ibb.co/VHmhXw0/calendar.png" className='w-[16px] h-[16px] md:mr-2 ' alt="" />
                                                            <p className='text-slate-500 font-semibold mr-5'>23rd November, 2023</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <img src="https://i.ibb.co/sC2QLnH/group.png" className='w-[16px] h-[16px] md:mx-2' alt="" />
                                                            <p className='text-slate-500 font-semibold mr-5'>By admin</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <img src="https://i.ibb.co/PgqHnK3/chat.png" className='w-[16px] h-[16px] md:mx-2' alt="" />
                                                            <p className='text-slate-500 font-semibold'>Comment</p>
                                                        </div>

                        </div>

                        <div>
                            <h1 className='text-3xl font-extrabold text-black my-2'>quia conselores eos qui ratione voluptatem sequi nesciunt</h1>
                            <p className='text-slate-500 my-2'>
                            perspiciatis unde omnis iste natus error sit volupum quia dolor sit amet, consectetur, adipisci velit, sed quia non numq<br></br>uam eius modi tempora incidunt ut labore
                            sit voluptatem accusantium doloremque laudantium, totam rbrriam<br></br>, eaque ipsa quae ab iinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br></br><br></br>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem et dolore magnam aliquam quaerat voluptatem
                            </p>
                        </div>


                        <div>
                        <h1 className='text-xl font-extrabold text-black my-2'>quia conselores eos qui ratiequi nesciunt</h1>
                            <p className='text-slate-500 my-2'>
                            perspiciatis unde omnis iste natus error sit volupum quia dolor sit amet, consectetur, adipisci velit, sed quia non numq<br></br>uam eius modi tempora incidunt ut labore
                            sit voluam<br></br>
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5'>
                            <div>
                                    <img src="https://i.ibb.co/ZdB1sV8/person7.jpg" className='rounded-2xl ' alt="person7" />
                            </div>

                            <div>
                            <h1 className='text-xl font-extrabold text-black my-2'>quia conselores eos qui ratiequi nesciunt</h1>
                            <p className='text-slate-500 my-2'>
                            perspiciatis unde omnis iste natus error sit volupum quia dolor sit amet, consectetur, a dolor sit amet, consectetur,adipisci velit, sed quia non numq<br></br>uam eius modi tempora incidunt ut labore
                            perspiciatis unde omnis iste nvelit, sed quia non numq<br></br>uam eius modi tempora incidunt ut labore
                            sit voluam<br></br>
                            </p>

                            <div>
                                <div className='flex items-center  my-2'>
                                    <div className="avatar">
                                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-indigo-400 rounded-full mr-2">
                                        <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                        </div>
                                    </div>
                                    <p>100% better result</p>
                                </div>


                                <div className='flex items-center  my-2'>
                                    <div className="avatar">
                                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-indigo-400 rounded-full mr-2">
                                        <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                        </div>
                                    </div>
                                    <p>Budget friendly service</p>
                                </div>

                                <div className='flex items-center  my-2'>
                                    <div className="avatar">
                                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-indigo-400 rounded-full mr-2">
                                        <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                        </div>
                                    </div>
                                    <p>Customer Service</p>
                                </div>

                               

                            </div>
                            

                           
                            </div>
                           
                        </div>

                        <div className='my-5 text-slate-500 '>
                                <p>"rspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,"</p>
                        </div>

                        <div >
                            <div className='w-full h-[2px]  bg-gradient-to-r from-emerald-400 to-indigo-400'></div>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

                                <div className='flex items-center my-4 md:col-span-2'>
                                    <h1 className='text-xl text-black font-bold mr-3 text-indigo-500'>Tags: </h1>
                                    <button className="btn btn-xs sm:btn-sm  hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-1">marketing</button>     
                                    <button className="btn btn-xs sm:btn-sm hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-1">digital</button>     
                                    <button className="btn btn-xs sm:btn-sm  hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-1">corporate</button>     
                                    <button className="btn btn-xs sm:btn-sm   hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-1">seo marketing</button>     
                                </div>


                                    <div className='flex items-center my-4'>
                                        <h1 className='text-xxl text-black font-bold mr-5 text-indigo-500'>Share: </h1>
                                        <div className='flex items-center'>
                                                <div className="avatar">
                                                <div className="w-8 h-8 bg-slate-300 hover:bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full mr-2">
                                                <img className='w-5 h-5 p-2' src="https://i.ibb.co/8Brcs6Q/facebook.png" alt="" />
                                                </div>
                                                </div>

                                                <div className="avatar">
                                                <div className="w-8 h-8 bg-slate-300 hover:bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full mr-2">
                                                <img className='w-5 h-5 p-2' src="https://i.ibb.co/h1JD2Vc/whatsapp.png" alt="" />
                                                </div>
                                                </div>

                                                <div className="avatar">
                                                <div className="w-8 h-8 bg-slate-300 hover:bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full mr-2">
                                                <img className='w-5 h-5 p-2' src="https://i.ibb.co/8X0sJxL/twitter.png" alt="" />
                                                </div>
                                                </div>

                                                <div className="avatar">
                                                <div className="w-8 h-8 bg-slate-300 hover:bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full mr-2">
                                                <img className='w-5 h-5 p-2' src="https://i.ibb.co/Rh4PmHT/instagram.png" alt="" />
                                                </div>
                                                </div>
                                               
                                        </div>
                                    </div>
                                </div>



                            <div className='w-full h-[2px]  bg-gradient-to-r from-emerald-400 to-indigo-400 '></div>

                        </div>


                        <div className='my-5 '>
                            <div>
                            <h1 className='text-3xl text-black font-bold mr-5 text-indigo-500'>Comments </h1>
                            </div>
                            <div className='my-5 flex '>

                                <div className='mr-3'>
                                    <div className="avatar">
                                                    <div className="w-16 h-16 bg-slate-300 hover:bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full mr-2">
                                                    <img className='' src="https://i.ibb.co/r2N2wsD/customer5.jpg" alt="" />
                                                    </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='text-indigo-500 text-lg font-semibold'><h1>Jored Smith</h1></div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-slate-500'>September 15 2023</p>
                                        <button className="btn btn-xs sm:btn-sm rounded-full bg-indigo-500 text-white p-2 normal-case mx-1">Reply</button>     
                                    </div>
                                    <div>
                                        <p className='text-slate-500'> of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the grea</p>
                                    </div>

                                </div>


                            </div>

                            <div className='my-5 flex '>

                                        <div className='mr-3'>
                                            <div className="avatar">
                                                            <div className="w-16 h-16 bg-slate-300 hover:bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full mr-2">
                                                            <img className='' src="https://i.ibb.co/tsdbzVc/customer7.jpg" alt="" />
                                                            </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='text-indigo-500 text-lg font-semibold'><h1>Jored Smith</h1></div>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-slate-500'>September 15 2023</p>
                                                <button className="btn btn-xs sm:btn-sm rounded-full bg-indigo-500 text-white p-2 normal-case mx-1">Reply</button>     
                                            </div>
                                            <div>
                                                <p className='text-slate-500'> of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the grea</p>
                                            </div>

                                        </div>


                            </div>
                        </div>

                        
                        <div className='w-full h-[2px]  bg-gradient-to-r from-emerald-400 to-indigo-400 '></div>

                        <div className=" mx-auto my-10 bg-base-200 ">
  <div className="">
   
    <div className="card  w-full  shadow-2xl  bg-gradient-to-r from-emerald-100 to-indigo-100 p-10">
      <form className="card-body">
        <div>
            <h1  className='text-3xl text-black font-bold mr-5 text-indigo-500'>Leave a reply</h1>
            <p className='text-slate-500 my-2'>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
            <div className="form-control w-full my-2">
           
            <input type="firstname" placeholder="First Name" className="input input-bordered" required />
            </div>
            <div className="form-control w-full my-2">
           
            <input type="lastname" placeholder="Last Name" className="input input-bordered" required />
            </div>
        </div>

        <div className="form-control my-2">
          
          <input type="email" placeholder="Your email" className="input input-bordered" required />
        </div>
        <div className="form-control my-2">
         
          <input type="text" placeholder="Your website" className="input input-bordered" required />
         
        </div>
        <div className="form-control my-2">
         
          <input type="text" placeholder="Your comments" className="input input-bordered h-40 " required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-gradient-to-r from-emerald-500 to-indigo-500 text-white normal-case">Submit Now</button>
        </div>
      </form>
    </div>
  </div>
</div>



                </div>


                <div className='mx-5 md:mx-0'>

                    <div>
                        <div className='bg-gradient-to-r from-emerald-100 to-indigo-100  text-center rounded-xl'>
                        <input type="text" placeholder="Search here" className="input input-bordered input-info w-96 m-5 searchicon " />
                        </div>
                    </div>

                    <div className='my-5'>
                        <div className='bg-gradient-to-r from-emerald-100 to-indigo-100 p-8 rounded-xl'>
                            <div>
                                <h1  className='text-2xl text-black font-bold mb-2 text-indigo-500 '>Categories</h1>
                                <div className='w-40 h-[2px]  bg-gradient-to-r from-emerald-400 to-indigo-400 '></div>
                                <div>
                                    <div className='linkclick flex justify-between my-3'>
                                        <h1 className='text-slate-500 linkname'>Business Consulting</h1>
                                        <div className="avatar">
                                            <div className="w-6 h-6 bg-slate-300 linksign rounded-full mr-2">
                                            <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='linkclick flex justify-between my-3'>
                                        <h1 className='text-slate-500 linkname'>Marketing</h1>
                                        <div className="avatar">
                                            <div className="w-6 h-6 bg-slate-300 linksign rounded-full mr-2">
                                            <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='linkclick flex justify-between my-3'>
                                        <h1 className='text-slate-500 linkname'>Seo Optimization</h1>
                                        <div className="avatar">
                                            <div className="w-6 h-6 bg-slate-300 linksign rounded-full mr-2">
                                            <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='linkclick flex justify-between my-3'>
                                        <h1 className='text-slate-500 linkname'>Design</h1>
                                        <div className="avatar">
                                            <div className="w-6 h-6 bg-slate-300 linksign rounded-full mr-2">
                                            <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='linkclick flex justify-between my-3'>
                                        <h1 className='text-slate-500 linkname'>Facebook Marketing</h1>
                                        <div className="avatar">
                                            <div className="w-6 h-6 bg-slate-300 linksign rounded-full mr-2">
                                            <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='linkclick flex justify-between my-3'>
                                        <h1 className='text-slate-500 linkname'>Web development</h1>
                                        <div className="avatar">
                                            <div className="w-6 h-6 bg-slate-300 linksign rounded-full mr-2">
                                            <img className='w-5 h-5 p-2' src="https://i.ibb.co/YThmktL/next-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='my-5'>
                        <div className='bg-gradient-to-r from-emerald-100 to-indigo-100 p-8 rounded-xl'>
                            <div>
                                <h1  className='text-2xl text-black font-bold mb-2 text-indigo-500 '>Recent Post</h1>
                                <div className='w-40 h-[2px]  bg-gradient-to-r from-emerald-400 to-indigo-400 '></div>


                                <div>
                                    <div className='my-5 flex'>
                                            <div className='avatar justify-start mr-5 '>
                                            <div className='w-16 md:w-16 rounded-full hover:ring hover:ring-gradient-to-r from-emerald-500 to-indigo-500 ring-offset-base-100 ring-offset-2'>
                                                        <img src="https://i.ibb.co/tsdbzVc/customer7.jpg"></img>

                                            </div>

                                            </div>

                                            <div>
                                                <div className='flex items-center'>
                                                <img src="https://i.ibb.co/VHmhXw0/calendar.png" className='w-[15px] h-[15px] mr-2 ' alt="" />
                                                <p className='text-slate-500'>25 October, 2023</p>
                                                </div>
                                                <div><h1 className='text-xl font-bold hover:text-indigo-500'>How to get better solution</h1></div>
                                                                                            </div>
                                    </div>

                                    <div className='my-5 flex'>
                                            <div className='avatar justify-start mr-5 '>
                                            <div className='w-16 md:w-16 rounded-full hover:ring hover:ring-gradient-to-r from-emerald-500 to-indigo-500 ring-offset-base-100 ring-offset-2'>
                                                        <img src="https://i.ibb.co/tsdbzVc/customer7.jpg"></img>

                                            </div>

                                            </div>

                                            <div>
                                                <div className='flex items-center'>
                                                <img src="https://i.ibb.co/VHmhXw0/calendar.png" className='w-[15px] h-[15px] mr-2 ' alt="" />
                                                <p className='text-slate-500'>25 October, 2023</p>
                                                </div>
                                                <div><h1 className='text-xl font-bold hover:text-indigo-500'>How to get better solution</h1></div>
                                                                                            </div>
                                    </div>

                                    <div className='my-5 flex'>
                                            <div className='avatar justify-start mr-5 '>
                                            <div className='w-16 md:w-16 rounded-full hover:ring hover:ring-gradient-to-r from-emerald-500 to-indigo-500 ring-offset-base-100 ring-offset-2'>
                                                        <img src="https://i.ibb.co/tsdbzVc/customer7.jpg"></img>

                                            </div>

                                            </div>

                                            <div>
                                                <div className='flex items-center'>
                                                <img src="https://i.ibb.co/VHmhXw0/calendar.png" className='w-[15px] h-[15px] mr-2 ' alt="" />
                                                <p className='text-slate-500'>25 October, 2023</p>
                                                </div>
                                                <div><h1 className='text-xl font-bold hover:text-indigo-500'>How to get better solution</h1></div>
                                                                                            </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='my-5'>
                        <div className='bg-gradient-to-r from-emerald-100 to-indigo-100 p-8 rounded-xl'>
                            <div>
                                <h1  className='text-2xl text-black font-bold mb-2 text-indigo-500 '>Tags</h1>
                                <div className='w-24 h-[2px]  bg-gradient-to-r from-emerald-400 to-indigo-400 '></div>

<div className='my-5'> <button className="btn btn-xs sm:btn-sm  hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-2 my-1">marketing</button>     
                                    <button className="btn btn-xs sm:btn-sm hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-2  my-1">digital</button>     
                                    <button className="btn btn-xs sm:btn-sm  hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-2  my-1">corporate</button>     
                                    <button className="btn btn-xs sm:btn-sm   hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-2  my-1">seo marketing</button>  
                                    <button className="btn btn-xs sm:btn-sm hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-2  my-1">Web development</button>     
                                    <button className="btn btn-xs sm:btn-sm  hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-2  my-1">corporate</button>     
                                    <button className="btn btn-xs sm:btn-sm   hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white mx-2  my-1">Facebook marketing</button>   </div>

                            </div>
                        </div>
                    </div>


                </div>



            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogdetails;