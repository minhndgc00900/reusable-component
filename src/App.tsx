import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/loading/loading";
import NavigationUI from "./components/navigation";
import Sidebar from "./components/sidebar";
import { AppContext } from "./contexts";
import useLoading from "./custom-hook/useLoading";
import WebFrameworkList from "./pages/web-framework-list";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  // temporarily create function to show loading.
  const delay = (ms: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const fetchDevs = async () => {
    console.log("this might take some time....");
    await delay(2000);
    console.log("Done!");
  };
  const [fetchLoading, isLoadingDev] = useLoading(fetchDevs);

  useEffect(() => {
    fetchLoading();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex">
      <AppContext.Provider value={{ isExpanded, setIsExpanded }}>
          <Sidebar />
          <div className="content-container">
            <NavigationUI />
            <BrowserRouter>
              <Routes>
                <Route path="/list" element={<WebFrameworkList />} />
                <Route path="*" element={<Navigate to="/list" />} />
              </Routes>
            </BrowserRouter>
          </div>
          {isLoadingDev && <Loading />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
