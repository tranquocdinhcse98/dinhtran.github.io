import React from 'react';

const ContentBox = (props) => {
    return (
        <div>
            <div className="box-img">
                <img src={props.image} alt="Calender icon"/>
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link} className="btn info">Read more</a>
            </div>
        </div>
    )
}

export default ContentBox;