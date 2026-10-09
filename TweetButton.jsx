import React from 'react';

export function TweetButton() {
    const tweetURL = "https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20app!&url=https://example.com";

    return (
        <div><a href={tweetURL} target="_blank">Send a thank you tweet</a></div>
    );
}