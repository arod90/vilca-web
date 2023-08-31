import React from 'react';

// let bg = '/img/slider.jpg';
// let bgCss = 'no-repeat center center / cover';
// let bgStyle = {
//   background: 'url(' + bg + ')' + bgCss,
// };

let initData = {
  heading: 'Cannabis Sensory Experience',
  content: `En la provincia de Loja, ubicado a 1.700 m s. n. m. se encuentra el valle de Vilcabamba,  un lugar donde es común vivir más de 100 años. ¿El secreto? la calidad de vida, del agua, y de los alimentos de la región, en Vilcahemp buscamos infusionar estos regalos del valle con las bondades del cannabis, a traves de productos de alta calidad.`,
  heroImage: '/img/faq-right.png',
  actionShapeImage: '/img/shape-bg.png',
};

let slider_action_data = [
  //   {
  //     link: 'apple',
  //     btnClass: 'btn softo-solid-btn',
  //     faClass: 'fa fa-apple',
  //     value: 'Appstore',
  //   },
  {
    link: 'android',
    btnClass: 'btn btn-icon',
    faClass: 'fa fa-android',
    value: '',
    id: 1,
  },
  //   {
  //     link: 'windows',
  //     btnClass: 'btn btn-icon',
  //     faClass: 'fa fa-windows',
  //     value: '',
  //   },
];

class HeroSection extends React.Component {
  state = {
    initData: {},
    sliderData: [],
  };
  componentDidMount() {
    this.setState({
      initData: initData,
      sliderData: slider_action_data,
    });
  }

  render() {
    return (
      <div>
        {/* start slider background video section */}
        <div id="hero-section">
          <div className="hero-background-video">
            <div className="video-section-wrap-two">
              <div className="pattern-overlay">
                <div
                  className="player"
                  data-property="{videoURL:'https://www.youtube.com/watch?v=RTMoaqBqskc',containment:'.video-section-wrap-two', autoPlay:true, showControls: false, startAt:0, realfullscreen: true, stopAt: 43, loop:true, mute:true, opacity: 1, 'origin': 'http://localhost:3000'}"
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                      <div className="hero-content text-center">
                        <h1>{this.state.initData.heading}</h1>
                        <p>{this.state.initData.content}</p>
                        <div className="slider-action-btn">
                          {/* {this.state.sliderData.map((item, idx) => {
                            return ( */}
                          <>
                            <img
                              src={'/img/vilca-logo-hoja-naranaja.png'}
                              alt="logo-marca"
                              className="logo-hero"
                            />
                          </>
                          {/* );
                          })} */}
                          {/*                                             
                                            <a href="#" className="btn btn-icon"><i className="fa fa-android"></i></a>
                                            <a href="#" className="btn btn-icon"><i className="fa fa-windows"></i></a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end slider background video section */}
      </div>
    );
  }
}
export default HeroSection;
