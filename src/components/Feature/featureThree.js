import React from 'react';
import { BiSolidCoffeeBean } from 'react-icons/bi';
import { TbCannabis } from 'react-icons/tb';

let bg = '/img/botella.jpg';
let bgCss = 'no-repeat center center';
// removed fixed from bgCss
let bgStyle = {
  background: 'url(' + bg + ')' + bgCss,
  backgroundSize: 'cover',
};

class Feature extends React.Component {
  state = {
    initData: {
      heading: 'Nuestra Linea de Productos',
      content:
        'Todos nuestra línea de productos infusiona cuidadosamente la mejor materia prima con extractos de CBD de alta calidad el cual, ofrece múltiples beneficios a nivel físico y mental',
      image: '/img/wave-shape.svg',
    },
    featureData: [
      {
        id: 1,
        featureName: 'Cold Brew + CBD',
        featureHeading: 'Cold Brew',
        featureImage: '/img/boitellasnew.jpg',
        content1Head: 'Elaborado con café de origen',
        content1Text:
          'Nuestro cold brew se prepara exclusivamente con café galardonado de la finca El Aguacate en Loja',
        content2Head: 'Destilado con agua de Vilcabamba',
        content2Text:
          'Preparamos nuestro cold brew de manera artesanal, utilizando agua de manantial proveniente del valle de la longevidad.',
        content3Head: 'Infusionado con CBD de espectro completo.',
        content3Text:
          'Utilizamos extractos de cannabidiol de la más alta calidad, cada botella viene con más de 100 compuestos derivados del cannabis con innumerables beneficios a nivel mental y físico.  ',
        ul_1: 'Fuente de Energia.',
        ul_2: 'Claridad y serenidad.',
        ul_3: 'Enfoque y concentración.',
        ul_4: 'Alta concentración de antioxidantes.',
      },
      // {
      //   id: 2,
      //   featureName: 'Miel de Abeja + CBD',
      //   featureHeading: 'Lorem ipsum dolor ',
      //   featureImage: '/img/tab-image-2.png',
      //   content:
      //     'sit amet consectetur adipisicing elit. Dolorem, et. sit amet consectetur adipisicing elit. Dolorem, et. sit amet consectetur adipisicing elit. Dolorem, et. ',
      //   ul_1: 'Scheduling Big',
      //   ul_2: 'Data Online Consultations',
      //   ul_3: 'Live 24/7 Support',
      //   ul_4: 'Identification & Smart',
      // },
      // {
      //   id: 3,
      //   featureName: 'Algo más',
      //   featureHeading: 'Windows Apps - Microsoft Store',
      //   featureImage: '/img/tab-image-3.png',
      //   content:
      //     'Dramatically re-engineer optimal e-markets vis-a-vis top-line web services. Globally drive 24/7 meta-services with adaptive products. Professionally matrix leading-edge experiences after high-quality networks. Appropriately extend 24/7 customer service before unique communities. Intrinsicly harness resource sucking channels and virtual materials.',
      //   ul_1: 'Scheduling Big',
      //   ul_2: 'Data Online Consultations',
      //   ul_3: 'Live 24/7 Support',
      //   ul_4: 'Identification & Smart',
      // },
    ],
  };

  render() {
    return (
      <div>
        <section
          id="features"
          className="overview-section ptb-90"
          style={bgStyle}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading text-center white-text overview-heading">
                  <h3 className="white-text">{this.state.initData.heading}</h3>
                  <p>{this.state.initData.content}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="nav-center overview-center-tab">
                  <ul className="nav nav-tabs">
                    {this.state.featureData.map((item, idx) => {
                      return (
                        <li
                          key={`fa_${idx}`}
                          className={`${item.id === 1 ? 'active' : ''}`}
                        >
                          <a href={`#nav-${idx + 1}`} data-toggle="tab">
                            {/* <span className="ti-apple"></span> */}
                            <TbCannabis style={{ marginRight: '5px' }} />
                            {item.featureName}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="tab-content-wrap">
                  <div className="tab-content clearfix">
                    {this.state.featureData.map((item, idx) => {
                      if (item.id % 2 === 1) {
                        return (
                          <div
                            key={`fe_${idx}`}
                            className={`tab-pane fade ${
                              item.id === 1 ? 'active in' : ''
                            }`}
                            id={`nav-${idx + 1}`}
                          >
                            <div className="col-md-6">
                              <div className="overview-feature-content-image">
                                <img
                                  src={item.featureImage}
                                  alt=""
                                  className="img-responsive"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="overview-feature-content">
                                <h6>{item.featureHeading}</h6>
                                <p>
                                  <strong>{item.content1Head}</strong>
                                </p>
                                <p>{item.content1Text}</p>
                                <p>
                                  <strong>{item.content2Head}</strong>
                                </p>
                                <p>{item.content2Text}</p>
                                <p>
                                  <strong>{item.content3Head}</strong>
                                </p>
                                <p>{item.content3Text}</p>
                                <ul className="overview-list">
                                  <li>
                                    <BiSolidCoffeeBean
                                      style={{ marginRight: '7px' }}
                                      size={20}
                                    />
                                    {item.ul_1}
                                  </li>
                                  <li>
                                    <BiSolidCoffeeBean
                                      style={{ marginRight: '7px' }}
                                      size={20}
                                    />
                                    {item.ul_2}
                                  </li>
                                  <li>
                                    <BiSolidCoffeeBean
                                      style={{ marginRight: '7px' }}
                                      size={20}
                                    />
                                    {item.ul_3}
                                  </li>
                                  <li>
                                    <BiSolidCoffeeBean
                                      style={{ marginRight: '7px' }}
                                      size={20}
                                    />
                                    {item.ul_4}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={`fe_${idx}`}
                            className={`tab-pane fade ${
                              item.id === 1 ? 'active in' : ''
                            }`}
                            id={`nav-${idx + 1}`}
                          >
                            <div className="col-md-6">
                              <div className="overview-feature-content">
                                <h6>{item.featureHeading}</h6>
                                <p>{item.content}</p>
                                <ul className="overview-list">
                                  <li>
                                    <span className="ti-vector"></span>
                                    {item.ul_1}
                                  </li>
                                  <li>
                                    <span className="ti-bar-chart"></span>
                                    {item.ul_2}
                                  </li>
                                  <li>
                                    <span className="ti-headphone-alt"></span>
                                    {item.ul_3}
                                  </li>
                                  <li>
                                    <span className="ti-cup"></span>
                                    {item.ul_4}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="overview-feature-content-image">
                                <img
                                  src={item.featureImage}
                                  alt=""
                                  className="img-responsive"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-shape">
            <img src={this.props.shapeImage} alt="" />
          </div>
        </section>
      </div>
    );
  }
}
export default Feature;
