import app from "./app";
import { logRoutes } from "./utils/log-routes.util";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  logRoutes(app);
});
