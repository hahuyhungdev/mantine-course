import { Button, Group, Modal, Paper, createStyles, getStylesRef, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

import StepperCustom from './components/Stepper/Stepper';
const useStyles = createStyles((theme) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%',
    borderRadius: theme.radius.sm,
    // Dynamic media queries, define breakpoints in theme, use anywhere
    [theme.fn.smallerThan('sm')]: {
      // Child reference in nested selectors via ref
      [`& .${getStylesRef('child')}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },
  child: {
    // assign ref to element
    ref: getStylesRef('child'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
function App() {
  const [count, setCount] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <StepperCustom />
      djhasjkdhjksahjk
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        // style={{
        //   position: 'absolute',
        //   top: '0',
        //   left: '0',
        // }}
      >
        <Paper>Modal without header, press escape or click on overlay to close</Paper>
      </Modal>
      <Group position='center'>
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </div>
  );
}

export default App;
