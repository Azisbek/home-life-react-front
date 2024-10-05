import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidth } from "../app/store/screen.slice";

export const useScreenWidth = () => {
  const dispatch = useDispatch();
  const width = useSelector((state) => state.screen.width);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return {
    width,
    isMobile: width <= 768,
  };
};
