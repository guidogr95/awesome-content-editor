import Loader from "../shared/icons/loader";

const ScreenSpinner = () => {
  return (
    <div role="status" className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white z-[999]">
      <Loader/>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ScreenSpinner;
