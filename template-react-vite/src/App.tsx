import { useState } from 'react';
import './App.css';

const App = () => {
  const [currentGame] = useState<string | null>(null);

  const openGameInNewWindow = (url: string) => {
    const gameWindow = window.open(url, '_blank');
    if (gameWindow) {
      // Add back button to the new window
      gameWindow.onload = () => {
        const backButton = gameWindow.document.createElement('button');
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Quay Lại';
        backButton.style.cssText = `
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 9999;
          background-color: #4F46E5;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        `;
        backButton.onmouseover = () => {
          backButton.style.backgroundColor = '#4338CA';
        };
        backButton.onmouseout = () => {
          backButton.style.backgroundColor = '#4F46E5';
        };
        backButton.onclick = () => {
          gameWindow.close();
        };
        gameWindow.document.body.appendChild(backButton);
      };
    }
  };

  const renderGame = () => {
    if (!currentGame) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-8 text-indigo-600">
            Math Games Collection
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GameCard 
              title="Đầu Bếp Phân Số v1 - Cường bé - 21042025"
              description="Học phân số qua nấu ăn - Phiên bản 1"
              onClick={() => 
                openGameInNewWindow('/output4_gameDauBep_v1_genspark_easyPromptEvery_21042025.html')
              }
            />
            <GameCard 
              title="Đầu Bếp Phân Số v2 - Cường bé - 21042025"
              description="Học phân số qua nấu ăn - Phiên bản 2"
              onClick={() => 
                openGameInNewWindow('/output6_gameDauBep_v2_21042025.html')
              }
            />
            <GameCard 
              title="Fraction Fun: Slice the Circle - A Hiệp (17042025)"
              description="Học toán qua trò chơi chia a hiệp"
              onClick={() => 
                openGameInNewWindow('/game3_ChiaAHiep_17042025.html')
              }
            />
            <GameCard 
              title="Nhóm Đồ Vật - Hoa Quả (a Hiệp) (17042025)"
              description="Học toán qua trò chơi nấm chấm hoa quả - Phiên bản 17042025"
              onClick={() => 
                openGameInNewWindow('/game4_namChamHoaQua_index_final_17042025.html')
              }
            />
            <GameCard 
              title="Đong Đổ Thần Sầu - Cường bé - 22042025"
              description="Học phân số thú vị qua trò chơi đong đổ nguyên liệu!"
              onClick={() => 
                openGameInNewWindow('/output2_DongDoThanSau_22042025.html')
              }
            />
          </div>
        </div>
      );
    }
  };

  const GameCard = ({
    title,
    description,
    onClick,
  }: {
    title: string;
    description: string;
    onClick: () => void;
  }) => (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-2xl font-bold mb-3 text-indigo-700">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Chơi Game
      </button>
    </div>
  );

  return <div>{renderGame()}</div>;
};

export default App;
