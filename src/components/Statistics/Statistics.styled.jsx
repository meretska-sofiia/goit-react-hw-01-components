import styled from 'styled-components';

export const StatContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #010101;
  min-width: 400px;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 100px;
  background-color: rgb(242, 236, 228);
`;

export const StatList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  width: 100%;
  flex-grow: 1;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;

  text-align: center;
  font-size: 16px;
  row-gap: 6px;
  padding: 6px;

  min-width: 50px;
`;
