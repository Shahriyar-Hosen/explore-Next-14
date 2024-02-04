import Card from "@/components/Card";
import Link from "next/link";
import { FC } from "react";

const Notifications: FC = () => {
  return (
    <Card>
      <h1>Notifications</h1>&nbsp;&nbsp;
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default Notifications;
