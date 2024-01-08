import React from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';
const Blogs = () => {

    const blogs = [
        {
            "id": 1, "date": "23 October 2023", "by": "Admin" , "title": " ab illo inventore veritatis ettecto", "description":"sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", "image":"https://i.ibb.co/9nCxKsM/cherful-positive-young-colleagues-using-laptop-computer.jpg" 
        },
        {
            "id": 2, "date": "04 November 2023", "by": "Admin" , "title": "modi tempora incidunt ut labore et", "description":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ", "image":"https://i.ibb.co/cxm74zc/young-employees-sitting-office-table-using-laptop.jpg"
        },
        {
            "id": 3, "date": "15 September 2023", "by": "Admin" , "title": "Quis autem vel eum iure reprehenderit", "description":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi  sed quia no   sed quia nosed quia notempora","image":"https://i.ibb.co/0h3szxx/businesspeople-having-good-time-meeting.jpg"
        }
    
    
    
    ];


    return (
        <div className=' mb-10'>

            <div className='max-w-[1440px] mx-auto'>
                <div className='text-center pt-20 px-5 pb-5'>
                    <h1 className='text-transparent text-4xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 mx-10 inline-block '>latest Blog</h1>
                    <h1 className='font-bold text-3xl md:text-5xl mt-3 '>Latest Blog Posts</h1>
                    <p className='text-slate-500 pt-5'> quia consequuntur magni dolores eos qui ratione voluptatem seq Neque porro quisquam  amet<br></br> consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3  ' >
                {
                    blogs.map((blog)=> <div >
                        <div className="card card-compact blogsection  mx-auto w-96 sm:w-96 md:w-64 lg:w-96 gap-4 bg-white">
                                            <figure><img src={blog.image} className='rounded-2xl p-1' /></figure>
                                            <div className="card-body rounded-b-2xl bg-white mx-1 mt-[-5px] mb-1   ">
                                                    <div className='flex justify-between' >
                                                        <div className='flex items-center'>
                                                            <img src="https://i.ibb.co/VHmhXw0/calendar.png" className='w-[15px] h-[15px] mr-2 ' alt="" />
                                                            <p className='text-slate-500 font-semibold'>{blog.date}</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <img src="https://i.ibb.co/sC2QLnH/group.png" className='w-[15px] h-[15px] mr-2' alt="" />
                                                            <p className='text-slate-500 font-semibold'>{blog.by}</p>
                                                        </div>

                                                    </div>
                                                    <h2 className="card-title font-secondary text-2xl blogtitle">{blog.title}</h2>
                                                    <div className='w-64 h-[2px] bg-slate-500 blogline'></div>
                                                    <p className='text-left text-slate-500 font-semibold'>{blog.description}</p>
                                                    <div className="card-actions justify-center">
                                                    <Link to=''><button className="my-6 commonbutton rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  ">
                            <span className="block  text-black px-6 py-4 readmore rounded-full bg-white hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white">Read More</span>
                            </button></Link>
                                                    </div>

                                               
                                            </div>
</div>
                    </div>)
                }
                </div>




            </div>
            
            
        </div>
    );
};

export default Blogs;