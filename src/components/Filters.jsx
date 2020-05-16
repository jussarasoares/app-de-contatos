import React from "react";
import Button from "./Button";
import ButtonFilter from "./ButtonFilter";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  isSelected(order) {
    return this.props.order === order;
  }

  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.state.value}
              onChange={this.handleChange}
            />

            <Button
              className="filters__search__icon"
              icon="search"
              onClick={() => this.props.handleSearch(this.state.value)}
            />
          </div>

          <ButtonFilter
            label="Nome"
            onClick={() => this.props.handleFilter("name")}
            isSelected={this.isSelected("name")}
          />

          <ButtonFilter
            label="País"
            onClick={() => this.props.handleFilter("country")}
            isSelected={this.isSelected("country")}
          />

          <ButtonFilter
            label="Empresa"
            onClick={() => this.props.handleFilter("company")}
            isSelected={this.isSelected("company")}
          />

          <ButtonFilter
            label="Departamento"
            onClick={() => this.props.handleFilter("department")}
            isSelected={this.isSelected("department")}
          />

          <ButtonFilter
            label="Data de admissão"
            onClick={() => this.props.handleFilter("admissionDate")}
            isSelected={this.isSelected("admissionDate")}
          />
        </section>
      </div>
    );
  }
}

export default Filters;
