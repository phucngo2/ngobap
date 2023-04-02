import "App.css";
import LeftContent from "components/Layout/LeftContent";
import RightContent from "components/Layout/RightContent";

function App() {
    return (
        <div className="app-container">
            <div className="content-layout rounded-lg lg:rounded-l-xl  text-black">
                <div className="content-left">
                    <LeftContent />
                </div>
                <div className="content-right">
                    <RightContent />
                </div>
            </div>
        </div>
    );
}

export default App;
