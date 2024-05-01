import { memo } from 'react';

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log('Search rendered!');

  return (
    <input
      className="border-2 border-lime-500 mx-10"
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search);
