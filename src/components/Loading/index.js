import React from 'react';

const Loading = (props) => {
    return (
        props.show ? (
            <div className="flex-container">
                <div className="unit">
                    <div className="heart">
                        <div className="heart-piece-0"/>
                        <div className="heart-piece-1"/>
                        <div className="heart-piece-2"/>
                        <div className="heart-piece-3"/>
                        <div className="heart-piece-4"/>
                        <div className="heart-piece-5"/>
                        <div className="heart-piece-6"/>
                        <div className="heart-piece-7"/>
                        <div className="heart-piece-8"/>
                    </div>
                    <p>Loading...</p>
                </div>
            </div>
        ) : null
    )
}

export default Loading;