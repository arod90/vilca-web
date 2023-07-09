import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();
  const notify = () =>
    toast.success(
      'Su mensaje ha sido enviado con exito, en breve estaremos en contacto'
    );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text, 'MESSAGE SENT');
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        setName(''),
        setEmail(''),
        setPhone(''),
        setCompany(''),
        setMessage('')
      );
  };

  return (
    <div>
      <form
        className="contact-us-form"
        noValidate="novalidate"
        ref={form}
        onSubmit={sendEmail}
      >
        <h6 style={{ color: '#EA5B27' }}>Contactanos</h6>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="from_name"
                placeholder="Nombre"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="from_email"
                placeholder="Correo Electronico"
                required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <input
                type="number"
                name="from_phone"
                className="form-control"
                id="phone"
                placeholder="Telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <input
                type="text"
                name="from_company"
                size="40"
                className="form-control"
                id="company"
                placeholder="Empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="7"
                cols="25"
                placeholder="Mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-20">
            <button
              type="submit"
              className="btn softo-solid-btn pull-right"
              id="btnContactUs"
              onClick={notify}
              style={{ backgroundColor: '#EA5B27', border: 'none' }}
            >
              Enviar Mensaje
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
