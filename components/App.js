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
    
    this.handleFilterChange = this.handleFilterChange.bind(this);
    
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
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }
  
  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }
  
  render(){
    return(
      <FruitBasket 
        fruit={this.state.fruit}
        filters={this.state.filters}
        updateFilterCallback={this.handleFilterChange}
        currentFilter={this.state.selectedFilter}
      />
    )
  }
}

module.exports = App;
