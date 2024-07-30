import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Button";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="example:John Doe"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="user@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label=" Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />
      <div className="mb-6"></div>
      <Button classname="bg-neutral-800 w-full">Register</Button>
    </form>
  );
};
export default RegisterForm;
