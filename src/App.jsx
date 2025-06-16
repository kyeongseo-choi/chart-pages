import { useState } from 'react'
import './App.css'
import ApprovalRatingLineChart from './components/ApprovalRatingLineChart';
import WeightLineChart from './components/WeightLineChart';

function App() {
  const [selected, setSelected] = useState('ApprovalRatingLineChart');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const renderComponent = () => {
    switch (selected) {
      case 'ApprovalRatingLineChart':
        return <ApprovalRatingLineChart />;
      case 'WeightLineChart':
        return <WeightLineChart />;
      default:
        return <p className="none">컴포넌트를 선택해주세요.</p>;
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 'auto' }}>
      <header className="header"> 
        <label htmlFor="component-select" className="text-select">
          컴포넌트 선택: 
        </label>
        <select
          id="component-select"
          value={selected}
          onChange={handleSelect}
          className="dropdown"
        >
          <option value="ApprovalRatingLineChart">정당지지도 그래프</option>
          <option value="WeightLineChart">연령대별 표집 정도 그래프</option>
        </select>
      </header>
      <main className="flex-grow w-full flex items-center justify-center p-8"
            style={{ height: '80vh' }}> {/* 나머지 높이 */}
        {renderComponent()}
      </main> 
    </div>
  )
}

export default App
