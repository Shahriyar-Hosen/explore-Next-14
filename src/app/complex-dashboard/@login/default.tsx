import Card from "@/components/Card";
import { NextPage } from "next";

// Make sure all content are same as page.tsx
const DefaultLogin: NextPage = () => {
  return (
    <Card>
      <h1>Default Please login to continue!</h1>
    </Card>
  );
};

export default DefaultLogin;
