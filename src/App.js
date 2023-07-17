import "./App.scss";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddItem></AddItem>
        <ItemList></ItemList>
      </div>
    </Provider>
  );
}

export default App;
