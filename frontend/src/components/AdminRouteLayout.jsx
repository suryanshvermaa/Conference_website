import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function AdminRouteLayout({ setfetch }) {
  return (
    <AdminLayout setfetch={setfetch}>
      <Outlet />
    </AdminLayout>
  );
}
