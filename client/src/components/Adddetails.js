import React, {PureComponent} from 'react'
// import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'


class AddDetails extends PureComponent {
  componentWillMount(props) {
    this.props.fetchAdd(this.props.match.params.id)
  } 
    render() {
      const {add} = this.props
      if (!add) return null
      
      return (
        <div>
          <h1>{ add.title }</h1>
         <div> <img src='https://prodimage.images-bn.com/pimages/9780545162074_p0_v2_s550x406.jpg' alt={add.title} style={{maxWidth:200 + 'px'}}/> :null}</div>
         <p>{add.description}</p>
         <p>{add.email}</p>
         <p>{add.phone}</p>
        </div>
      )
    }
  }
  
  const mapStateToProps = function (state, props) {
    return {
      adds: state.add
    }
  }
  
  export default connect(mapStateToProps)(AddDetails)