import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Settings from "./Settings";
import SettingsIcon from "@material-ui/icons/Settings";

class App extends React.Component {
  state = {
    active: "first",
    settings: true,
    photo: false,
    background: false,
    formLeft: false
  };

  handleSelect = e => {
    // console.log(e.target.value);
    this.setState({
      active: e.target.value
    });
  };

  handleSettings = () => {
    // console.log(this.state.settings);
    const { settings } = this.state;
    this.setState({
      settings: !settings
    });
  };

  handlePhoto = () => {
    const { photo } = this.state;
    this.setState({
      photo: !photo
    });
  };

  handleBackground = () => {
    const { background } = this.state;
    this.setState({
      background: !background
    });
  };

  handleFormLeft = () => {
    const { formLeft } = this.state;
    this.setState({
      formLeft: !formLeft
    });
  };

  renderContent = () => {
    const { active, photo, background, formLeft } = this.state;
    switch (active) {
      case "first":
        return <First photo={photo} background={background} />;
      case "second":
        return (
          <Second photo={photo} background={background} formLeft={formLeft} />
        );
      case "third":
        return <Third active={active} background={background} />;
      default:
    }
  };

  render() {
    const { settings, photo, background, active } = this.state;
    return (
      <>
        <div className={background ? "wrapper" : "wrapper bg-gray"}>
          <div className="container-fluid no-padding">
            {settings ? (
              <Settings
                active={active}
                photo={photo}
                background={background}
                handlePhoto={this.handlePhoto}
                handleSelect={this.handleSelect}
                handleSettings={this.handleSettings}
                handleFormLeft={this.handleFormLeft}
                handleBackground={this.handleBackground}
              />
            ) : (
              <div className="show" onClick={this.handleSettings}>
                <SettingsIcon />
              </div>
            )}
            <div className={settings ? "main" : "main"}>
              {this.renderContent()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
