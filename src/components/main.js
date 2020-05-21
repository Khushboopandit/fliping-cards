import React from "react";
import "../css/main.css";

// static
const giftList = [
  <p>10% Off Next Purchase</p>,
  <p>$50</p>,
  <img src="sad-emoji.png" className="img-size" />,
];

class Main extends React.Component {
  state = {
    show_index: [null, null, null, null, null, null, null, null, null],
  };

  // change index of list to get random gift cards
  getRandomGift(index) {
    let i = Math.floor(Math.random() * giftList.length),
      set_index = this.state.show_index;
    set_index[index] = i;
    this.setState({ show_index: set_index });
  }
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="card-header">
            <h6>Try to win a 10% Off Next Purchase</h6>
          </div>
          <div className="card-body">
            <div className="row">
              {/* rendering cards in loop */}
              {new Array(9).fill().map((_, i) => {
                return (
                  <div className="column" key={i}>
                    {this.state.show_index[i] != null ? (
                      <div className="card">
                        <div className="card-box">
                          {giftList[this.state.show_index[i]]}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="card gift card__face--back"
                        onClick={() => this.getRandomGift(i)}
                      >
                        <div className="card-box card-border">
                          <img src="gift.png" className="img-size" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
