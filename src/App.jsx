import "./App.css";
// import ramsesmiron from "./assets/avatars/image-ramsesmiron.png";
// import Data from "./components/Data";
// import Data2 from "./components/Data2";
// import Input from "./components/Input";
// import InputMobile from "./components/InputMobile";
// import TodoFormWrapper from "./components/TodoFormWrapper";

// import Textarea from "./components/Textarea";
import Counter from "./components/Counter";
// import Textarea from "./components/Textarea";
// import Modal from "./components/Modal";
//
function App({ isModalOpen, setIsModalOpen }) {
  function closeModal() {
    if (setIsModalOpen === true) {
      setIsModalOpen === false;
    } else setIsModalOpen === false;
  }
  return (
    <main
      className="m-5 min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center  text-sm on "
      onClick={closeModal}
    >
      {/* <TodoFormWrapper /> */}
      {/* <Data /> */}
      {/* <Data2 /> */}
      <Counter />
      {/* <Input /> */}

      {/* <InputMobile /> */}
    </main>
  );
}

export default App;
