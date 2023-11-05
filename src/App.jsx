import Contact_page from "./Components/Contact_page";
import Content_header from "./Components/Content_header";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <div className="">
      <Navigation />
      <main className="mb-16 w-[90%] m-auto">
        <Content_header />
        <Contact_page />
      </main>
    </div>
  );
};

export default App;
