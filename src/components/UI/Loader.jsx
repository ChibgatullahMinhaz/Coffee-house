import React from 'react';
import LoaderImage from '../../assets/icons/1.png'

const Loader = () => {
    return (
       <div className="min-h-screen mx-auto flex justify-center items-center flex-col">
      <img src={LoaderImage} alt='Loading........' />
      <p>Coffee is Loading.......</p>
    </div>
    );
};

export default Loader;