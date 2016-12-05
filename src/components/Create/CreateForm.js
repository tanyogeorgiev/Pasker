import React, { Component } from 'react';

class CreateForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group data-group">
                    <label>
                        Project:
                    </label>
                    <input
                        type="text"
                        name="projectname"
                        value={this.props.username}
                        onChange={this.props.onChange}
                        className="form-control"
                        disabled={this.props.inputDisabled}
                    />
                </div>
                <div className="form-group data-group">
                    <label>
                        Description:
                    </label>
                    <textarea
                        rows="5"
                        name="description"
                        value={this.props.password}
                        onChange={this.props.onChange}
                        className="form-control"
                        disabled={this.props.inputDisabled}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    name="btnLogin"
                    value="Login"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}
                />
            </form>
            
        );
    }
}

export default CreateForm;