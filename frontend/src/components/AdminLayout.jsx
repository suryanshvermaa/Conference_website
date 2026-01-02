import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserPlus,
  FilePlus2,
  Mic2,
  BellPlus,
  Files,
  Users,
  Bell,
  ImagePlus,
  Trash2,
  Mail,
  UsersRound,
  Wrench,
  Globe,
  Menu,
  LogOut,
} from "lucide-react";

const AdminLayout = ({ children, setfetch }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const userPhoto = localStorage.getItem("photo");
  const userName = localStorage.getItem("name") || "Admin";

  const navItems = useMemo(
    () =>
      [
        { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
        { to: "/admin/add-admin", label: "Add Admin", icon: UserPlus },
        { to: "/admin/add-papers", label: "Add Paper", icon: FilePlus2 },
        { to: "/admin/add-speakers", label: "Add Speaker", icon: Mic2 },
        { to: "/admin/add-recent-updates", label: "Add Update", icon: BellPlus },
        { to: "/admin/all-papers", label: "All Papers", icon: Files },
        { to: "/admin/all-speakers", label: "All Speakers", icon: Users },
        { to: "/admin/all-updates", label: "All Updates", icon: Bell },
        { to: "/admin/photogalleryupload", label: "Upload Photos", icon: ImagePlus },
        { to: "/admin/deletephoto", label: "Delete Photos", icon: Trash2 },
        { to: "/admin/contact-messages", label: "Contact Messages", icon: Mail },
        { to: "/admin/add-organising-member", label: "Add Org Member", icon: UsersRound },
        { to: "/admin/all-organising-members", label: "All Org Members", icon: UsersRound },
        { to: "/admin/add-technical-member", label: "Add Tech Member", icon: Wrench },
        { to: "/admin/all-technical-members", label: "All Tech Members", icon: Wrench },
        { to: "/admin/add-international-member", label: "Add Intl Member", icon: Globe },
        { to: "/admin/all-international-members", label: "All Intl Members", icon: Globe },
      ],
    []
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("photo");
    localStorage.removeItem("name");
    navigate("/login");
    setfetch?.(true);
  };

  return (
    <div className="admin-theme min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        {/* Sidebar (desktop) */}
        <aside className="hidden w-72 shrink-0 border-r border-zinc-200 bg-white lg:block">
          <div className="flex h-16 items-center gap-3 px-6">
            <div className="h-9 w-9 rounded-xl bg-indigo-600/20 ring-1 ring-indigo-500/30" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Conference Admin</div>
              <div className="text-xs text-zinc-500">Manage content & settings</div>
            </div>
          </div>
          <nav className="px-3 pb-6">
            <div className="admin-nav">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/admin"}
                  className={({ isActive }) =>
                    [
                      "admin-nav-item",
                      isActive ? "admin-nav-item-active" : "admin-nav-item-inactive",
                    ].join(" ")
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span className="truncate">{label}</span>
                </NavLink>
              ))}
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Topbar */}
          <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/80 backdrop-blur">
            <div className="flex h-16 items-center gap-3 px-4 lg:px-8">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="admin-icon-button lg:hidden"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">Admin Panel</div>
                <div className="text-xs text-zinc-500">Signed in as {userName}</div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={userPhoto || "https://via.placeholder.com/64"}
                  alt="User"
                  className="h-9 w-9 rounded-full object-cover ring-1 ring-zinc-200"
                />
                <button
                  type="button"
                  onClick={handleLogout}
                  className="admin-button-danger hidden sm:inline-flex"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 lg:px-8">{children}</main>
        </div>
      </div>

      {/* Sidebar (mobile) */}
      {sidebarOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation"
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] border-r border-zinc-200 bg-white p-3">
            <div className="flex h-14 items-center justify-between px-2">
              <div className="text-sm font-semibold">Conference Admin</div>
              <button
                type="button"
                className="admin-icon-button"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close navigation"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
            <nav className="admin-nav">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/admin"}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    [
                      "admin-nav-item",
                      isActive ? "admin-nav-item-active" : "admin-nav-item-inactive",
                    ].join(" ")
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span className="truncate">{label}</span>
                </NavLink>
              ))}
              <button type="button" onClick={handleLogout} className="admin-nav-item admin-nav-item-inactive">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdminLayout;
