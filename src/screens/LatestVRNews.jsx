import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export function LatestVRNews() {
    const navigate = useNavigate();
    const newsArticles = [
      {
        title: "Meta's Next-Gen VR Headset Announced",
        description: "Meta has unveiled its latest VR headset with advanced features.",
        link: "https://www.roadtovr.com/meta-new-vr-headset/",
      },
      {
        title: "Apple Vision Pro Launch Date Revealed",
        description: "Apple's Vision Pro is set to launch worldwide next month.",
        link: "https://www.roadtovr.com/apple-vision-pro-launch/",
      },
      {
        title: "HTC Vive Unveils New Wireless Adapter",
        description: "HTC has announced a cutting-edge wireless adapter for its VR headsets.",
        link: "https://www.roadtovr.com/htc-vive-wireless-adapter/",
      },
      {
        title: "Sony PlayStation VR2 Gains New Features",
        description: "Sony is rolling out a new update with improved tracking and visuals.",
        link: "https://www.roadtovr.com/psvr2-new-features/",
      },
    ];
  
    return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Latest VR News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {newsArticles.map((news, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-blue-400">{news.title}</h2>
              <p className="text-gray-300 mt-2">{news.description}</p>
              <button
                onClick={() => window.open(news.link, "_blank")}
                className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-700 text-black font-bold rounded-lg transition-all"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 px-6 py-3 bg-gray-700 hover:bg-gray-900 text-black font-bold rounded-lg"
        >
          Back
        </button>
      </div>
    );
  }