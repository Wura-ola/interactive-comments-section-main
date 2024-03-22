import "./App.css";

import Data from "./components/Data";
import Data2 from "./components/Data2";
import Input from "./components/Input";
import InputMobile from "./components/InputMobile";
import Modal from "./components/Modal";

// import Textarea from "./components/Textarea";

// import Textarea from "./components/Textarea";

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
      <Data />
      <Data2 />

      <Input />

      <InputMobile />
      <Modal />
    </main>
  );
}

export default App;
