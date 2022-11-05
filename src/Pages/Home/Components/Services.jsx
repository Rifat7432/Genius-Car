import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [page, setPage] = useState(0);
//   const [pages, setPages] = useState();
  const [size, setSize] = useState('2');
  const [count, setCount] = useState(0);
  const [services, setServices] = useState([]);
  const pages = Math.ceil(count / size)
  useEffect(() => {
      fetch(`https://genius-car-server-delta.vercel.app/services?size=${size}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
          setServices(data.services);
          setCount(data.count);
        });
    }, [size,page,pages]);
   

  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl text-orange-600 font-semibold">Service</p>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="py-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {services.map((serviceData) => (
          <ServiceCard
            key={serviceData._id}
            serviceData={serviceData}
          ></ServiceCard>
        ))}
      </div>
      <div className="btn-group">
        {[...Array(pages).keys()].map((num) => (
          <button onClick={()=>setPage(num)} className="btn" key={num}>
            {num+1}
          </button>
        ))}
        <select onChange={event=> setSize(event.target.value)} className="select select-bordered w-full max-w-xs">
          <option value={'1'}>1</option>
          <option defaultValue={'2'} selected>2</option>
        </select>
      </div>
    </div>
  );
};

export default Services;
