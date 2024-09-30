import React from "react";

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: {
        summer: {
          text: "Let's hit a beach!",
          iconName: "sun",
        },
        winter: {
          text: "Burr, it's chilly!",
          iconName: "snowflake",
        },
      },
      monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      currentMonthName: '',
    }
  }

  componentDidMount() {
    const currentMonthName = this.state.monthNames[new Date().getMonth()]
    this.setState({currentMonthName})
  }

  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  };

  render () {
    const season = this.getSeason(this.props.lat, new Date().getMonth());
    const { text, iconName } = this.state.seasons[season];

    return (
      <div>
        <div className={`${season} season-display`}>
          <i className={`${iconName} icon massive icon-left`} />
          <h1>{text}</h1>
          <i className={`${iconName} icon massive icon-right`} />
        </div>
        <div className="info">
          <p>
            You located in {season === "summer" ? "sunny" : "chilly"} place!
          </p>
          <p>
            Enjoy your time in <span>{this.state.currentMonthName}</span>
          </p>
        </div>
      </div>
    );
  }
};

export default SeasonDisplay;
