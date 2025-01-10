import { BrowserRouter, Routes, Route } from "react-router-dom"
import BasePage from "./pages/BasePage/Index"
import MusicList from "./pages/MusicList/Index"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<MusicList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes