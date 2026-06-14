import React, { useState } from "react";
import LabeledInput from "../Elements/LabeledInput";
import Checkbox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function FormSignIn({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(email, password);
    }
  };

  return (
    <div>
      {/* form start */}
      <div className="mt-16">
        <form onSubmit={handleSubmit}>

          <div className="mb-6">
            <LabeledInput
              label="Email address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="••••••••"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-5 flex items-center gap-2">
            <Checkbox
              label="Keep me signed in"
              id="status"
              type="checkbox"
              name="status"
            />
          </div>

          <Button type="submit" variant="primary">
            Login
          </Button>

        </form>
      </div>
      {/* form end */}

      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>

        {/* ganti class → className */}
        <div className="px-2 bg-special-mainBg absolute">
          or sign in with
        </div>
      </div>
      {/* teks end */}

      {/* google start */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            Continue with Google
          </span>
        </Button>
      </div>
      {/* google end */}

      {/* link start */}
      <div className="flex justify-center">
        <Link
          to="/register"
          className="text-primary text-sm font-bold cursor-pointer"
        >
          Create an account
        </Link>
      </div>
      {/* link end */}
    </div>
  );
}

export default FormSignIn;