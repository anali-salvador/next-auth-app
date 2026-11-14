import { withAuth } from "next-auth/middleware";

// Equivalente a: export { default } from "next-auth/middleware";
// (Next 16 exige que la función exportada sea detectable estáticamente)
export default withAuth({});

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
