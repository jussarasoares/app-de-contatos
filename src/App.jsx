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
    };
  }

  componentDidMount() {
    getContacts().then((data) => {
      this.setState({ contacts: data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts>
          {this.state.contacts.map((contact) => (
            <Contact data={contact} />
          ))}
        </Contacts>
      </React.Fragment>
    );
  }
}

export default App;
