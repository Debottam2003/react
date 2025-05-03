import React from 'react';

function Gallery(props) {
  return (
    <div className='gallery'>
        {props.gallery.map((url, index)=>{
            return <img className="gallery-image" key={url + index} src={url} alt="gallery" />
        })}
    </div>
  )
}

export default Gallery;