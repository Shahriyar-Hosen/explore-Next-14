import Card from "@/components/Card";
import Link from "next/link";
import { FC } from "react";

const ArchivedNotifications: FC = () => {
  return (
    <Card>
      <h1>ArchivedNotifications</h1>&nbsp;&nbsp;
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotifications;
