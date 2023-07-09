import React, { Component } from 'react';
import ContactForm from './contactform';

class Contact extends Component {
  state = {
    data: {
      heading: 'Ponte en contacto con nosotros ',
      content:
        'Estamos siempre pendientes de sus mensajes, cualquier pregunta o inquietud siéntanse en la libertad de llenar el formulario en esta sección, o de ponerse en contacto directamente a los siguientes números telefónicos, ya sea vía WhatsApp o por llamada ',
      branch: 'Oficinas',
      address: 'Alguna calle S2-155, y la que cruza, Loja, Ecuador',
      phone: '+593 999 123 123',
      email: 'vilcahemp@gmail.com',
    },
  };

  render() {
    return (
      <section id="contact" className="contact-us ptb-90">
        <div className="contact-us-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="section-heading">
                  <h3 style={{ color: '#EA5B27' }}>
                    {this.state.data.heading}
                  </h3>
                  <p>{this.state.data.content}</p>
                </div>
                <div className="footer-address">
                  <h6 style={{ color: '#EA5B27' }}>{this.state.data.branch}</h6>
                  <p>{this.state.data.address}</p>
                  <ul>
                    <li>
                      <i
                        className="fa fa-phone"
                        style={{ color: '#EA5B27' }}
                      ></i>{' '}
                      <span>Phone: {this.state.data.phone}</span>
                    </li>
                    <li>
                      <i
                        className="fa fa-envelope-o"
                        style={{ color: '#EA5B27' }}
                      ></i>{' '}
                      <span>
                        Email :{' '}
                        <a
                          style={{ color: '#EA5B27' }}
                          href="mailto:hello@yourdomain.com"
                        >
                          {this.state.data.email}
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
