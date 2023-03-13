import "./App.css";
import Blog from "./components/Blog";

function App() {
  const posts = [
    {
      id: 1,
      title: "npm start",
      content:
        "Runs the app in the development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.",
    },
    {
      id: 2,
      title: "npm test",
      content:
        "Launches the test runner in the interactive watch mode. See the section about running tests for more information.",
    },
    {
      id: 3,
      title: "npm run build",
      content:
        "Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about deployment for more information.",
    },
  ];

  return (
    <>
      <Blog posts={posts} />
    </>
  );
}

export default App;
