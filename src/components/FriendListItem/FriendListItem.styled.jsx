import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 20px;
  column-gap: 20px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')}; ;
`;

// export const OfflineChip = styled.span`
//   backgroun-color: red;
// `;
