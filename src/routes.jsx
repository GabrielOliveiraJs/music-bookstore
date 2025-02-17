import { BrowserRouter, Routes, Route } from "react-router-dom"
import BasePage from "./pages/BasePage/Index"
import MusicPage from "./pages/MusicPage/Index"
import MusicListProvider from "./Contexts/musicList"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MusicListProvider>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<MusicPage />} />
                    </Route>
                </Routes>
            </MusicListProvider>
        </BrowserRouter>
    )
}

export default AppRoutes