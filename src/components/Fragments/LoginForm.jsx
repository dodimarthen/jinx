import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Button";

const LoginForm = () => {
  return (
    <form action="">
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
      <div className="mb-6"></div>
      <Button classname="bg-neutral-800 w-full">Login</Button>
    </form>
  );
};
export default LoginForm;
