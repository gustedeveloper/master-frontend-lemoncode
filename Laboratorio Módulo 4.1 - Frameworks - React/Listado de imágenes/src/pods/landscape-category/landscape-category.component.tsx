import { FC } from "react";
import { PictureInfoVm } from "./landscape.vm";
import "../../index.css";

interface Props {
  pictures: PictureInfoVm[];
}

export const LandscapeCategoryComponent: FC<Props> = (props) => {
  const { pictures } = props;
  return (
    <>
      <h1>Landscape Category</h1>
      <div className="container">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img src={picture.picUrl} />
            <p>{picture.title}</p>
            <p>{picture.selected}</p>
            <input type="checkbox" />
            <label>Buy</label>
          </div>
        ))}
      </div>
    </>
  );
};
