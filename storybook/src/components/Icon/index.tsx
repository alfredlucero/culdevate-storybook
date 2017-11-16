import * as React from 'react';

import { IconType } from '../../types/icons';

export interface IconProps {
  type: IconType
}

const Icon: React.SFC<IconProps> = ({
  type,
}) => {
  return (
    <i className={`fa fa-${type}`}></i>
  );
};

export default Icon;
