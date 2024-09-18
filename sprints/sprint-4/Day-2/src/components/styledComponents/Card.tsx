import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const Card = () => {
  return (
    <>
      <div>Card</div>
      <Button onClick={() => console.log('object')}>Click me</Button>
    </>
  );
};
