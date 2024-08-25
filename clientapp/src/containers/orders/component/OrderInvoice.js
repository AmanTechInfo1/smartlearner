import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneOrders } from '../../../redux/features/orderSlice';
import { imageBaseUrl } from '../../../utils/constants';

const OrderInvoice = (props) => {
  const { oneorders } = useSelector((state) => state.order);
  const params = useParams();
  const dispatch = useDispatch();

  // State for status
  const [status, setStatus] = useState('Processing');

  useEffect(() => {
    dispatch(getOneOrders(params.invoiceId));
  }, [dispatch, params.invoiceId]);

  useEffect(() => {
    if (oneorders && oneorders.status) {
      setStatus(oneorders.status);
    }
  }, [oneorders]);

  return (
    <div className="container p-4 bg-white shadow rounded">
      {oneorders ? (
        <>
          <h2 className="h4 mb-3">{oneorders.orderNo} details</h2>
          <p className="text-muted mb-4">
            Payment via Credit Card - Via Wildcard. Paid on June 17, 2024 @ 5:01 pm. Customer IP: 89.240.94.32
          </p>
          <div className="row mb-4">
            <div className="col-md-4">
              <h3 className="h5 mb-3">General</h3>
              <div className="mb-3">
                <label className="form-label">Date created:</label>
                <span className="mb-3">
                  {`${new Date(oneorders.createdOn).getDate()}/${new Date(oneorders.createdOn).getMonth() + 1}/${new Date(oneorders.createdOn).getFullYear()}`}
                </span>
                <br />
                <br />
                <label className="form-label">Time created:</label>
                <span className="mb-3">
                  {`${new Date(oneorders.createdOn).getHours()}:${new Date(oneorders.createdOn).getMinutes()}:${new Date(oneorders.createdOn).getSeconds()}`}
                </span>
              </div>
              <div className="mb-3">
                <label className="form-label">Status:</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-select"
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="h5 mb-3">Billing</h3>
              <p>{oneorders.streetAddress1}</p>
              {oneorders.streetAddress2 && <p>{oneorders.streetAddress2}</p>}
              <p>{oneorders.city}</p>
              <p>{oneorders.county}</p>
              <p>{oneorders.postcode}</p>
              <p>
                Email address: 
                <a href={`mailto:${oneorders.email}`} className="text-decoration-none"> {oneorders.email}</a>
              </p>
              <p>
                Phone: <a href={`tel:${oneorders.phoneNumber}`} className="text-decoration-none">{oneorders.phoneNumber}</a>
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="h5 mb-3">Shipping</h3>
              <p>Address:</p>
              <p>No shipping address set.</p>
            </div>
          </div>
          <div className="border-top pt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Cost</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {oneorders.myCartList?.map((item, index) => (
                  <tr key={index}>
                    <td className="d-flex align-items-center">
                      <img width={48} height={48} src={`${imageBaseUrl}${item.image}`} alt={item.name} />
                      <a href="#" className="text-decoration-none ms-2">{item.name}</a>
                    </td>
                    <td>£ {item.myCartprice}</td>
                    <td>{item.myCartcount}</td>
                    <td>£ {(+item.myCartprice) * (+item.myCartcount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-end">
              <p className="mb-2">Items Subtotal: <span className="fw-semibold">£ {oneorders.subtotal}</span></p>
              <p className="mb-2">2% ONLINE SERVICE CHARGE: <span className="fw-semibold">£ {oneorders.serviceCharge}</span></p>
              <p className="mb-2">Order Total: <span className="fw-semibold">£ {oneorders.total}</span></p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderInvoice;
