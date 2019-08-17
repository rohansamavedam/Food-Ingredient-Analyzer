import React from 'react';

const ImageDisplay = ( { imageUrl } ) => {
    return (
        <div className='ma center'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='uploaded-pic'  src={imageUrl} width='500px' height='300px' />
            </div>
        </div>
    )
}

export default ImageDisplay;