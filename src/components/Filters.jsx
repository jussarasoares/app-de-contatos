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
    const { handleFilter, handleSearch } = this.props;

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
              onClick={() => handleSearch(this.state.value)}
            />
          </div>

          <ButtonFilter
            label="Nome"
            onClick={() => handleFilter("name")}
            isSelected={this.isSelected("name")}
          />

          <ButtonFilter
            label="País"
            onClick={() => handleFilter("country")}
            isSelected={this.isSelected("country")}
          />

          <ButtonFilter
            label="Empresa"
            onClick={() => handleFilter("company")}
            isSelected={this.isSelected("company")}
          />

          <ButtonFilter
            label="Departamento"
            onClick={() => handleFilter("department")}
            isSelected={this.isSelected("department")}
          />

          <ButtonFilter
            label="Data de admissão"
            onClick={() => handleFilter("admissionDate")}
            isSelected={this.isSelected("admissionDate")}
          />
        </section>
      </div>
    );
  }
}

export default Filters;
