import './App.css';
import Applied from './components/applied';
import Hired from './components/hired';
import Interview from './components/interview';
import InTouch from "./components/intouch"
import Rejected from './components/rejected';
import Source from './components/source';
import {Box, Text} from "@chakra-ui/react"

function App() {
  return (
    <Box backgroundColor={'blue.100'} fontSize={'20px'} w='100vw'>
    <Text>Stages</Text>
    <div className="App">
       <Text>Source</Text> |
       <Text>Applied</Text>|
       <Text>In-Touch</Text>|
       <Text>Inetrview</Text>|
       <Text>Hired</Text>|
       <Text>Rejected</Text>
    </div>
      <Box className='display'>
        <Box>
          <Source/>
        </Box>
        <Box>
          <Applied/>
        </Box>
        <Box>
          <InTouch/>
        </Box>
        <Box>
          <Interview/>
        </Box>
        <Box>
          <Hired/>
        </Box>
        <Box>
          <Rejected/>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
