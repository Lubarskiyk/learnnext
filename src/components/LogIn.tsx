import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { object, ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/auth/operation";

interface ILogInForm {
  email: string;
  password: string;
}

const SignInSchema: ObjectSchema<ILogInForm> = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});
const useAppDispatch: () => AppDispatch = useDispatch;

export default function LogInForm() {
  const dispatch = useAppDispatch();
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

  const onSubmit: SubmitHandler<ILogInForm> = ({
    email,
    password,
  }: ILogInForm) => {
    dispatch(signIn({ email, password }));
    reset();
  };

  return (
    <>
      <h2 className="mb-5 text-[40px] leading-[1.20] font-medium tracking-tight">
        Log In
      </h2>
      <p className="mb-5 text-base leading-[1.37] font-normal text-[var(--foreground)]/80">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center"
        noValidate
      >
        <div className="relative mb-4.5 w-full">
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
        <div className="relative mb-10 w-full">
          <Controller
            control={control}
            name={"password"}
            render={({ field }) => (
              <Input
                {...field}
                type={"password"}
                placeholder={"Enter Password"}
                showToggle={true}
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
        <Button className="block w-full">Log In</Button>
      </form>
    </>
  );
}
