"use client";

import { FC } from "react";

const ErrorBoundary: FC<{ error: Error }> = ({ error }) => {
  return (
    <div>
      <h1>Error page</h1>
      {/* <p>message: {error.message}</p> */}
    </div>
  );
};

export default ErrorBoundary;
