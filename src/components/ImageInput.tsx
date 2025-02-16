import React, { FC } from "react";

interface ImageInputProps {
    img: { id: number; value: string };
    editImg: (id: number, value: string) => void;
}

const ImageInput: FC<ImageInputProps> = React.memo(({ img, editImg }) => {
    return (
        <input
            value={img.value}
            onChange={(e) => editImg(img.id, e.target.value)}
            type="text"
            placeholder="Изображения продукта"
        />
    );
});

export default ImageInput;
