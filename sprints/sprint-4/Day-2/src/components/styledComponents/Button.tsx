import styled from '@emotion/styled';

const Button = styled.button(
  {
    color: 'darkorchid',
  },
  ({ fontSize, color }) => ({
    fontSize,
    color,
  })
);

// <Button fontSize={16}>This is a darkorchid button.</Button>

export const ButtonMain = ({ fontSize, color }) => {
  return (
    <Button fontSize={fontSize} color={color}>
      This is a darkorchid button.
    </Button>
  );
};
