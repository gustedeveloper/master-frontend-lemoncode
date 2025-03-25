import { FC } from "react";
import { PictureInfoVm } from "./landscape.vm";

interface Props {
  pictures: PictureInfoVm[];
  handleCheckBox: (id: string) => void;
}

export const LandscapeCategoryComponent: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;
  return (
    <div>
      <div className="container">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img style={{ width: "300px" }} src={picture.picUrl} />
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
