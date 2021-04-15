import React from 'react';
import Header from './header';
import Footer from './footer-nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'homepage',
        params: {}
      },
      alcohol: null,
      location: {
        city: null,
        state: null
      },
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }



  render() {
    return (
      <div className={`${this.state.view.name} container`}>
        <Header />
        <h1>Feeling thirsty?</h1>
        <div className="button-container">
          <button className="">Yes</button>
          <button className="">No</button>
        </div>
      </div>
    )
  }
}

export default App;
