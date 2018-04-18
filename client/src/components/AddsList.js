import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllAdds, createAdd} from '../actions/adds'
import {Link} from 'react-router-dom'
import AddForm from './AddForm'
import './AddsList.css'

class AddsList extends PureComponent {
    // static propTypes = {
    //     adds: PropTypes.arrayOf(PropTypes.shape({
    //         id: PropTypes.number.isRequired,
    //         title: PropTypes.string.isRequired,
    //         description: PropTypes.string.isRequired,
    //         picture: PropTypes.string.isRequired,
    //         price: PropTypes.number.isRequired,
    //         email: PropTypes.string.isRequired,
    //         phone: PropTypes.number.isRequired
    //     })).isRequired
    
    componentWillMount() {
      this.props.fetchAllAdds()
    }
    createAdd = (add) => {
      this.props.createAdd(add)
    }
    
    render(){
        const {adds} = this.props 
        return (
            <div className='AddsListDiv'>
        <h1>All adds</h1>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { adds.map(add => (<tr key={add.id}>
              <td><Link to={`/adds/${add.id}`}>{add.title}</Link>
              </td>
              <td>{add.description}</td>
              <td>&euro; {add.price}.00</td>
            </tr>)) }
          </tbody>
				</table>
        <h1>Create a new Add</h1>
        <AddForm onSubmit={this.createAdd} />
      </div>
    )
  }
}



const mapStateToProps = function (state) {
  return {
    adds: state.adds
  }
}

export default connect(mapStateToProps, {
  fetchAllAdds,
  createAdd
})(AddsList)
        
    
