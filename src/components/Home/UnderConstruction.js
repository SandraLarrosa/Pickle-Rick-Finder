import React from 'react';
import Pickle from './Pickle';
import '../../stylesheets/backgroundSpace.scss';
import '../../stylesheets/underConstruction.scss';


const UnderConstruction = () => {
  return (
    <div className='underConstruction'>
      <div className='stars--Home'></div>
      <div className='twinkling--Home'></div>
      <div className='clouds--Home'></div>
      <h1 className="underConstruction__title">Site Under Construction</h1>
      <p className="underConstruction__text">
        While you wait ...
        <span>I'll leave you with Picke Ricky</span>
      </p>
      <Pickle />
    </div>
  );
};

export default UnderConstruction;
