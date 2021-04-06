
import './App.css';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
// import FunctionClick from './components/FunctionClick';
// import Greet from './components/Greet';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserGreetings />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick ></ClassClick> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Greet name='Brume' heroName='Jedai'>
          <p>This is children props</p>
        </Greet>
        <Greet name='Salori' heroName='Randler'>
          <button>Action</button>
        </Greet>
        <Greet name='Tingo' heroName='Opust' /> */}

        {/* <Welcome name='Brume' heroName='Jedai' />
        <Welcome name='Salori' heroName='Randler' />
        <Welcome name='Tingo' heroName='Opust' /> */}
        {/* <Hello /> */}
      </header>
    </div>
  );
}

export default App;
