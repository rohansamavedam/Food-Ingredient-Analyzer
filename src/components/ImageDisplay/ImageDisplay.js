import React from 'react';

const ImageDisplay = ( { imageUrl } ) => {
    return (
        <div className='ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='uploaded-pic'  src={imageUrl} width='500px' height='auto'/>
            </div>
        </div>
    )
}

export default ImageDisplay;