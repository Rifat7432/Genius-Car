import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../AuthContext/AuthContext";

const CheckOut = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthenticationContext);
  const service = useLoaderData();
  const { title, price, _id } = service;
  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.FirstName.value;
    const lastName = form.LastName.value;
    const name = `${firstName} ${lastName}`;
    const phone = form.YourPhone.value;
    const email = form.YourEmail.value;
    const massage = form.massage.value;
    const order = {
      service: _id,
      serviceName: title,
      price,
      customerName: name,
      phone,
      email,
      massage,
    };

      fetch("https://genius-car-server-delta.vercel.app/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization : `Bearer ${localStorage.getItem('token')}`
          
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((user) => {
          navigate('/')
        })
        .catch((err) => console.error(err));

  };
  // console.log()
  return (
    <div>
      <form onSubmit={handleOrder}>
        <h2 className="text-4xl my-5 font-bold">{title}</h2>
        <h2 className="text-2xl my-5 ">price : {price}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            name="FirstName"
            type="text"
            placeholder="First Name"
            className="input  input-bordered input-ghost w-full"
          />
          <input
            name="LastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-ghost w-full"
          />
          <input
            required
            name="YourPhone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-ghost w-full"
          />
          <input
            name="YourEmail"
            type="text"
            defaultValue={user?.email}
            placeholder="Your Email"
            className="input input-bordered input-ghost w-full"
            readOnly
          />
        </div>
        <textarea
          name="massage"
          className="textarea textarea-bordered h-36 w-full"
          placeholder="Your massage"
        ></textarea>
        <input className="btn" type="submit" value="PLACE YOUR ORDER" />
      </form>
    </div>
  );
};

export default CheckOut;
