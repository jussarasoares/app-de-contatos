import React from "react";
import Button from "./Button";
import ButtonFilter from "./ButtonFilter";

class Filters extends React.Component {
  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
            />

            <Button className="filters__search__icon" icon="search" />
          </div>

          <ButtonFilter label="Nome" isSelected />

          <ButtonFilter label="País" />

          <ButtonFilter label="Empresa" />

          <ButtonFilter label="Departamento" />

          <ButtonFilter label="Data de admissão" />
        </section>
      </div>
    );
  }
}

export default Filters;
