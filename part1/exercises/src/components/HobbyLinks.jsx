import React from 'react';
import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
    let hobbyLinks = [
        "https://stitchonomy.nl/home-en/",
        "https://thepostmansknock.com/blog/"
    ]

    return (
        <div>
            <h3 className={classes.hobbyHeading}>My Hobbies</h3>
            <p><a href={hobbyLinks[0]}>Cross Stitch at Stitchonomy</a></p>
            <p><a href={hobbyLinks[1]}>Calligraphy at The Postman's Knock</a></p>
        </div>
    );

}