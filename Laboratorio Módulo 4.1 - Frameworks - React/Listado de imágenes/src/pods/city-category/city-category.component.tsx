import { FC } from "react";
import { PictureInfoVm } from "./city.vm";

interface Props {
  pictures: PictureInfoVm[];
  handleCheckBox: (id: string) => void;
}

export const CityCategoryComponent: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;

  return (
    <div>
      <h1>City Category</h1>
      <div className="container">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img style={{ width: "300px" }} src={picture.picUrl} />
            <p>{picture.title}</p>
            <input
              type="checkbox"
              checked={picture.selected}
              onChange={() => handleCheckBox(picture.id)}
            />

            <label>Buy</label>
          </div>
        ))}
      </div>
    </div>
  );
};
