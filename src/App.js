import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer } from './components';
import Sidebar from './components/Sidebar';
import ThemeSettings from './components/ThemeSettings';
import { Latest, FullWidthTabs  } from './pages';
import './App.css';
import { SliderUnstyledValueLabelSlotProps } from '@mui/base';
import { useStateContext } from './contexts/ContextProvider';
import "react-datepicker/dist/react-datepicker.css";
import DetailPage from './components/DetailPage';
import axios from 'axios';
//to generate csrf token
axios.defaults.baseURL = "http://localhost:8000/";
//to get data in json format
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
//for logout to get the token otherwise unauthorized
// axios.interceptors.request.use(function (config) {
// 	const token = localStorage.getItem("auth_token");
// 	config.headers.Authorization = token ? `Bearer ${token}` : "";
// 	return config;
// });
const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
         {/*  <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div> */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
             
                <Route path="/" element={(<Latest />)} />
                <Route path="/upcoming" element={(<Latest />)} />
                <Route path="/list" element={(<FullWidthTabs />)} />
                <Route path="/detailpage" element={(<DetailPage />)} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
