Below is a simple implementation of a counter application:

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } else {
      alert('Cannot decrement below 0');
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter App</h1>
      </header>
      <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement}>-</button>
        <div className="counter-display">{count}</div>
        <button className="counter-button" onClick={handleIncrement}>+</button>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
```

And the corresponding CSS in App.css:

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

.counter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
}

.counter-display {
  font-size: 2em;
}

.counter-button, .reset-button {
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.counter-button {
  background-color: #61dafb;
  color: #282c34;
}

.reset-button {
  background-color: #282c34;
  color: #61dafb;
}
```

This application includes a counter that increments, decrements, and resets. It uses the useState hook for state management. The counter cannot decrement below 0, providing basic error handling. The app is styled for a professional look and feel.