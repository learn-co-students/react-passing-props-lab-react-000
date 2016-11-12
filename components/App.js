const React = require('react');

const FruitBasket = require('./FruitBasket');

// const App = () => {
//   return (
//     <FruitBasket />
//   );
// }

class App extends React.Component{
  constructor(){
    super();
    
    this.state = {
      filters: [],
      selectedFilter: null,
      fruit: []
    }
  }
  
  componentWillMount() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }
  
  render(){
    return(
      <FruitBasket />
    )
  }
}

module.exports = App;
