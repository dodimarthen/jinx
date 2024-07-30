import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
