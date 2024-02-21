import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Map from "./pages/Map";
import UserManagement from "./pages/UserManagement";
export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>

					<Route
						path='/map'
						element={<Map />}
					/>
					<Route
						path='/user_management'
						element={<UserManagement />}
					/>
					<Route
						path='*'
						element={<div>Not Found</div>}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
