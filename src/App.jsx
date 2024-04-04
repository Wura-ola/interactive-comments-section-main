import Data from "./components/Data";
import Data2 from "./components/Data2";
import Input from "./components/Input";
import InputMobile from "./components/InputMobile";
function App() {
  return (
    <main className="m-5 min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center  text-sm on ">
      <Data />
      <Data2 />

      <Input />

      <InputMobile />
    </main>
  );
}

export default App;
