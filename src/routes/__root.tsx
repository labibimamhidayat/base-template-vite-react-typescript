import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import BaseLayout from "@/layouts/BaseLayout";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <BaseLayout>
        <Outlet />
      </BaseLayout>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
