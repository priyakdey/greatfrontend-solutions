import "./Tweet.css";
import TweetBody from "../TweetBody/TweetBody.jsx";

function Tweet(props) {
  const { imageUrl, ...rest } = props;
  // This is to make sure the URL is unique so that the image is prefetched
  const uniqueImageUrl = `${imageUrl}&timestamp=${new Date().getTime()}`;

  return (
    <div className="tweet">
      <img
        src={uniqueImageUrl}
        alt="user avatar"
        className="thumbnail"
      />
      <div className="tweet-body">
        <TweetBody {...rest} />
      </div>
    </div>
  );
}

export default Tweet;