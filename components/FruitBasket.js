const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

  // handleFilterChange(e) {
  //   console.log('new filter: ', e.target.value);
  //   this.setState({ selectedFilter: e.target.value });
  // }

const FruitBasket = props => (
  <div className="fruit-basket">
    <Filter 
      handleChange={props.updateFilterCallback}
      filters = {props.filters}
    />
    <FilteredFruitList
      filter={props.currentFilter}
      fruit={props.fruit}
    />
  </div>
)

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: '',
  updateFilterCallback: function(){
    
  }
}

module.exports = FruitBasket;
