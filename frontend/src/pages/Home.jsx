import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-purple-700">Mood Tracker</h1>
            <p className="text-lg text-gray-600 mt-2">Track your mood daily and stay mindful!</p>

            <Link to="/add-mood">
                <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
                    Add Your Mood 😊
                </button>
                <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
                    Add Your Condition
                </button>
            </Link>
        </div>
    );
}

export default Home;
