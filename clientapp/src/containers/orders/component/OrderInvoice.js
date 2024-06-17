import React, { useState } from 'react';
import { Modal,ModalHeader, ModalBody } from "react-bootstrap";
const OrderInvoice = (props) => {
  const [dateCreated, setDateCreated] = useState('2024-06-17');
  const [hours, setHours] = useState(16);
  const [minutes, setMinutes] = useState(59);
  const [status, setStatus] = useState('Processing');
  const [customer, setCustomer] = useState('Guest');



  return (
    <><Modal
    style={{ maxWidth: "800px", width: "100%" }}
      isOpen={props.OrderInvoiceModalOpen}
      toggle={props.toggleOrderInvoiceModal}>
        
        <div className="container p-4 bg-white shadow rounded">
      <h2 className="h4 mb-3">Order #40114 details</h2>
      <p className="text-muted mb-4">
        Payment via Credit Card - Via Wildcard. Paid on June 17, 2024 @ 5:01 pm. Customer IP: 89.240.94.32
      </p>
      <div className="row mb-4">
        <div className="col-md-4">
          <h3 className="h5 mb-3">General</h3>
          <div className="mb-3">
            <label className="form-label">Date created:</label>
            <input
              type="date"
              value={dateCreated}
              onChange={(e) => setDateCreated(e.target.value)}
              className="form-control"
            />
            <div className="d-flex mt-2">
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="form-control me-2"
                style={{ width: '70px' }}
              />
              <span className="align-self-center">@</span>
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="form-control ms-2"
                style={{ width: '70px' }}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-select"
            >
              <option>Processing</option>
            </select>
          </div>
          <div>
            <label className="form-label">Customer:</label>
            <select
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="form-select"
            >
              <option>Guest</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <h3 className="h5 mb-3">Billing</h3>
          <p>Hessy Kissi Baah</p>
          <p>36 Gilfill Road</p>
          <p>Nuneaton</p>
          <p>Warwickshire</p>
          <p>CV10 7BU</p>
          <p>
            Email address: 
            <a href="mailto:hkissibaah@gmail.com" className="text-decoration-none"> hkissibaah@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:07907254323" className="text-decoration-none">07907254323</a>
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
              <th>2% ONLINE SERVICE CHARGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="d-flex align-items-center">
                <img src="https://placehold.co/50x50" alt="Product" className="me-2" />
                <a href="#" className="text-decoration-none">1 Hour - Manual</a>
              </td>
              <td>£34.00</td>
              <td>1</td>
              <td>£34.00</td>
              <td>£0.68</td>
            </tr>
          </tbody>
        </table>
        <div className="text-end">
          <p className="mb-2">Items Subtotal: <span className="fw-semibold">£34.00</span></p>
          <p className="mb-2">2% ONLINE SERVICE CHARGE: <span className="fw-semibold">£0.68</span></p>
          <p className="mb-2">Order Total: <span className="fw-semibold">£34.68</span></p>
          <p className="fw-semibold">Paid: <span className="fw-semibold">£34.68</span></p>
        </div>
      </div>
    </div></Modal></>
    
  );
};

export default OrderInvoice;
