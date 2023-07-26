import React, { Component } from 'react';

class Faq extends Component {
  state = {
    initData: {
      heading: 'Preguntas Frecuentes ',
      content: '',
      image: '/img/botellaairelibre.jpg',
    },
    data: [
      {
        id: 1,
        question: '¿Podría sentir algún efecto psicoactivo?',
        answer:
          'De ningún manera, utilizamos extractos de CBD de la más alta calidad, el cual, es un componente no psicoactivo, pero que carga con muchas de las cualidades medicinales de el cannabis ',
      },
      {
        id: 2,
        question: '¿Como puedo conseguir el producto? ',
        answer:
          'Los puntos de venta físicos con los que contamos al momento están listados en nuestro home page, de igual manera hacemos envíos a todo el país contamos con entrega inmediata en Quito y Loja.',
      },
      {
        id: 3,
        question: '¿Puedo vender sus productos en mi local? ',
        answer:
          '¡Claro que sí! Estamos en una constante búsqueda de aliados y nuevos puntos de venta, en la sección de “contacto” encontraras un formulario donde puede hacernos llegar tu información, nos pondremos en contacto en poco tiempo. ',
      },
      {
        id: 4,
        question: '¿Es legal el CBD en el Ecuador?  ',
        answer:
          'El CBD dejó de ser una sustancia sujeta a fiscalización en Ecuador cuando entraron en vigencia las reformas al Código Orgánico Integral Penal (COIP), que establecieron la despenalización del “cultivo y la producción del cáñamo con un contenido de delta-9-tetrahidrocannabinol (THC) inferior a 1% en peso seco”.',
      },
      {
        id: 5,
        question: '¿El CBD causa algún tipo de adicción?  ',
        answer:
          'De ninguna manera, cuando se toma como único elemento no provoca dependencia o adicción.',
      },
    ],
  };

  render() {
    return (
      <section
        id="faqs"
        className="faq-section ptb-90"
        // style={{ borderBottom: '1px solid #EA5B27' }}
      >
        <div className="faq-section-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading">
                  <h3 style={{ color: '#ea5b27' }}>
                    {this.state.initData.heading}
                  </h3>
                  <p>{this.state.initData.content}</p>
                </div>
                <div className="panel-group" id="accordion">
                  {/* Start Single Item */}
                  {this.state.data.map((item, idx) => {
                    return (
                      <div key={`faq_${idx}`} className="panel panel-default">
                        <div className="panel-heading" id={`heading_${idx}`}>
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href={`#collapse_${idx}`}
                              className="collapsed"
                            >
                              {item.question}
                            </a>
                          </h4>
                        </div>
                        <div
                          id={`collapse_${idx}`}
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* End Single Item */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="faq-img">
                  <img
                    src={this.state.initData.image}
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Faq;
