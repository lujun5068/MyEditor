import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

class App extends React.Component<any> {
  public render() {
    return (
      <div className="App">
        <BraftEditor />
      </div>
    );
  }
}

export default App;
