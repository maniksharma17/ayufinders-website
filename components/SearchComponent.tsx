'use client';

import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Search, X } from 'lucide-react';
import SearchBar from './SearchBar';
import { cn } from '@/lib/utils'; // utility to merge classNames (optional)
import { useRouter } from 'next/navigation';

export default function SearchComponent() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  

  useEffect(() => {
    const delay = setTimeout(() => {
      if (search.trim().length > 0) {
        fetch(`/api/search-colleges?q=${encodeURIComponent(search)}`)
          .then((res) => res.json())
          .then((data) => setResults(data))
          .catch(console.error);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  const router = useRouter();

  return (
    <>
      {/* Trigger bar */}
      <div
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
      >
        <SearchBar
          className="mt-6"
          onSearch={(val) => {
            setSearch(val);
            if (!open) setOpen(true);
          }}
        />
      </div>

      {/* Command Box */}
      {open && (
        <div className="fixed inset-0 max-md:px-4 bg-gray-500/20 flex items-center justify-center z-50">
          <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Search Input with X */}
            <div className="relative">
              <Search className='absolute w-6 h-6 top-4 left-2 text-muted-foreground' strokeWidth={1}/>
              <Input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search colleges..."
                className="h-14 px-4 pl-10 text-base placeholder:text-gray-400 placeholder:font-thin placeholder:text-lg rounded-none border-b"
              />
              <X
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Results List */}
            <div className="z-50 max-h-[400px] overflow-y-auto">
              {results.length > 0 ? (
                results.map((college: any) => (
                  <div
                    key={college.id}
                    onClick={()=>{
                      router.push(`/colleges/${college.id}`)
                    }}
                    className="flex gap-4 items-center px-4 py-3 border-b text-left hover:bg-gray-100 transition-all cursor-pointer"
                  >
                    <Avatar className="w-10 h-10 bg-gray-400">
                      <AvatarImage
                        src={`https://ayufinders.com/jeni/superera/media/banner/${college.image}`}
                        alt={college.college}
                      />
                    </Avatar>
                    <div>
                      <p className="font-medium">{college.college}</p>
                      <p className="text-sm text-gray-500">{college.category}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-4 text-left text-gray-400 font-light text-sm">No results found.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
