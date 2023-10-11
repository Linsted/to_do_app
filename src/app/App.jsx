import Header from "../components/Header/Header";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import StatusFilter from "../components/StatusFilter/StatusFilter";
import Tasks from "../components/Tasks/Tasks";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Tasks />
      <StatusFilter />
      <ModalWindow />
    </>
  );
}

export default App;
