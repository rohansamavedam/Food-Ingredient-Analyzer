import React from 'react';

const ContentDisplay = ( { contents } ) => {
    return (
        <div>
            <ul>
                {contents.map((value, index) => {
                    return <div className='center' key={index}>
                        {value.name}
                        <div className='center'>{`${(value.value * 100).toFixed(2)}% Chance`}</div>
                    </div>
                })}
            </ul>
        </div>
    )
}

export default ContentDisplay;