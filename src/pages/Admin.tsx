import React, { useState } from "react";
import "../styles/admin.css";
import AddProductModal from "../components/modals/AddProductModal";

const Admin = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="admin">
            <AddProductModal show={show} setShow={setShow} />
            <button onClick={() => setShow(true)}>Добавить товар</button>
        </div>
    );
};

export default Admin;
