import React from "react";
import Toolbar from "./Toolbar";
import Panel from "./Panel";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

class Trip extends React.Component {
  /**
   * Constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      currPanel: "info",
      currDate: new Date(),
    };
    this.toolbarRef = React.createRef();
  }

  updateCurrDate = (stateObj) => {
    this.setState(stateObj);
  }

  updatePanelState = (newPanelState) => {
    this.setState({
      currPanel: newPanelState,
    });
  };

  render() {
    // return <p>trip {this.props.currTripId}</p>;
    return (
      <div>
        <Button
          onClick={() => this.props.setNewView("intro")}
          variant="contained"
          className="back-button trip--back-btn"
          position="absolute"
        >
          <Icon style={{ marginRight: "10px" }}>arrow_back</Icon>go back
        </Button>
        <div className="trip--panels-wrapper">
          <Toolbar
            currDate={this.state.currDate}
            updateCurrDate={this.updateCurrDate}
            updatePanelState={this.updatePanelState}
          ></Toolbar>
          <Panel
            currDate={this.state.currDate}
            currPanel={this.state.currPanel}
          ></Panel>
        </div>
      </div>
    );
  }
}

export default Trip;
