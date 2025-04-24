import { Application } from "express";

export const logRoutes = (app: Application): void => {
  console.log("\n📚 Available Endpoints:\n");

  app._router.stack.forEach((middleware: any) => {
    if (middleware.route) {
      // Routes registered directly on the app
      const route = middleware.route;
      const methods = Object.keys(route.methods).join(", ").toUpperCase();
      console.log(`  [${methods}]  ${route.path}`);
    } else if (middleware.name === "router") {
      // Routes added as Router middleware
      middleware.handle.stack.forEach((handler: any) => {
        const route = handler.route;
        if (route) {
          const methods = Object.keys(route.methods).join(", ").toUpperCase();
          console.log(`  [${methods}]  ${route.path}`);
        }
      });
    }
  });

  console.log("");
};
