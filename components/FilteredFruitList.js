const React = require('react');
const { Component } = require('react');

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
// 
//     this.state = {
//       items: []
//     };
//   }
// 
//   componentWillMount() {
//     fetch('/api/fruit')
//       .then(res => res.json())
//       .then(fruit => this.setState({ items: fruit}));
//   }

const FilteredFruitList = props => {
  // render() {
  const list = !props.filter ? props.fruit :
    props.fruit.filter(i => i.fruit_type == props.filter);

  return (
    <ul className="fruit-list">
      {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  );
  // }
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

module.exports = FilteredFruitList;

