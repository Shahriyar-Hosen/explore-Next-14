"use client";

import { FC } from "react";

const ErrorBoundary: FC<{ error: Error }> = ({ error }) => {
  return (
    <div>
      <h1>Error page</h1>

      {/* stack: {error.stack} <br /> <br />
      name: {error.name} <br /> <br />
      message: {error.message} <br /> <br /> */}
    </div>
  );
};

export default ErrorBoundary;
