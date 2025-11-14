import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

      <p className="text-gray-700 mb-4 text-center">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Show error details (developer-friendly) */}
      {error && (
        <pre className="bg-gray-200 text-gray-900 p-4 rounded-lg text-sm w-full max-w-xl overflow-auto mb-6">
          {JSON.stringify(
            {
              status: error.status,
              statusText: error.statusText,
              message: error.message,
            },
            null,
            2
          )}
        </pre>
      )}

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
