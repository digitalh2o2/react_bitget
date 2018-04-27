import React from "react";

class Rating extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }
  render() {
    const { radius, stroke, progress, ratings } = this.props;
    const strokeDashoffset =
      this.circumference - progress / 100 * this.circumference;

    return (
      <div>
        {progress >= 80 ? (
          <svg height={radius * 2} width={radius * 2}>
            <circle
              className="progress-ring__circle"
              stroke="green"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={this.circumference + " " + this.circumference}
              style={{ strokeDashoffset }}
              stroke-width={stroke}
              r={this.normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <text x="43%" y="50%" stroke="black" strokeWidth="1.5px" dy=".3em">
              {Math.ceil(progress)}
            </text>
          </svg>
        ) : (
          <svg height={radius * 2} width={radius * 2}>
            <circle
              className="progress-ring__circle"
              stroke="#209cee"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={this.circumference + " " + this.circumference}
              style={{ strokeDashoffset }}
              strokeWidth={stroke}
              r={this.normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <text x="41%" y="50%" stroke="black" strokeWidth="1.5px" dy=".3em">
              {Math.ceil(progress)}
            </text>
          </svg>
        )}
      </div>
    );
  }
}

export default Rating;
