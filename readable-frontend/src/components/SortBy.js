import React from 'react'

class SortBy extends React.Component {
    state = {
        value: this.props.value,
    }
    handleChange = (event) => {
        
        this.setState(() => ({
            value: event.target.value
        }), ()=> { console.log(this.state.value) 
            this.props.onHandleSort(this.state.value)})
    }
    render() {
        return (
            <div>
                <form>
                    <label>Sort by: </label>
                    <select value = {this.state.value} onChange = {this.handleChange}>
                        <option value = 'featured' selected>Featured</option>
                        <option value = 'most-recent' >Date (most recent first)</option>
                        <option value = 'less-recent'>Date (less recent first)</option>
                        <option value = 'highest-votes'>Votes (highest first)</option>
                        <option value = 'lowest-votes'>Votes (lowest first)</option>

                    </select>
                </form>
            </div>
        )
    }
}
export default SortBy;