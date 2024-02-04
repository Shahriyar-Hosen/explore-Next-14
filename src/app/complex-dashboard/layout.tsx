import { FC, PropsWithChildren, ReactNode } from "react";

export interface IDashboardProps extends PropsWithChildren {
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
}

const DashboardLayout: FC<IDashboardProps> = ({
  children,
  notifications,
  revenue,
  users,
}) => {
  return (
    <main>
      <div>{children}</div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
