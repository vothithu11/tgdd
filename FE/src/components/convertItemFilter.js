export const convertItemFilter = (key, item) => {
    if (key === 'ram' || key === 'screen') {
      return `${item} GB`;
    } else if (key === 'storage') {
      return `${item > 10 ? item + ' RAM' : item + ' TB'}`;
    } else if (key === 'charger') {
      return  `${item === 0 ? 'Sạc không dây' : 'Sạc nhanh (từ' + item +'W)'}`;
    } else if (key === 'type') {
      return  `${item === 'phone' ? 'Điện thoại phổ thông' : item}`;
    } else if (key === 'demand') {
      return  `${item === 'cấu-hình' ? 'Chơi game' : item === 'sạc' ?'Sạc nhanh' :item}`;
    } 
    return item;
  };

 