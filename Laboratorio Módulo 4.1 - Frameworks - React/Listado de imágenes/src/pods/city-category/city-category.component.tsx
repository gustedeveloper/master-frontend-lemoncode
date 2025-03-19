import { FC } from "react";
import { PictureInfoVm } from "./city.vm";

interface Props {
  pictures: PictureInfoVm[];
  handleClick: (id: string) => void;
}

export const CityCategoryComponent: FC<Props> = (props) => {
  const { pictures, handleClick } = props;
  return (
    <div>
      <h1>City Category</h1>
      <div className="container">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img style={{ width: "300px" }} src={picture.picUrl} />
            <p>{picture.title}</p>
            <button onClick={() => handleClick(picture.id)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};
