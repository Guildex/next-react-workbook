import { GrReactjs, GrDocker } from 'react-icons/gr';
import { SiTestinglibrary } from 'react-icons/si';

import { ICON_NAMES } from '~/consts/icon';
import type { IconName } from '~/consts/icon';
import { COLORS } from '~/consts/style';

type IconProps = {
  name: IconName;
  size?: number;
};

/**
 * アイコン
 *
 * @param props {@see IconProps}
 */
export const Icon = (props: IconProps) => {
  const { name, size = 20 } = props;
  const iconProps = {
    size,
  };

  switch (name) {
    case ICON_NAMES.REACT:
      return <GrReactjs color={COLORS.REACT.code} {...iconProps} />;

    case ICON_NAMES.TEST:
      return (
        <SiTestinglibrary color={COLORS.TESTING_LIBRARY.code} {...iconProps} />
      );

    case ICON_NAMES.DOCKER:
      return <GrDocker color={COLORS.DOCKER.code} {...iconProps} />;

    default:
      return null;
  }
};
