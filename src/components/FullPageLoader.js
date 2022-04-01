import CircularProgress from "@mui/material/CircularProgress";

function FullPageLoader() {
  return (
    <div className="w-full flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}

export default FullPageLoader;
