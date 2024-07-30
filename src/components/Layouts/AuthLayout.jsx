const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-4xl font-bold mb-2 text-blue-700">{title}</h1>
      <p className="font-medium text-slate-600 mb-8">
        Welcome, please fill the details below!
      </p>
      {children}
    </div>
  );
};
export default AuthLayout;
