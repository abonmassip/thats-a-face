import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3 mb3">
        {`Hi ${name}! you current entry count is `}
        <span className="white f1">{`${entries}`}</span>
      </div>
    </div>
  )
}

export default Rank;
