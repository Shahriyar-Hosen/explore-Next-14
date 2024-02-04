import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 #FFA500",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
