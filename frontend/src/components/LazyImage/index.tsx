import * as React from "react";
import { useState } from "react";

import { styled } from "@mui/material/styles";

import Image from "next/image";

type Props = {
  width: string;
  height: string;
  objectFit: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  src: string;
};

const LazyImage: React.FC<Props> = (props): React.ReactElement => {
  const { width, height, objectFit, src, ...styles } = props;

  const [imageSrc, setImgSrc] = useState(src);
  const FALLBACK_IMAGE_PUBLIC_PATH = "/images/placeholder-image.jpg";

  return (
    <StyledImageContainer {...styles}>
      <Image
        width={width}
        height={height}
        objectFit={objectFit}
        loading="lazy"
        quality={70}
        alt=""
        placeholder="blur"
        onError={() => setImgSrc(FALLBACK_IMAGE_PUBLIC_PATH)}
        src={imageSrc}
      />
    </StyledImageContainer>
  );
};

export default LazyImage;

const StyledImageContainer = styled("div")`
  display: flex;
  padding: 5px 10px;
`;
