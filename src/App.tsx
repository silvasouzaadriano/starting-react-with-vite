import { useState } from "react";
import { Tweet } from "./components/Tweet";
import './App.css';

function App() {
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
      <button onClick={createTweet}>Add tweet</button>
    </>
  );
}

export default App
