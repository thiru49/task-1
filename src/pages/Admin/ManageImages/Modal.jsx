import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function useOutsideClick(handle, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handle();
      }
    };
    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handle, listenCapturing]);

  return { ref };
}
const StyledModal = ({ children }) => (
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg shadow-lg p-5 transition-all duration-500">
    {children}
  </div>
);

const Overlay = ({ children }) => (
  <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 backdrop-blur-md z-50 transition-all duration-500">
    {children}
  </div>
);

const Button = ({ children, onClick }) => (
  <button
    className="absolute top-2 right-4 p-1 rounded-sm hover:bg-gray-100"
    onClick={onClick}
  >
    {children}
  </button>
);

const ModelContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModelContext.Provider value={{ openName, open, close }}>
      {children}
    </ModelContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModelContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModelContext);
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark className="w-6 h-6 text-gray-500 bg-red-500 rounded-full" />
        </Button>
        <span>{cloneElement(children, { onCloseModel: close })}</span>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
