import React from "react";
import { useForm } from "react-hook-form";
import LabeledInput from "../components/LabeledInput";
import { storyParameters } from "../helpers";

const meta = {
  title: "Components/LabeledInput",
  tags: ["autodocs"],
  component: LabeledInput,
  argTypes: {
    label: {
      control: "text",
      description: "The label for the input field.",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "Name" },
      },
    },
    inputId: {
      control: "text",
      description: "The unique ID for the input field.",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "name" },
      },
    },
    inputType: {
      control: "text",
      description: "The type of the input field (e.g., text, email, password).",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "text" },
      },
    },
    placeholder: {
      control: "text",
      description: "The placeholder text for the input field.",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "Enter your name" },
      },
    },
  },
};

export default meta;

const Template = (args) => {
  const methods = useForm();
  return <LabeledInput {...args} register={methods.register} />;
};

export const Default = Template.bind({});

Default.args = {
  label: "Name",
  inputId: "name",
  inputType: "text",
  placeholder: "Enter your name",
};
Default.parameters = storyParameters(
  "This is the default configuration of the LabeledInput component."
);
Default.default = {
  label: "Name",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: "Email",
  inputId: "email",
  inputType: "email",
  placeholder: "Enter your email",
};
EmailInput.parameters = storyParameters("Example for email input");

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  label: "Password",
  inputId: "password",
  inputType: "password",
  placeholder: "Enter your password",
};
PasswordInput.parameters = storyParameters(" Example for password input");
