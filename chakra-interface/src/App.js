import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'

function App() {
  return (
    <div >
      <Box m={5} p={5} bg={'tomato'} color="white">This apps ui used Chakra UI to build it's interface.</Box>
      <Box border='1px' borderColor='gray.200'>
        Card
      </Box>
      <Button borderRightRadius="0">Button 1</Button>
      <Button borderLeftRadius="0">Button 2</Button>
      <Button borderTopRadius="md">Button 2</Button>
      <Button as='a' target='_blank' variant='outline' href='https://chakra-ui.com'>
        Hello
      </Button>
    </div>
  );
}

export default App;
