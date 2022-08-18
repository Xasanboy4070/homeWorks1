import { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Input from "../components/common/input";
import Movies from "./movies";

class Add extends Component {
  state = {
    title: "",
    genre: "",
    stock: 0,
    rate: 0,
  };

  handleSubmit() {
    <Switch>
      <Route
        path="/movies"
        render={(props) => <Movies {...props.match.params} />}
      />
    </Switch>;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
        <h1>Add Movies</h1>
        <form>
          <Input
            name="title"
            label="Title"
            placeholder="Enter your title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Input
            name="genre"
            label="Genre"
            placeholder="Enter your genre"
            value={this.state.genre}
            onChange={this.handleChange}
          />
          <Input
            name="stock"
            label="Stock"
            type="number"
            placeholder="Enter your stock"
            value={this.state.stock}
            onChange={this.handleChange}
          />
          <Input
            name="rate"
            label="Rate"
            placeholder="Enter your rate"
            type="number"
            value={this.state.rate}
            onChange={this.handleChange}
          />
        </form>
        {}
        <button onClick={this.handleSubmit} className="btn btn-dark">
          <Link to="/movies">Submit</Link>
        </button>
      </>
    );
  }
}

export default Add;
