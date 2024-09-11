import { TextField, Button, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const FormExample1 = () => {
  // Initialize React Hook Form by calling the useForm() hook
  const form = useForm<FormValues>({
    // Set the default values for the form
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Get the form state and the form methods
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    // Handle form submission
    console.log(`Data Submitted: ${JSON.stringify(data)}`);
  };

  return (
    <>
      <h1>Log In</h1>
      {/* Use the 'handleSubmit' method given by React Hook Form to handle form
      submissions. The 'onSubmit' function will be called with the form data */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            label="Username"
            type="email"
            variant="outlined"
            {...register("email", { required: "Email is Required" })} // Register the "email" field declared in the form object
            error={!!errors.email} // Set the error state of the field
            helperText={errors.email?.message} // Set the error message for the field
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            {...register("password", { required: "Password is Required" })} // Register the "password" field declared in the form object
            error={!!errors.password} // Set the error state of the field
            helperText={errors.password?.message} // Set the error message for the field
          />
          <Button type="submit" variant="contained">
            Log In
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default FormExample1;
