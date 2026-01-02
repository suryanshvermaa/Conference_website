import React from 'react';

const AdminLoader = ({ label = 'Loading...', className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 py-10 ${className}`.trim()}>
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-200 border-t-indigo-600" />
      <div className="text-sm text-zinc-600">{label}</div>
    </div>
  );
};

export default AdminLoader;
