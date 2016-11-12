const React = require('react');
const { Component } = require('react');

// class Filter extends Component {
//   constructor() {
//     super();
// 
//     this.state = {
//       filters: []
//     };
// 
//     this.fetchFilters = this.fetchFilters.bind(this);
//   }
// 
//   componentWillMount() {
//     this.fetchFilters();
//   }
// 
//   fetchFilters() {
//     fetch('/api/fruit_types')
//       .then(res => res.json())
//       .then(filters => this.setState({filters: filters}));
//   }
// 
//   render() {
const Filter = props => (
    // return (
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    // );
  // }
)

Filter.defaultProps = {
  filters: [],
  handleChange: () => {
    
  }
}

module.exports = Filter;
