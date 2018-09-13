import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class CommentsDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return (
            <div>
                <h2>CommentsDisplay</h2>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject,
        taskSelected : state.EmpData.taskSelected
    };
};
 
export default connect(mapStateToProps)(CommentsDisplay);