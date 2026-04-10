async function enableMocking() {
  if (import.meta.env.VITE_MSW_ENABLED !== "true") {
    return;
  }

  const { worker } = await import("./browser");
  return worker.start({
    onUnhandledRequest(request, print) {
      // Ignore any requests containing "cdn.com" in their URL.
      const url = new URL(request.url);
      if (!url.pathname.startsWith("/api")) {
        return;
      }

      // Otherwise, print an unhandled request warning.
      print.warning();
    },
  });
}

export default enableMocking;
