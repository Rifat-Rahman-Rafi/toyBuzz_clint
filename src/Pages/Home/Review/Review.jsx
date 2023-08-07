import React from 'react';



const Review = () => {
    return (
        <div className='mt-52 mb-32 max-w-screen-xl mx-auto space-y-20 px-4'>
            <div className="text-center mt-28" data-aos="fade-down"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000">
                <h1 className="text-4xl font-bold text-[#36D399]"> Review</h1>
                <br />
        
            </div>
          
            <div className='lg:flex gap-10'>

                <div className='mt-10 space-y-4 mb-10'
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                     <h1 className='font-semibold text-3xl text-[#36D399]'>Isabella</h1>
                    <p className='w-4/5'>I recently had a fantastic experience buying a car from ToyBuzz car selling website. The website's user-friendly design and intuitive navigation made browsing through the car listings a breeze. The search filters helped me narrow down my options quickly, saving me a lot of time.</p>
                   
                </div>
                <img  src="https://i.ibb.co/CW36HtJ/istockphoto-1446806057-170667a.webp" alt="" />
            </div>
           
       


            <div className='lg:flex gap-10 '>
                <img src="https://i.ibb.co/2cG4g47/istockphoto-1456692633-170667a.webp" alt="" />
                <div className='mt-10 space-y-4'
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                   <h1 className='font-semibold text-3xl text-[#36D399]'>MD Anisur Rahman</h1>
                    <p className='w-4/5'>Get peak performance out of your favorite models - Spektrum Smart Technology is about offering a higher connection to your hobby. Its a connection that puts you in complete control, makes you more aware and more confident about the capability of your equipment—all while making vital components of your model easier to use than ever.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;