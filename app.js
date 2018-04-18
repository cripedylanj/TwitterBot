var Twit = require('twit');
console.log('Bot is starting...');
var T = new Twit({
    consumer_key: '6b3SG2g4cBzmpXbWcWAYvmr0t',
    consumer_secret: 'Huj8fwPEMrqRCl5BV45p0JqWw3UUsYXh34PvPbhVamf45f5kcv',
    access_token: '986375275134013440-NSfaOQaEXFIiaUwr8gSNKBFyhE568zT',
    access_token_secret: '47fEB4HvbVJTryDo9fjMy7QHMyn6mypmhv2CkXgHS8VmK',
});

favTweets(3);

function tweet(txt) {
    T.post('statuses/update', { status: txt }, function (err, data, response) {
        if (!err) {
            console.log("Tweet sent!");
        }
    });
}

function favTweet(tweetID) {
    T.post('favorites/create', { id: tweetID }, function (err, data, response) {
        if (!err) {
            console.log("Tweet favorited!");
            console.log("The tweet you favorited: " + data.text);
        } else {
            console.log(err.message);
        }
    });
}

function favTweets(numTweets) {
    var params = {
        q: 'from:cripeloganb',
        since: 2018-01-16,
        count: numTweets
    }
    T.get('search/tweets', params, function (err, data, response) {
        var i = 0;
        while (i < numTweets) {
            favTweet(data.statuses[i].id_str);
            i++;
        }
    });
}

function getTweets(numTweets) {
    var params = {
        q: 'from:HC_Ellis',
        trim_user: true,
        since: 2018 - 01 - 16,
        count: numTweets
    }
    T.get('search/tweets', params, function (err, data, response) {
        var i = 0;
        while (i < numTweets) {
            console.log(data.statuses[i].text);
            console.log(i);
            i++;
        }
    });
}