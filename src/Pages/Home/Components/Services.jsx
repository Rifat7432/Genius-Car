import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('sarviceData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl text-orange-600 font-semibold">Service</p>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                 {
                services.map(serviceData=><ServiceCard key={serviceData._id} serviceData={serviceData}></ServiceCard>)
            }
            </div>
           
        </div>
    );
};

export default Services;