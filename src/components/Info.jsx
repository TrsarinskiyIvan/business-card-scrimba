import React from "react";

export function Info() {
    return (
        <div className="info">
            <img className="info__photo" src="./photo.png" alt="photo" />
            <h1 className="info__title">Ivan Tsarinskiy</h1>
            <h2 className="info__developer">Frontend developer</h2>
            <p className="info__website">ivantsarinskiy.website</p>
            <div className="info-wrapper">
                <a className="info__send-mail" href="mailto:itsarinskiy@gmail.com"><img src="./email.png" /> Send Email</a>
            </div>
        </div>
    );
}