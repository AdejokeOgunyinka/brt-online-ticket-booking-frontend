export const DASHBOARD = "/";

// auth routes
export const LOGIN = "/auth/login";
export const CREATE_ACCOUNT = "/auth/create-account";

// dashboard routes
export const BOOKINGS = "/booking";
export const PROFILE = "/profile";

export const ALL_ROUTES: Record<string, string> = {
  "/": "dashboard",
  "/profile": "profile",
  "/booking": "bookings",
};
