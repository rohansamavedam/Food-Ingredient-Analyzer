import React from 'react'

const ImageForm = (props) => {
    return (
        <div>
            <div className='center'>
                <div className='pa4 br2 shadow-2 w-50 center baseBack'>
                    <form id="myForm">
                        <input className='f4 pa2 w-70 center ma1' type='text' placeholder='image url here'
                            onChange = {props.onInputChange}
                        />
                    </form>
                    <button className='w-30 f4 link pv2 dib white bg-light-green ma1 pointer grow'
                        onClick = {props.onButtonSubmit}
                    >Detect</button>
                    <button className='w-30 f4 link pv2 dib white bg-light-green ma1 pointer grow'
                        onClick = {props.onClearSubmit}
                    >Clear</button>
                </div>
            </div>
        </div>
    )
}

export default ImageForm