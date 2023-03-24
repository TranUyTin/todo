import "./App.css";
import User from "./component/User";
import { UpdateUser } from "./component/User/UpdateUser";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Todo /> */}
      <User />
      <UpdateUser />
    </div>
  );
}

export default App;
