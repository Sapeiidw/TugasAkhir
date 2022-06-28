import React, { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggler = () => setOpen(!open);
  return { open, toggler };
};

export default useModal;
