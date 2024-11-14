import { useEffect, useRef, useState, MutableRefObject } from "react";

interface UseModalEventProps {
  modalRef: MutableRefObject<HTMLDivElement | null>;
  dragRef: MutableRefObject<HTMLDivElement | null>;
  onClose: () => void;
  dragThreshold: number;
}

export default function useModalEvent({
  modalRef,
  dragRef,
  onClose,
  dragThreshold,
}: UseModalEventProps) {
  const startYRef = useRef<number | null>(null);
  const currentYRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    const modal = modalRef.current;
    const dragHandle = dragRef.current;

    if (!modal || !dragHandle) return;

    let animationId: number;

    // position 변경
    const updatePosition = () => {
      if (isDragging) {
        modal.style.transform = `translateY(${currentYRef.current}px)`;
        animationId = requestAnimationFrame(updatePosition);
      }
    };

    // 드래그 시작
    const handleStart = (clientY: number) => {
      startYRef.current = clientY - currentYRef.current;
      setIsDragging(true);
      animationId = requestAnimationFrame(updatePosition);
      document.body.style.cursor = "grabbing";
    };

    // 드래그 중
    const handleMove = (clientY: number) => {
      if (startYRef.current !== null) {
        const value = clientY - startYRef.current;
        currentYRef.current = Math.max(0, value);
      }
    };

    // 드래그 끝
    const handleEnd = () => {
      setIsDragging(false);
      cancelAnimationFrame(animationId);
      document.body.style.cursor = "default";

      if (currentYRef.current > dragThreshold) {
        onClose();
      } else {
        modal.style.transition = "transform 0.3s ease-out";
        modal.style.transform = "translateY(0)";
        setTimeout(() => {
          modal.style.transition = "";
        }, 300);
      }

      startYRef.current = null;
      currentYRef.current = 0;
    };

    // event
    const handleMouseDown = (e: MouseEvent) => handleStart(e.clientY);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientY);
      }
    };
    const handleMouseUp = () => {
      if (isDragging) {
        handleEnd();
      }
    };

    // dragHandle
    dragHandle.addEventListener("mousedown", handleMouseDown);

    // window
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      // dragHandle
      dragHandle.removeEventListener("mousedown", handleMouseDown);

      // window
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, [onClose, dragThreshold, isDragging]);

  return {};
}
