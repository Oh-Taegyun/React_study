function App() {
  const name = '리엑트';
  const style = {
      // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법을 쓰자
      backgroundColor : 'black',
      color : 'aqua',
      fontSize : '48px',
      fontWeight : 'bold',
      padding : 16    
  };
  return <div style={style}>{name}</div>;
}

export default App;