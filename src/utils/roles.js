const ROLES = {
  ADMIN: ["/admin", "/admin/show"],
  MEMBER: ["/surveys", "/surveys/[id]", "/surveys/new"],
  PUBLIC: ["/login", "/register", "/forgot-password", "/reset-password"],
  OTHER: ["/verify-email", "/"],
};

export const roles = Object.keys(ROLES);
export const roleRights = new Map(Object.entries(ROLES));
export const getInitialPageForUserRole = (userRole) => {
  switch (userRole) {
    case "ADMIN":
      return "/admin";
    case "MEMBER":
      return "/surveys";
    case "PUBLIC":
      return "/login";
    default:
      return "/login";
  }
};
