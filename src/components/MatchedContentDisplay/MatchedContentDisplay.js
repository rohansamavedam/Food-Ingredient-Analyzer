import React from 'react';

const MatchedContentDisplay = ( { matchedContents } ) => {
    return (
        <ul>
            <strong>
            {matchedContents.map((value, index) => {
                return <div className='center' key={index}>
                    {value.name}
                    <div className='center'>{`${(value.value * 100).toFixed(2)}% Chance`}</div>
                </div>
            })}
            </strong>
        </ul>
    )
}

export default MatchedContentDisplay;