import React, {PureComponent} from 'react'
// import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import {fetchAdd} from '../actions/adds'
import ImageClass from './ImageClass.css'
import './addDetails.css'

class AddDetails extends PureComponent {

  componentWillMount(props) {
    this.props.fetchAdd(this.props.match.params.id)
  } 

  // toggleEdit = () => {
  //   this.setState({
  //     edit: !this.state.edit
  //   })
  // }
    render() {
      const {add} = this.props
      if (!add) return null
      
      return (
        <div className="addDetailsDiv">
          <h1>{ add.title }</h1>
         <img src={add.picture}  alt={add.title} className='imageClass'/>
         <p>{add.description}</p>
         <p>{add.email}</p>
         <p>{add.phone}</p>
        </div>
      )
    }
  }
  
  const mapStateToProps = function (state, props) {
    return {
      add: state.add
    }
  }
  
  export default connect(mapStateToProps, {
    fetchAdd
  }
)(AddDetails)