import { useState } from "react";

export default function useModelDilog() {
    const [isOpen, setIsOpen] = useState(false);

    return {
        isOpen,
        open: () => setIsOpen(),
        close: () => setIsOpen(false)
    }
}