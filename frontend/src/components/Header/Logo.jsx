import React, { useState } from 'react';

function Logo(){
    return(
        <>
       <a href="/" className="flex items-center">
  <div className="w-12 h-12">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIiBmaWxsPSIjMUU0MEFGIiAvPjxwYXRoIGQ9Ik0xMCA0MCBMMjAgMjUgTDMwIDMwIEw0MCAyMCBMNTAgMzUiIHN0cm9rZT0iIzIyQzU1RSIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIiAvPjx0ZXh0IHg9IjcwIiB5PSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzFFMjkzQiI+U3RvY2s8dHNwYW4gc3R5bGU9ImZpbGw6ICMyMkM1NUU7Ij5BSSDfPC90c3Bhbj48L3RleHQ+PC9zdmc+" alt="Logo" />
  </div>
  <span className="text-2xl font-bold text-blue-500 ml-2">StockAI</span>
</a>

        </>
    )
}

export default Logo;