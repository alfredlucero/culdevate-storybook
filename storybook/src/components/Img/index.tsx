/**
 *
 * Img.ts
 *
 * Renders an image/default icon; given src, it will attempt to render
 * an img tag with alt text; otherwise, it will render a default icon type inside
 * (see types/icons.ts for all approved FontAwesome types)
 * There is also an option of choosing round 
 */

import * as React from 'react';
import styled from 'styled-components';

import { StyledImg } from './StyledImg';
import Icon from '../Icon';
import { IconType } from '../../types/icons';

export interface ImgProps {
  src: string;
  alt: string;
  defaultIcon: IconType;
  round?: boolean;
}

const Img: React.SFC<ImgProps> = ({
  src,
  alt,
  defaultIcon,
  round,
}) => {
  const imgChildren = src 
    ? <img src={src} alt={alt} />
    : <div><Icon type={defaultIcon} /></div>;

  return (
    <StyledImg round>
      {imgChildren}
    </StyledImg>
  )
};

export default Img;
