import { FC } from "react";
import { PictureInfoVm } from "./landscape.vm";
import "../../index.css";

interface Props {
  pictures: PictureInfoVm[];
  handleCheckBox: (id: string) => void;
}

export const LandscapeCategoryComponent: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;
  return (
    <div>
      <h1>Landscape Category</h1>
      <div className="container">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img src={picture.picUrl} />
            <p>{picture.title}</p>
            <p>{picture.selected}</p>
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
