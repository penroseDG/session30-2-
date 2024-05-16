import React, { useState } from 'react';
const Exercise03: React.FC = () => {
  const [ngayThang, setNgayThang] = useState('');
  const xuLyThayDoiNgay = (event: React.ChangeEvent<HTMLInputElement>) => {
    const giaTri = event.target.value;
    setNgayThang(giaTri);
    console.log(`Giá trị ngày tháng hiện tại: ${giaTri}`);
  };
  return (
    <div>
      <input
        type="date"
        value={ngayThang}
        onChange={xuLyThayDoiNgay}
        placeholder="Nhập ngày tháng"
      />
      <p>Trước khi nhập liệu:</p>
      <p>Sau khi nhập liệu: {ngayThang}</p>
    </div>
  );
};
export default Exercise03;
