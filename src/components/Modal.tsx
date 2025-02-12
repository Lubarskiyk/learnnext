"use client";
import { ReactNode, useEffect, useRef, MouseEvent } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div className="relative rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✖
        </button>
        {children}
      </div>
    </dialog>
  );
}
