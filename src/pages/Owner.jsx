import React from 'react';

function Owner() {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">Nuttipol - Group H - 21</h1>
      <div className="flex justify-center mb-4">
        <img src="/src/image/mypicture.png" alt="Nuttipol" className="w-32 h-32 rounded-full" />
      </div>
      <div>
        <h2 className="text-xl font-medium mb-2">Short Biography:</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
    </div>
  );
}

export default Owner;
