import React, { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';

const Top: React.FC = () => {

  const [temp, setTemp] = useState<string>('sss');
  const [test, setTest] = useState<string>('test');

  const getTop = async () => {
    try {
      const response = await axios.get('/work');
      setTemp(response.data.message);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTop();
  }, []);

  return (
    <div className="App">
      <h1 className="bg-gray-300">Topページ</h1>
      <a href="/works">作品一覧へ</a>
      {temp}
      {test}
    </div>
  );
}

export default Top;
