import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../AuthContext/AuthContext";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user ,logout} = useContext(AuthenticationContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://genius-car-server-delta.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) =>{
        if(res.status === 401 || res.status === 403){
         logout()
        }
        return res.json()})
      .then((data) => setOrders(data));
  }, [user?.email, orders]);
  console.log(orders);
  return (
    <div>
      <h2 className="text-5xl">You have {orders.length} orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow order={order} key={order._id}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
