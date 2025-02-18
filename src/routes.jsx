import { BrowserRouter, Routes, Route } from "react-router-dom"
import BasePage from "./pages/BasePage/Index"
import MusicPage from "./pages/MusicPage/Index"
import MusicListProvider from "./Contexts/musicList"
import AudioRefProvider from "./Contexts/AudioRef"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MusicListProvider>
                <AudioRefProvider>
                    <Routes>
                        <Route path="/" element={<BasePage />}>
                            <Route index element={<MusicPage />} />
                        </Route>
                    </Routes>
                </AudioRefProvider>
            </MusicListProvider>
        </BrowserRouter>
    )
}

export default AppRoutes