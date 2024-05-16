import React, { useState } from 'react';

const Exercise06: React.FC = () => {
  const [hienThi, setHienThi] = useState(false);

  const thayDoiTrangThai = () => {
    setHienThi(!hienThi);
  };

  return (
    <div>
      <button onClick={thayDoiTrangThai}>
        {hienThi ? 'Hiển' : 'Ẩn'}
      </button>
    </div>
  );
};

export default Exercise06;
