import Action from "../Action/Action.jsx";
import { Like, Message, ReTweet, Share } from "../Icon/Icon.jsx";

import "./TweetBody.css";

function TweetBody({
                     name,
                     userHandle,
                     postedDate,
                     tweetMessage,
                     messageCount,
                     reTweetCount,
                     likeCount
                   }) {
  return (
    <div className="tweet-body">
      <div className="handles">
        <span className="name">{name}</span>
        <span
          className="metadata">{`@${userHandle}`} &middot; {postedDate}</span>
      </div>
      <div className="tweetMessage">
        {tweetMessage}
      </div>
      <div className="action-row">
        <Action IconComponent={Message} count={messageCount} />
        <Action IconComponent={ReTweet} count={reTweetCount} />
        <Action IconComponent={Like} count={likeCount} />
        <Action IconComponent={Share} />
      </div>
    </div>
  );
}

export default TweetBody;