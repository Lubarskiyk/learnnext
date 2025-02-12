import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { object, ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

interface ILogInForm {
  email: string;
  password: string;
}

const SignInSchema: ObjectSchema<ILogInForm> = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

export default function LogInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogInForm>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(SignInSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ILogInForm> = data => {
    alert(`Email ${data.email}
    Password: ${data.password}`);

    reset();
  };

  return (
    <>
      <h2>Log In</h2>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center"
        noValidate
      >
        <div className="relative w-full">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                type={"email"}
                placeholder={"Enter E-mail"}
                className={errors.email && "border border-red-500/80"}
              />
            )}
          />
          {errors.email && (
            <p className="absolute bottom-[-5px] left-2 rounded border border-red-500/80 bg-white px-2 py-0.5 text-xs text-red-500/80 shadow-lg">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative w-full">
          <Controller
            control={control}
            name={"password"}
            render={({ field }) => (
              <Input
                {...field}
                type={"password"}
                placeholder={"Enter Password"}
                className={errors.password && "border border-red-500/80"}
              />
            )}
          />
          {errors.password && (
            <p className="absolute bottom-[-5px] left-2 rounded border border-red-500/80 bg-white px-2 py-0.5 text-xs text-red-500/80 shadow-lg">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button>Log In</Button>
      </form>
    </>
  );
}
