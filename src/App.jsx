import Student from './assets/Component/Student';
import Studentclass from './assets/Component/Studentclass';
import StateExample from './assets/Component/state/StateExample';
import Toggle from './assets/Component/state/toggle';
import TextPass from './assets/Component/state/TextPass';
import Dark from './assets/Component/state/Dark';
import Change from './assets/Component/state/Change';
import Dice from './assets/Component/state/Dice';
import Event from './assets/Component/state/EventHandling';
function App() {
  return (
    <div>
       <Student title="yokzhhh" /> 
      <Studentclass />
      <StateExample />
      <Toggle />
      <TextPass />
      <Dark />
      <Change />
      <Dice />
      <Event />
    </div>
  );
}

export default App;
