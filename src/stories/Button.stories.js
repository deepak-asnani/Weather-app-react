import { fn } from "@storybook/test";
import { Button } from "../components/Button";
import { action } from '@storybook/addon-actions';

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Button text",
    },
    backgroundColor: {
      control: "color",
      description: "background color of button",
    },
    textColor: {
      control: "color",
      description: "text color of a button",
    },
    buttontype: {
      control: { type: "select" },
      options: ["button", "submit"],
      description: "Describes the type of the button",
    },
    disabled: { control: "boolean", description: "disabling the button" },
    style: {
      control: "text",
      description: "controls custom styles of the button",
    },
    onClick: fn(),
  },
};

export const Solid = {
  args: {
    label: "Sign up",
    backgroundColor: "bg-yellow-300",
    textColor: "text-white",
    buttontype: "submit",
    style: "w-[250px] py-2",
    onClick: action('on-click'),
    disabled: false,
  },
};


export const ghost = {
  args: {
    label: "Log in",
    textColor: "text-yellow-300",
    type: "button",
    onClick: () => {
      console.log("clicked");
    },
  },
};

export default meta;
