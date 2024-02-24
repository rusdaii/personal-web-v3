import { useState } from 'react';

export type ViewAllType = {
  showAll: boolean;
  toggleShowAll: () => void;
};

const useViewAll = (): ViewAllType => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return { showAll, toggleShowAll };
};
export default useViewAll;
