
import useThemeToggle, { useDisplayToggle } from './hook/Hook';

const App = () => {
  const { theme, toggleTheme } = useThemeToggle("light");
  const { l, ch } = useDisplayToggle("List");

  return (
    <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000" }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <div style={{ width: "200px", margin: "10px" }}>
        <button onClick={ch}>Toggle display {l}</button>

        <ul style={{ display: `${l == "List" ? "flex" : "block"}`, flexWrap: "wrap" }}>

          <li>hoe</li>
          <li>hoe</li>
          <li>hoe</li>
          <li>hoe</li>
          <li>hoe</li>
          <li>hoe</li>
          <li>hoe</li>
          <li>hoe</li>
          <li>hoe</li>

        </ul>
      </div>
      <div style={{ padding: "30px" }}></div>
      <h1>1.Install Required Packages</h1>
      <p> First, you need to install two libraries: @reduxjs/toolkit and react-redux. Redux Toolkit simplifies working with Redux, while react-redux helps you connect Redux with React.
      </p>  <h1> 2. Create a Slice</h1>
      <p>A slice is a part of the state in your app.
        In this step, you define what the initial state looks like and what actions can be performed on that state (for example, increasing or decreasing a number, toggling a value, etc.).
        Redux Toolkit makes this easier by allowing you to create slices that automatically handle state updates.
     </p>
      <h1>  3. Set Up the Redux Store</h1>
      <p>The store is where all the data (state) for your app is stored.
        You combine all the slices (if you have multiple ones) and configure the store. This is a central place for managing your app’s state.
      </p>  <h1>4. Connect the Store to the React App
      </h1> <p> You need to connect the Redux store to your React app so that your app knows about the state and can use it.
        This is done by wrapping the root of your app with a special component called a Provider, which makes the store available to all the components in your app.
     </p><h1> 5. Access and Update State in Components
      </h1> <p>To access the current state inside a React component, you use a function to "select" the data you need.
        To update the state, you use a "dispatch" function to trigger an action (like increasing a counter, for example).
        These actions are already defined when you created the slice, so you just need to call them.
</p>
     

   
    </div>
  );
};

export default App;
