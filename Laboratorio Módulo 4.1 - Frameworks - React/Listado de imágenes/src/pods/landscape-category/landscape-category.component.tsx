import { FC } from "react";
import { PictureInfoVm } from "./landscape.vm";

interface Props {
  pictures: PictureInfoVm[];
}

export const LandscapeCategoryComponent: FC<Props> = (props) => {
  const { pictures } = props;
  return (
    <>
      <h1>Landscape Category</h1>
      {pictures.map((picture) => (
        <div key={picture.id}>
          <img style={{ width: "300px" }} src={picture.picUrl} />
          <span>{picture.title}</span>
          <span>{picture.selected}</span>
          <input type="checkbox" />
        </div>
      ))}
    </>
  );
};
