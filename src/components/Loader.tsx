import React from "react";
import "../styles/loader.css";

const Loader = () => {
    return <div className="loader__wrapper">
        <div className="loader"></div>
        <h2>Идет загрузка...</h2>
    </div>;
};

export default Loader;
