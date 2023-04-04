import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: #e563ba;
  color: #4d163a;
  padding: 16px;
`;

const TextWrapper = styled('span')`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled('button')`
  border: unset;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  background-color: #cf8cb9;
  color: #4d163a;
`;

const TodayButton = styled(ButtonWrapper)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
`;

const Monitor = ({ today }) => {
  return (
    <DivWrapper>
      <div>
        <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
        <TextWrapper>{today.format('YYYY')}</TextWrapper>
      </div>
      <ButtonsWrapper>
        <ButtonWrapper>&lt;</ButtonWrapper>
        <TodayButton>Today</TodayButton>
        <ButtonWrapper>&gt;</ButtonWrapper>
      </ButtonsWrapper>
    </DivWrapper>
  );
};

export default Monitor;
