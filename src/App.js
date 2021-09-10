import React from "react";

import {Footer, Header, Products} from "./components";

function App() {
    return (
        <div className={`container all_content`}>
            <Header/>
            <main className={`main`}>
                <Products/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
