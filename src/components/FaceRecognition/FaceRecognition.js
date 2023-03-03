import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boxes}) => {
  return (
    <div className="center ma">
      <div className="absolute mt4">
        <img id="inputimage" src={imageUrl} alt="" width="800px" height="auto"/>
        {
          boxes.map(box => {
            return <div key={box.id} className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} />
          })
        }
      </div>
    </div>
  )
}

export default FaceRecognition;
