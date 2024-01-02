export const SidebarList = [
  {
    id: 1,
    title: "صفحه اصلی",
    icon: "/images/icons/home.svg",
    link: "/",
    subMenue: [],
    supportedLinks: ["/", "/cameras", "/devices", "/notifications"],
  },

  {
    id: 2,
    title: "مدیریت مالی",
    icon: "/images/icons/credit-card.svg",
    link: "/financial-management",
    subMenue: [],
    supportedLinks: [
      "/financial-management",
      "/financial-management/detail-service",
      "/financial-management/reneval-service",
    ],
  },

  {
    id: 3,
    title: "پشتیبانی",
    icon: "/images/icons/life-buoy.svg",
    link: "/support",
    subMenue: [],
    supportedLinks: ["/support", "/support/create", "/support/:id"],
  },

  {
    id: 4,
    title: "پروفایل",
    icon: "/images/icons/user-circle.svg",
    link: "/profile",
    subMenue: [],
    supportedLinks: ["/profile"],
  },
];
