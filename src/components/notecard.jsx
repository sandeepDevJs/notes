import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotesAction } from '../Actions/note'
import _ from "lodash"

class Notecard extends Component {

    componentDidMount(){
        this.props.fetchNotesAction()
    }

    render() {

        if (!this.props.items) {
            return <h1>Loading....</h1>
        }

        return (

            _.map(this.props.items, (value) => {
                return (
                    <div className="row">
                        <div class="col-md-12">
                            <div className="card text-left">
                                <div className="card-body">
                                    <h4 className="card-title">{value.title}</h4>
                                    <p className="card-text">{value.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

const mapStateToProps = state =>{
    // console.log(state)
    return { items: state.notes }
}

export default connect(mapStateToProps, {fetchNotesAction})(Notecard)