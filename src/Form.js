import React, {Component} from "react";

class Form extends Component {
    initialState = {
        name: '',
        job: ''
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;
      
        return (
          <form className="mb-3">            
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Name"
                  className="form-control" />
              </div>      
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <input
                type="text"
                name="job"
                id="job"
                value={job}
                placeholder="Job"
                onChange={this.handleChange}
                className="form-control" />
              </div>      
            </div>

            <input type="button" value="Submit" onClick={this.submitForm} className="btn btn-primary"/>
          </form>
        );
    }
}

export default Form;