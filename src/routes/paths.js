// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
  }
  
  const ROOTS_DASHBOARD = "/";
  
  export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    general: {
      app: path(ROOTS_DASHBOARD, "app"),
    },
  };


  // It is used when /api instead of /app or wrong address then
  //automatically goest to /app routes
  
  