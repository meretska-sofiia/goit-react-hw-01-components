import styled from 'styled-components';

export const TableTransaction = styled.table`
  text-align: center;
  width: 700px;
  border-collapse: collapse;
  margin: 0 auto;
`;

export const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4e48ff;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;
export const TableBody = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
