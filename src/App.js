import { Article } from "./components/Article";
import { Info } from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Info />
      <Article
        title="About"
        text="I rarely find the time to write, and when I do it’s often a struggle for me. So treat these projects as if they appeared by miracle."
      />
      <Article
        title="Interests"
        text="I like photos, playing guitar. Drink bear with my friends. Running."
      />
      <Footer />
    </div>
  );
}

export default App;
