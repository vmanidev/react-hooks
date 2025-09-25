import { createPortal } from "react-dom";

export default function Modal({ children, onCloseModal }) {
  const modal = document.getElementById("modal");

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
        {children}

        <button
          onClick={onCloseModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
    </div>,
    modal
  );
}
