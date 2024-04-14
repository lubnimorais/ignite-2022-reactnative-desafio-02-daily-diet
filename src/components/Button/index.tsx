import { ReactNode } from 'react';

import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonTitle, IButtonTypeStyleProps } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  iconSolid?: ReactNode;
  iconOutline?: ReactNode;
  title: string;
  type?: IButtonTypeStyleProps;
  isActive?: boolean;
}

export function Button({
  iconSolid,
  iconOutline,
  title,
  type = 'SOLID',
  isActive = true,
  ...rest
}: IButtonProps) {
  return (
    <ButtonContainer
      type={type}
      isActive={isActive}
      disabled={!isActive}
      {...rest}
    >
      {type === 'SOLID' && iconSolid && iconSolid}

      {type === 'OUTLINE' && iconOutline && iconOutline}

      <ButtonTitle type={type} isActive={isActive}>
        {title}
      </ButtonTitle>
    </ButtonContainer>
  );
}
