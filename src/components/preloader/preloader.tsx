import React from 'react';
import ReactLoading from "react-loading";

const Preloader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-height--100vh">
            <ReactLoading type={"bubbles"} color="#0088ff" height={'40px'} width={'40px'}/>
        </div>
    );
};

export default Preloader;
