import React, { Component } from "react";
import Loading from "./Loading";
import Panel from "./Panel";

import classnames from "classnames";
const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];


class Dashboard extends Component {
  
  state = {
    loading: false,
    focused: null,
  };
  
  selectPanel(id) {
    this.setState(prevState => ({
      focused: prevState.focused !== null ? null : id
    }));
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });


    const parsedData = 
    data.filter(
      panel => this.state.focused === null || this.state.focused === panel.id
    )
    .map(panel => (
      <Panel 
        key={panel.id}
        label={panel.label}
        value={panel.value}
        onSelect={e => this.selectPanel(panel.id)}
      />
    ));


    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses}>
      {parsedData}
    </main>;
  }
}

export default Dashboard;
