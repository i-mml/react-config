export const SidebarList = [
  {
    id: 1,
    title: "صفحه اصلی",
    icon: "homeIcon",
    link: "/",
    subMenue: [],
    supportedLinks: [
      "/",
      "/cameras",
      "/devices",
      "/notifications",
      "/companies",
      "/company/create",
      "/plan/management",
      "/banner/create",
    ],
    allowedRoles: [1, 2],
  },

  {
    id: 2,
    title: "مدیریت مالی",
    icon: "creditCardIcon",
    link: "/financial-management",
    subMenue: [],
    supportedLinks: [
      "/financial-management",
      "/financial-management/detail-service",
      "/financial-management/reneval-service",
    ],
    allowedRoles: [2],
  },

  {
    id: 3,
    title: "پشتیبانی",
    icon: "lifeBouyIcon",
    link: "/support",
    subMenue: [],
    supportedLinks: ["/support", "/support/create", "/support/:id"],
    allowedRoles: [1, 2, 3],
  },

  {
    id: 4,
    title: "پروفایل",
    icon: "userCircleIcon",
    link: "/profile",
    subMenue: [],
    supportedLinks: ["/profile"],
    allowedRoles: [1, 2, 3],
  },
];
