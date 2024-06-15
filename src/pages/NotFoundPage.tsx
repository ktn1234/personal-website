import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen drop-shadow-tertiary-glow">
      <h1 className="text-center mb-4">404 - Page Not Found</h1>
      <button
        className="hover:drop-shadow-quaternary-glow hover:animate-pulse hover:underline hover:text-quaternary"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
}

export default NotFoundPage;
