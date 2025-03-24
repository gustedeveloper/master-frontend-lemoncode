import { FC, useContext, useEffect, useState } from "react";
import { PicturesContext } from "../../core/context/pictures-context";
import { CartComponent } from "./cart.component";
import { getAllPictures } from "./cart.api";
import { PictureInfo } from "../../core/model";

export const CartContainer: FC = () => {
  const { selectedPictures } = useContext(PicturesContext);
  const [allPictures, setAllPictures] = useState<PictureInfo[]>([]);

  useEffect(() => {
    getAllPictures().then((apiPictures) => {
      setAllPictures(
        apiPictures.filter((picture) => selectedPictures.includes(picture.id))
      );
    });
  });

  return <CartComponent allPictures={allPictures} />;
};
