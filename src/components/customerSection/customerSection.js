import React from 'react';

const Images = [
  { id: 1, image: 'img/image00001.png' },
  { id: 2, image: 'img/image00002.png' },
  { id: 3, image: 'img/image00003.png' },
  { id: 4, image: 'img/image00004.png' },
  { id: 5, image: 'img/image00005.png' },
  { id: 6, image: 'img/image00006.png' },
  { id: 7, image: 'img/image00007.png' },
  { id: 4, image: 'img/image00008.png' },
];

class CustomerSection extends React.Component {
  state = {
    Images: [],
  };

  componentDidMount() {
    this.setState({
      Images: Images,
    });
  }

  render() {
    return (
      <div>
        {/* start customers section */}
        <div className="customers-section pt-40">
          <div className="customers-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <div className="higlight-text">
                    <p>
                      <strong>Encuéntranos</strong> En los siguientes puntos de
                      venta:
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-8">
                  <div className="customers-content">
                    <div className="owl-carousel owl-theme customers-slider">
                      {this.state.Images.map((item, idx) => {
                        return (
                          <div
                            key={`customer_${idx}`}
                            className={
                              item.id === 4 ? 'black-background item' : 'item'
                            }
                            // className="item"
                            // style={{ backgroundColor: 'black' }}
                          >
                            <img src={item.image} alt="client logo" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end customers section */}
      </div>
    );
  }
}
export default CustomerSection;
