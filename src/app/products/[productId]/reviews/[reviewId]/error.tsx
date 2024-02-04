"use client";

import { FC } from "react";

const ErrorBoundary: FC<{ error: Error; reset: () => void }> = ({
  error,
  reset,
}) => {
  return (
    <div>
      <h1>Error page</h1> <button onClick={reset}>Try Again</button>
      <p>message: {error.message}</p>
    </div>
  );
};

export default ErrorBoundary;
