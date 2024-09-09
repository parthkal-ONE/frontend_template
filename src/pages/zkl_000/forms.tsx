"use client";
import { Card, Checkbox, Container, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function FormsPage() {
  const form = useForm({
    defaultValues: {
      textfield_demo: "",
      checkbox_demo: false,
    },
  });
  const { register, handleSubmit } = form;
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            label="Textfield Demo"
            {...register("textfield_demo")}
          ></TextField>
          <Card style={{ display: "inline", padding: "1rem" }}>
            <Checkbox {...register("checkbox_demo")} />
            Checkbox Demo
          </Card>
        </div>
      </form>
    </Container>
  );
}
