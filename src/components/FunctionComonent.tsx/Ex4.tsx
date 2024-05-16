import React, { useState } from 'react';
const Exercise04: React.FC = () => {
  const [thanhPho, setThanhPho] = useState('');
  const xuLyThayDoiSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const giaTri = event.target.value;
    setThanhPho(giaTri);
    console.log(`Giá trị thành phố hiện tại: ${giaTri}`);
  };
  return (
    <div>
      <select value={thanhPho} onChange={xuLyThayDoiSelect}>
        <option value="">Chọn tỉnh/thành phố</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Cần Thơ">Cần Thơ</option>
        <option value="Huế">Huế</option>
        <option value="Nha Trang">Nha Trang</option>
        <option value="Vũng Tàu">Vũng Tàu</option>
      </select>
      <p>Trước khi chọn dữ liệu:</p>
      <p>Sau khi chọn dữ liệu: {thanhPho}</p>
    </div>
  );
};
export default Exercise04;
