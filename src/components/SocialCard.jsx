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

const formatFollowers = (num) => {
  if (num >= 10000) {
    return (num / 1000).toFixed(1).replace(".0", "") + "k";
  }

  return num.toString();
};

export default function SocialCard({ item }) {
  return (
    <div className={`social-card ${item.platform}`}>
      <div className="wrapper">
        <img src={platformIcons[item.platform]} alt={item.platform} />
        <p className="username">{item.username}</p>
      </div>
      <h1 className="followers">{formatFollowers(item.followers)}</h1>
      <h2 className="type">{item.type}</h2>
      <p
        className={`total-change ${
          item.todayChange > 0 ? "positive" : "negative"
        }`}
      >
        <img src={item.todayChange > 0 ? upIcon : downIcon} alt="trend icon" />
        {Math.abs(item.todayChange)} Today
      </p>
    </div>
  );
}
