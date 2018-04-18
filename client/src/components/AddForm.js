import React, {PureComponent} from 'react'

class AddForm extends PureComponent {
    state ={}

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
    const {id, value} = event.target

    this.setState({
        [id]: value
    })
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
            <div>
					<label htmlFor="name">Add Title</label>
					<input title="title" id="title" value={
						this.state.title || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Add Description</label>
					<input name="description" id="description" value={
						this.state.description || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="picture">Add Picture</label>
					<input name="picture" id="picture" value={
						this.state.picture || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Add Price</label>
					<input name="price" id="price" value={
						this.state.price || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="email">Add Email</label>
					<input name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="phone">Add Phonenumber</label>
					<input name="phone" id="phone" value={
						this.state.phone || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
        )
    }
}
 export default AddForm