import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["name"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["gender"] = "";
          fields["height"] = "";
          fields["weight"] = "";
          fields["age"] = "";
          fields["bloodgroup"] = "";
          fields["allergies"] = "";
          fields["lastdonation"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
      }

      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter characters from a-z only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["phone"]) {
        formIsValid = false;
        errors["phone"] = "*Please enter your mobile no.";
      }

      if (typeof fields["phone"] !== "undefined") {
        if (!fields["phone"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["phone"] = "*Please enter valid phone no.";
        }
      }


      if (!fields["gender"]) {
        formIsValid = false;
        errors["gender"] = "*Please enter your gender (male or female).";
      }

      if (typeof fields["gender"] !== "undefined") {
        if (!fields["gender"].match(/^(?:m|M|male|Male|f|F|female|Female)$/)) {
          formIsValid = false;
          errors["gender"] = "*Please enter male or female.";
        }
      }

      if (!fields["height"]) {
        formIsValid = false;
        errors["height"] = "*Please enter your height in cms";
      }

      if (typeof fields["height"] !== "undefined") {
        if (!fields["height"].match(/^[0-9]{2}$/)) {
          formIsValid = false;
          errors["height"] = "*Please enter valid height";
        }
      }

      if (!fields["weight"]) {
        formIsValid = false;
        errors["weight"] = "*Please enter your weight in kgs";
      }

      if (typeof fields["weight"] !== "undefined") {
        if (!fields["weight"].match(/^[0-9]{2}$/)) {
          formIsValid = false;
          errors["weight"] = "*Please enter valid weight";
        }
      }

      if (!fields["age"]) {
        formIsValid = false;
        errors["age"] = "*Please enter your age";
      }

      if (typeof fields["age"] !== "undefined") {
        if (!fields["age"].match(/^[0-9]{2}$/)) {
          formIsValid = false;
          errors["age"] = "*Please enter valid number between 10-99";
        }
      }

      if (!fields["bloodgroup"]) {
        formIsValid = false;
        errors["bloodgroup"] = "*Please enter your bloodgroup";
      }

      if (typeof fields["bloodgroup"] !== "undefined") {
        if (!fields["bloodgroup"].match(/(A|B|AB|O)[+-]/)) {
          formIsValid = false;
          errors["bloodgroup"] = "*Please enter valid blood group. Example: AB+";
        }
      }

      if (!fields["lastdonation"]) {
        formIsValid = false;
        errors["lastdonation"] = "*Please enter your last donation date.";
      }

      if (typeof fields["lastdonation"] !== "undefined") {
        if (!fields["lastdonation"].match(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/)) {
          formIsValid = false;
          errors["lastdonation"] = "*Please enter your last donation date. Example: yyyy/mm/dd";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Blood donation registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name</label>
        <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.name}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Gender:</label>
        <input type="text" name="gender" value={this.state.fields.gender} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.gender}</div>
        <label>Height:</label>
        <input type="text" name="height" value={this.state.fields.height} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.height}</div>
        <label>Weight:</label>
        <input type="text" name="weight" value={this.state.fields.weight} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.weight}</div>
        <label>Age:</label>
        <input type="text" name="age" value={this.state.fields.age} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.age}</div>
        <label>Bloodgroup:</label>
        <input type="text" name="bloodgroup" value={this.state.fields.bloodgroup} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.bloodgroup}</div>
        <label>Last Donation:</label>
        <input type="text" name="lastdonation" value={this.state.fields.lastdonation} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.lastdonation}</div>      

        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;
