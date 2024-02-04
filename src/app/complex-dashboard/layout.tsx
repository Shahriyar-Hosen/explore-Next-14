import { FC, PropsWithChildren, ReactNode } from "react";

export interface IDashboardProps extends PropsWithChildren {
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
  login: ReactNode;
}

const DashboardLayout: FC<IDashboardProps> = ({
  users,
  revenue,
  children,
  notifications,
  login,
}) => {
  const isLoggedIn = true;

  return (
    <main>
      <div>{children}</div>

      {isLoggedIn ? (
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      ) : (
        login
      )}
    </main>
  );
};

export default DashboardLayout;
