import styled from 'styled-components';

export const ProfileContainer = styled.div`
  border: 1px solid rgb(59, 59, 56);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #010101;
  width: 300px;
  background-color: rgb(242, 236, 228);
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const DescriptionContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const ProfileAvatar = styled.img`
  width: 200px;
  border: 1px solid rgb(59, 59, 56);
  border-radius: 50%;
  padding: 10px;
`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const ProfileUserData = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const StatsItem = styled.li`
  padding: 6px;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(59, 59, 56);

  text-align: center;
  font-size: 16px;
  row-gap: 6px;
`;
