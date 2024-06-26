import { render, screen } from "../../test-utils";
import UserAuthentication from "./UserAuthentication";
import userEvent from "@testing-library/user-event";

const formInputsTestCases = () => {
  const emailInput = screen.getByLabelText(/Email/);
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByLabelText(/Password/);
  expect(passwordInput).toBeInTheDocument();
};

const formSubmitBtnTestCases = (btnTextRegex) => {
  const formSubmitBtn = screen.getByRole("button", { name: btnTextRegex });
  expect(formSubmitBtn).toBeInTheDocument();
  expect(formSubmitBtn).toHaveAttribute("type", "submit");
  expect(formSubmitBtn).toBeDisabled();
};

const formToggleBtnTestCases = (btnTextRegex) => {
  const formToggleBtn = screen.getByRole("button", { name: btnTextRegex });
  expect(formToggleBtn).toBeInTheDocument();
};

describe("User Authentication", () => {
  const signUpRegex = /Sign up/;
  const logInRegex = /Log in/;
  const user = userEvent.setup();
  test("renders Sign up as a form submit button when a new user visits the page", () => {
    render(<UserAuthentication />);

    formInputsTestCases();

    formSubmitBtnTestCases(signUpRegex);

    formToggleBtnTestCases(logInRegex);
  });

  test("renders Log in as a form submit button when an existing user visits the page", async () => {
    
    render(<UserAuthentication />);

    const toggleBtn = screen.getByRole("button", { name: logInRegex });
    await user.click(toggleBtn);

    formInputsTestCases();

    formSubmitBtnTestCases(logInRegex);


    formToggleBtnTestCases(signUpRegex);
  });

  test("renders correctly on toggle back from Log in to Sign up mode", async () => {
    render(<UserAuthentication />);

    // Ensure we are in the Sign up mode initially
    formSubmitBtnTestCases(signUpRegex);

    const toggleBtn = screen.getByRole("button", { name: logInRegex });
    await user.click(toggleBtn);

    // Toggle back to sign up mode
    await user.click(toggleBtn);

    formInputsTestCases();

    formSubmitBtnTestCases(signUpRegex);
  });
});
