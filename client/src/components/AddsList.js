import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

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
    

    render(){
        const {adds} = this.props 
        return (
            <div>
        <h1>All adds</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { adds.map(add => (<tr key={add.id}>
              <td>{add.title}</td>
              <td>{add.description}</td>
              <td>&euro; {add.price}.00</td>
            </tr>)) }
          </tbody>
				</table>
      </div>
    )
  }
}

export default AddsList
        
    
