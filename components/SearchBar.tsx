"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({ 
  placeholder = "What college do you want to search for?", 
  onSearch,
  className
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={`flex w-full max-w-3xl gap-2 ${className}`}
    >
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 h-16 text-base bg-white rounded-none placeholder:font-light md:placeholder:text-xl"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
      </div>
    </form>
  );
};

export default SearchBar;