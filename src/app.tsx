import React, { useEffect, useState } from 'react';
import Home from "./pages/home/home";
import Preloader from "./components/preloader/preloader";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
            {
                !loading ? (
                    <Home/>
                ) : (
                    <Preloader/>
                )
            }
        </>
    );
}

export default App;
