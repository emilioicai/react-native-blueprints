import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class ProductsList extends React.Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products;
    console.log('-----------', this.props ,'-----------')
    return null;
  }
}

function mapStateToProps(state) { return { products: state.productsReducer.products } }
function mapStateActionsToProps(dispatch) { return bindActionCreators(Actions, dispatch) }

export default connect(mapStateToProps, mapStateActionsToProps)(ProductsList);