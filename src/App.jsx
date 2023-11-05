import Contact_page from "./Components/Contact_page";
import Content_header from "./Components/Content_header";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <main className="border-2 border-black mb-16 w-[90%] m-auto mt-2 ">
        <Content_header />
        <Contact_page />
      </main>
    </div>
  );
};

export default App;
