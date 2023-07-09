import React, { Component } from 'react';
import { BsInstagram } from 'react-icons/bs';

class Footer extends Component {
  state = {
    data: [
      //   {
      //     id: 1,
      //     iconClass: 'fa fa-facebook',
      //     link: '/',
      //   },
      //   {
      //     id: 2,
      //     iconClass: 'fa fa-twitter',
      //     link: '/',
      //   },
      //   {
      //     id: 3,
      //     iconClass: 'fa fa-linkedin',
      //     link: '/',
      //   },
      //   {
      //     id: 4,
      //     iconClass: 'fa fa-google-plus',
      //     link: '/',
      //   },
      {
        id: 5,
        iconClass: <BsInstagram style={{ color: '#EA5B27' }} size={30} />,
        link: 'https://instagram.com/vilcahemp?igshid=MzRlODBiNWFlZA==',
      },
    ],
    initData: { image: '/img/logocolor.png' },
  };

  render() {
    return (
      <footer className="footer-section bg-secondary ptb-60">
        <div className="footer-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="footer-single-col text-center">
                  <img
                    src={this.state.initData.image}
                    alt=""
                    style={{ height: '20vh' }}
                  />
                  <div className="footer-social-list">
                    <ul className="list-inline">
                      {this.state.data.map((item, idx) => {
                        return (
                          //   <li key={`fo_${idx}`}>
                          <a href={item.link}>
                            {' '}
                            <span>{item.iconClass}</span>
                          </a>
                          //   </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="copyright-text">
                    <p>&copy; Vilcahemp todos los derechos reservados 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
