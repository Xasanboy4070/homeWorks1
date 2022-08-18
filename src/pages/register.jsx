import { Component } from "react";
import Input from "../components/common/input";
import { toast } from "react-toastify";

class Register extends Component {
  state = {
    disabled: false,
    user: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
    errors: {},
  };

  validate = () => {
    const { email, password, confirmPassword } = this.state.user;
    const errors = {};
    if (email.trim() === "") errors.email = "Email is required!";

    if (password.trim() === "") errors.password = "Password is required!";
    if (password.trim() !== confirmPassword.trim())
      errors.confirmPassword = "Password is required!";

    return Object.values(errors).length ? errors : false;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });

    const errors = this.validate();

    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }

    const { email, password, confirmPassword } = this.state.user;
    setTimeout(() => {
      toast.success(`Login, user ${email} password ${password}`);
      this.setState({ disabled: false });
    }, 2000);
    if (password === confirmPassword) {
      console.log("ishladi");
    } else {
      console.log("xato");
    }
  };

  validateField = (value, name, confirmPassword, password) => {
    const errors = { ...this.state.errors };
    if (value.trim() === "") errors[name] = name.toCapital() + " is required!";
    else delete errors[name];

    console.log(" pasword ", password);
    console.log("confirm ", confirmPassword);
    console.log("res = ", password.trim() === confirmPassword.trim());
    if (password === confirmPassword.trim())
      errors[name] = name.toCapital() + " is required!";
    else delete errors[name];

    return errors;
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    const errors = this.validateField(
      value,
      name,
      this.state.user.confirmPassword,
      this.state.user.password
    );

    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value }, errors });
  };

  render() {
    const { disabled, user, errors } = this.state;

    return (
      <>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            label="Name"
            placeholder="Enter your name"
            value={user.name}
            onChange={this.handleChange}
            error={errors.name}
          />
          <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={user.email}
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={user.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <Input
            name="confirmPassword"
            label="confirmPassword"
            placeholder="Enter your confirmPassword"
            type="password"
            value={user.confirmPassword}
            onChange={this.handleChange}
            error={errors.confirmPassword}
          />

          <button className="btn btn-primary" disabled={disabled}>
            Register
          </button>
        </form>
      </>
    );
  }
}

export default Register;
