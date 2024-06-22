import Input from "./input";
import InputCheckbox from "./input-checkbox";
import InputList from "./input-list";
import InputRadio from "./input-radio";

export default function HomePage() {
  return (
    <div className="">
      <h1 className="pb-8 text-center font-bold">GeekforGeeks Survey Form</h1>
      <form className="bg-white p-4">
        <Input label="Name" placeholder="Enter Your Name" type="text" />
        <Input label="Email" placeholder="Enter Your Email" type="email" />
        <Input label="Age" placeholder="Enter Your Age" type="number" />
        <InputList />
        <InputRadio />
        <InputCheckbox />
      </form>
    </div>
  );
}
