//import logo from './logo.svg';
import './App.css';
import Headerr from './components/Headerr';
import Navvbar from './components/Navvbar';
import ProfilePage from './components/ProfilePage';

//КОМПОНЕНТА - функция, возвращающая разметку JSX

// компонента вызывается как тег и может быть вызвана из другой компоненты

//а эта компонента App вызывается как тег в файле index.js, поэтому можно здесь в неё написать других компонент 
//чтобы они вызывались тоже. Плюс мы их импортируем из других js-файлов

const App = () => {
  return (
    <div className='app-wrapper'>
      <Headerr />
      <Navvbar />
      <ProfilePage />
    </div>
  );
}

export default App;
