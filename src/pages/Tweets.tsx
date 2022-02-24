import { useState } from "react";
import { Tweet } from "../components/Tweet";

export function Tweets() {

  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function createTweet() {
    let tweet = 'Tweet ' + (tweets.length + 1)
  
    setTweets([...tweets, tweet])
  }

  return (
    <>
      {
        tweets.map(tweet => {
          return <Tweet text={tweet} />
        })
      }
      <button
       onClick={createTweet}
       style={{
         backgroundColor: '#8257e6',
         border: 0,
         padding: '6px 12px',
         color: '#FFF'
       }}
      >
        Add tweet
      </button>
    </>
  );
};
