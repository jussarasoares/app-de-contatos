import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";
import { getContacts } from "./resources/contact";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      order: "",
      search: "",
    };

    this.setOrder = this.setOrder.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  componentDidMount() {
    getContacts().then((data) => {
      this.setState({ contacts: data });
    });
  }

  setOrder(data) {
    this.setState({ order: data });
  }

  setSearch(text) {
    this.setState({ search: text });
  }

  filterByName(search) {
    return (value) => {
      if (!search) {
        return true;
      }
      return value.name.toLowerCase().includes(search.toLowerCase());
    };
  }

  orderBy(key) {
    return (a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    };
  }

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters
          handleFilter={this.setOrder}
          order={this.state.order}
          handleSearch={this.setSearch}
          search={this.state.search}
        />
        <Contacts>
          {this.state.contacts
            .filter(this.filterByName(this.state.search))
            .sort(this.orderBy(this.state.order))
            .map((contact) => (
              <Contact data={contact} />
            ))}
        </Contacts>
      </div>
    );
  }
}

export default App;
