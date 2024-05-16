import React, { useState } from 'react';
const Exercise02: React.FC = () => {
  const [giaTriNhap, setGiaTriNhap] = useState('');
  const xuLyThayDoiInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const giaTri = event.target.value;
    setGiaTriNhap(giaTri);
    console.log(`Giá trị hiện tại: ${giaTri}`);
  };
  return (
    <div>
      <input
        type="text"
        value={giaTriNhap}
        onChange={xuLyThayDoiInput}
        placeholder="Nhập dữ liệu vào đây"
      />
      <p>Trước khi nhập liệu:</p>
      <p>Sau khi nhập liệu: {giaTriNhap}</p>
    </div>
  );
};
export default Exercise02;
