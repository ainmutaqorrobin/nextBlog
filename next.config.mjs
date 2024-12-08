import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants.js";

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "robin",
        mongodb_password: "robin",
        mongodb_cluster: "cluster0",
        mongodb_database: "nextBlog-development",
      },
    };
  }
  return {
    env: {
      mongodb_username: "robin",
      mongodb_password: "robin",
      mongodb_cluster: "cluster0",
      mongodb_database: "nextBlog",
    },
  };
};

export default nextConfig;
