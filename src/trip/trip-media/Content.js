import { Paper } from "@material-ui/core";
import React from "react";
import DragAndDrop from "./DragAndDrop";

class Content extends React.Component {
  /**
   * Constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
    this.fetchLinks();
  }

  componentDidUpdate() {
    if (this.props.currDate != this.currDateTmp) {
      this.fetchLinks();
      this.currDateTmp = this.props.currDate;
    }
  }

  handleDrop = (files) => {
    let selectedFile = files[0];
    const formData = new FormData();

    formData.append("file", selectedFile);
    formData.append("year", this.props.currDate.getFullYear());
    formData.append("month", this.props.currDate.getMonth());
    formData.append("day", this.props.currDate.getDate());

    fetch("http://localhost:8888/addMedia", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        this.fetchLinks();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  fetchLinks = () => {
    fetch(
      "http://localhost:8888/getMedias?" +
        new URLSearchParams({
          year: this.props.currDate.getFullYear(),
          month: this.props.currDate.getMonth(),
          day: this.props.currDate.getDate(),
        }),
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        this.setState({
          links: result.links,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <div className="media--content-wrapper">
          {this.state.links.map(function (link, i) {
            return (
              <Paper className="media--content-item" elevation={2}>
                <img src={link} width="100" height="100" key={i} />
              </Paper>
            );
          })}
        </div>
      </DragAndDrop>
    );
  }
}

export default Content;
