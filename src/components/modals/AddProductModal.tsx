import React, { FC, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../styles/modal.css";
import ImageInput from "../ImageInput";
import ProductAPI from "../../API/ProductAPI";

interface AddProductModalProps {
    show: boolean;
    setShow: (boolean: boolean) => void;
}

const AddProductModal: FC<AddProductModalProps> = React.memo(
    ({ show, setShow }) => {
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [price, setPrice] = useState("0");
        const [category, setCategory] = useState("");
        const [brand, setBrand] = useState("");
        const [imgs, setImgs] = useState([{ id: Date.now(), value: "" }]);

        function addImg() {
            setImgs((prev) => [...prev, { id: Date.now(), value: "" }]);
        }

        function editImg(id: number, value: string) {
            setImgs((prev) =>
                prev.map((item) => {
                    if (item.id === id) {
                        return { ...item, value };
                    }
                    return item;
                })
            );
        }

        function addProduct() {
            const newProduct = {
                id: `${Date.now()}`,
                title,
                description,
                price,
                category,
                brand,
                imgs,
            };

            ProductAPI.createProduct(newProduct);
        }

        const handleClose = () => setShow(false);

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить товар</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="inputs">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Название продукта"
                        />
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Описание продукта"
                        />
                        {imgs.map((img, index) => (
                            <ImageInput
                                key={index}
                                img={img}
                                editImg={editImg}
                            />
                        ))}
                        <Button onClick={addImg}>Добавить изображение</Button>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            placeholder="Цена продукта"
                        />
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            placeholder="Категория продукта"
                        />
                        <input
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            type="text"
                            placeholder="Бренд продукта"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => [handleClose, addProduct()]}
                    >
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
);

export default AddProductModal;
