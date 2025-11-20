import { useState, useRef, useEffect, useCallback } from 'react';
export const useDropdownState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const currentRef = dropdownRef.current;
    const targetNode = event.target as Node;
    if (currentRef && !currentRef.contains(targetNode)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return { isOpen, setIsOpen, dropdownRef };
};
export default useDropdownState;
