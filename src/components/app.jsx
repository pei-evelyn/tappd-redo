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
    this.determineView = this.determineView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  determineView() {
    let body = null;

    switch (this.state.view.name) {
      case 'homepage':
        body = (
          <>
            <h1>Let's grab a drink.</h1>
            <div className="button-container">
              <button className="">STAY IN</button>
              <button className="">GO OUT</button>
            </div>
          </>
        );
        break;
      // case 'search-breweries':
      //   body = (

      //   );
      //   break;
      // case 'search-recipes':
      //   body = (

      //   );
      //   break;
      // case 'list-breweries':
      //   body = (

      //   );
      //   break;
      // case 'list-recipes':
      //   body = (

      //   );
      //   break;
    }

    return body;
  }

  render() {
    const bodyContent = this.determineView();

    return (
      <div className={`${this.state.view.name} container`}>
        <Header />
        {bodyContent}
      </div>
    )
  }
}

export default App;
