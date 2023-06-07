import { Button, Group, Loader, MantineProvider, Paper, Rating, Text } from '@mantine/core';
import { useState } from 'react';
import './App.css';
import RatingCusom from './components/Rating';
import StepperCustom from './components/Stepper/Stepper';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <MantineProvider>
        <Paper>
          <Text>Count: {count}</Text>
        </Paper>
        <Button>Settings</Button>
        <Group position='center' style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
          <Rating value={3.7} fractions={3} readOnly />
          <RatingCusom />
        </Group>
        <StepperCustom />
      </MantineProvider>
    </div>
  );
}

export default App;
