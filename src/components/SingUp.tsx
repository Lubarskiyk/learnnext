import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { object, ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

interface ISingUpForm {
  name: string;
  email: string;
  password: string;
}

const SignUpSchema: ObjectSchema<ISingUpForm> = object().shape({
  name: string()
    .min(3, "Minimum 3 character")
    .max(20, "Maximum 20 character")
    .required("Email is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISingUpForm>({
    defaultValues: { name: "", email: "", password: "" },
    resolver: yupResolver(SignUpSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ISingUpForm> = data => {
    alert(`Name: ${data.name}
    Email: ${data.email}
    Password: ${data.password}`);
    reset();
  };

  return (
    <>
      <h2 className="mb-5 text-[40px] leading-[1.20] font-medium tracking-tight">
        Registration
      </h2>
      <p className="mb-5 text-base leading-[1.37] font-normal text-[var(--foreground)]/80">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center"
        noValidate
      >
        <div className="relative w-full">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                {...field}
                type={"text"}
                placeholder={"Name"}
                className={errors.name && "border border-red-500/80"}
              />
            )}
          />
          {errors.name && (
            <p className="absolute bottom-[-5px] left-2 rounded border border-red-500/80 bg-white px-2 py-0.5 text-xs text-red-500/80 shadow-lg">
              {errors.name.message}
            </p>
          )}
        </div>
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
            name="password"
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
        <Button className="block w-full">Sign Up</Button>
      </form>
    </>
  );
}
