import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./router";
import MainLayout from "./layout/MainLayout/MainLayout";
import { Fragment } from "react";
function App() {
    return (
        <Router>
            <Routes>
                {publicRouter.map((route, index) => {
                    let Layout = MainLayout;
                    if (route.layout === null) {
                        Layout = Fragment;
                    } else if (route.layout) {
                        Layout = route.layout;
                    }
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page></Page>
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
