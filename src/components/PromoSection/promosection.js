import React from 'react';
import { FaCannabis } from 'react-icons/fa';
import { RiMentalHealthLine } from 'react-icons/ri';
import { MdEco, MdLocationPin } from 'react-icons/md';

class PromoSection extends React.Component {
  state = {
    data: [
      {
        id: 1,
        heading: 'Derivados de el cáñamo. ',
        content: 'productos derivados de el cáñamo y la  planta de marihuana. ',
        iconClass: <FaCannabis style={{ color: '#EA5B27' }} />,
      },
      {
        id: 2,
        heading: 'Salud y bienestar',
        content:
          'Infusionamos los beneficios fisicos y mentales de esta planta en nuestros productos.',
        iconClass: <RiMentalHealthLine style={{ color: '#EA5B27' }} />,
      },
      {
        id: 3,
        heading: 'Ecologico',
        content:
          'Eco-conscientes y sostenibles en todas las etapas de fabricacion. ',
        iconClass: <MdEco style={{ color: '#EA5B27' }} />,
      },
      {
        id: 4,
        heading: 'Somos Locales',
        content:
          'Marca 100% Ecuatoriana, trabajamos con mano de obra y proveedores locales.',
        iconClass: <MdLocationPin style={{ color: '#EA5B27' }} />,
      },
    ],
  };

  // componentDidMount() {
  //   axios
  //     .get(`${BASE_URL}`)
  //     .then((res) => {
  //       this.setState({
  //         data: res.data.promoData,
  //       });
  //       // console.log(this.state.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <div>
        {/* start promo section */}
        <section className="promo-section ptb-90">
          <div className="promo-section-wrap">
            <div className="container">
              <div className="row">
                {this.state.data.map((item, idx) => {
                  return (
                    <div key={`s_${idx}`} className="col-md-3 col-sm-6">
                      <div className="bg-secondary single-promo-section text-center">
                        <div className="single-promo-content">
                          {/* <span className={item.iconClass}></span> */}
                          <span>{item.iconClass}</span>
                          <h6>{item.heading}</h6>
                          <p>{item.content}</p>
                        </div>
                        <div className="line"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* end promo section */}
      </div>
    );
  }
}

export default PromoSection;
