import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";

const platformIcons = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  instagram: instagramIcon,
  youtube: youtubeIcon,
};

const formatCount = (num) => {
  if (num >= 10000) {
    return (num / 1000).toFixed(1).replace(".0", "") + "k";
  }

  return num.toString();
};

export default function OverviewCard({ item }) {
  return (
    <div className="overview-card">
      <div className="overview-header">
        <h2 className="overview-metric">{item.metric}</h2>
        <img src={platformIcons[item.platform]} alt={item.platform} className="overview-icon" />
      </div>
      <div className="overview-footer">
        <h1 className="overview-count">{formatCount(item.count)}</h1>
        <p className={`overview-change ${item.changePercent > 0 ? "positive" : "negative"}`}>
          <img src={item.changePercent > 0 ? upIcon : downIcon} alt="trend icon" />
          {Math.abs(item.changePercent)}%
        </p>
      </div>
    </div>
  );
}
