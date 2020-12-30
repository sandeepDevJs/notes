import React from "react"
import { connect } from "react-redux"
import { createNoteAction } from "../Actions/note"

class Pagenote extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            description:""
        }
    }

    handleFormData = (e) => {
        e.preventDefault()
        let data = {
            title:this.state.title,
            description: this.state.description
        }
        // console.log(data)
        this.props.createNoteAction(data)
        alert("Thanks For your note!!")
        this.setState({ title:"", description:""});
    }

    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={this.handleFormData}>
                                <div className="form-group">
                                  <input type="text" 
                                         name="title" 
                                         value={this.state.title} 
                                         className="form-control" 
                                         placeholder="Enter Note Here."
                                         onChange={e=> this.setState({title:e.target.value})}
                                         />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                    className="form-control" 
                                    name="" 
                                    rows="3"
                                    value={this.state.description}
                                    onChange={ e => this.setState({description:e.target.value})}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, {createNoteAction})(Pagenote)