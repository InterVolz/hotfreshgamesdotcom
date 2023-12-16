// Importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Main App Component
const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      {/* Other components will go here */}
    </div>
  );
};

// Rendering the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
