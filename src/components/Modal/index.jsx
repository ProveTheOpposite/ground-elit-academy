// prop types
import PropTypes from "prop-types";

const Modal = ({ children }) => {
  return (
    <div className="bg-modal fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center">
      {children}
    </div>
  );
};

// Props validation
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
