import React from 'react';
import moment from 'moment/moment';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';
import Header from './components/Header/Header';
import Monitor from './components/Monitor/Monitor';
import './components/Styles/App.css';
import styled from 'styled-components';

const ShadowWrapper = styled('div')`
  border-top: 1px solid pink;
  border-left: 1px solid pink;
  border-right: 1px solid pink;
  border-bottom: 2px solid pink;
  border-radius: 8px;
  overflow: hidden;
`;

function App() {
  moment.updateLocale('en', { week: { dow: 1 } });

  const today = moment();
  const startDay = today.clone().startOf('month').startOf('week');

  return (
    <ShadowWrapper>
      <Header />
      <Monitor today={today} />
      <CalendarGrid startDay={startDay} />
    </ShadowWrapper>
  );
}

export default App;
