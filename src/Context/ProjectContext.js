import React, { createContext } from "react";

const Context = createContext();
export class ProjectContext extends React.Component {
  state = {
    countryList: [{ countryName: "india" }]
  };
  handleCountry({ countryList }) {
    this.setState(countryList);
  }
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleCountry: this.handleCountry
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
