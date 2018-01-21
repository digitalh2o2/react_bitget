import React from "react";

class Websites extends React.Component {
  constructor(props) {
    super(props);

    this.websiteIcon = this.websiteIcon.bind(this);
  }

  websiteIcon(site) {
    switch (site.category) {
      case (1, 2):
        return (
          <a key={site.category} href={site.url}>
            <i className="fas fa-external-link-alt fa-2x" />
          </a>
        );
        break;
      case 3:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-wikipedia-w fa-2x" />
          </a>
        );
        break;
      case 4:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-facebook fa-2x" />
          </a>
        );
        break;
      case 5:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-twitter-square fa-2x" />
          </a>
        );
        break;
      case 6:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-twitch fa-2x" />
          </a>
        );
        break;
      case 8:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-instagram fa-2x" />
          </a>
        );
        break;
      case 9:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-youtube-square fa-2x" />
          </a>
        );
        break;
      case 10:
        return (
          <a key={site.category} href={site.url}>
            <i className="fas fa-mobile fa-2x" />
          </a>
        );
        break;
      case 11:
        return (
          <a key={site.category} href={site.url}>
            <i className="fas fa-tablet fa-2x" />
          </a>
        );
        break;
      case 12:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-android fa-2x" />
          </a>
        );
        break;
      case 13:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-steam-square fa-2x" />
          </a>
        );
        break;
      default:
        console.log("others");
        break;
    }
  }

  render() {
    return (
      <div className="website-icons">
        {this.props.game.websites.map((site, index) => {
          {
            return this.websiteIcon(site);
          }
        })}
      </div>
    );
  }
}

export default Websites;
