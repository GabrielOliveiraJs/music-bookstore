import { BrowserRouter, Routes, Route } from "react-router-dom"
import BasePage from "./pages/BasePage/Index"
import MusicPage from "./pages/MusicPage/Index"
import MusicListProvider from "./Contexts/musicList"
import MusicPlayerProvider from "./Contexts/MusicPlayer" 

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MusicListProvider>
                <MusicPlayerProvider>
                    <Routes>
                        <Route path="/" element={<BasePage />}>
                            <Route index element={<MusicPage />} />
                        </Route>
                    </Routes>
                </MusicPlayerProvider>
            </MusicListProvider>
        </BrowserRouter>
    )
}

export default AppRoutes