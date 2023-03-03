import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit, input }) => {
  return (
    <div>
      <div className="form center pa4 br3 shadow-5 flex flex-column">
        <div>
          <p className="f4 mt0 mb3">
            {'Give me an image and I will detect any faces on it'}
          </p>
        </div>
        <div className="shadow-5">
          <input
            placeholder="url/image.jpg"
            className="w-70 f4 pa2"
            type="text"
            onChange={onInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onPictureSubmit();
              }
            }}
            value={input}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-black"
            onClick={onPictureSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
