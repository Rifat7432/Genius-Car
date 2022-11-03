import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import part from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
   <div className='w-1/2 relative'>
   <img src={person} className="rounded-lg w-4/5 h-full shadow-2xl" alt=''/>
   <img src={part} className="rounded-lg shadow-2xl w-3/5 border-spacing-8 absolute top-1/2 left-1/3 " alt=''/>
   </div>
    <div  className='w-1/2'>
        <p className='text-2xl  font-bold text-orange-500'>About Us</p>
      <h1 className="text-5xl my-5 font-bold">We are qualified <br/> & of experience <br/> in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;