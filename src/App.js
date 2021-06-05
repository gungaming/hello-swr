import logo from './logo.svg';
import './App.css';

import useSWR from 'swr';

const url = 'https://aws.random.cat/meow';

function App() {

  // มี ฟังก์ชั่นที่เป็น url , fetcher
  // เพิ่ม options พวก revalidate ไรงี้ มีหลายฟังก์ชั่น
  const { data, error } = useSWR(url);

  if (error) {
    return <p>Error.....</p>
  }

  // ขึ้นว่า loading ถ้ายังไม่มี data
  if (!data) {
    return <p>Loading.....</p>
  }

  return (
    <div className="App">

      {/* show image */}
      <img src={data.file} alt="Meow" style={{ width: 500, marginTop: 12 }} />

    </div>
  );
}

export default App;
