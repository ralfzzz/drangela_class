const React = require("react");
const { Note } = require("./Note");
const { Header } = require("./Header");
const { Footer } = require("./Footer");

export function App() {
  return (
    <div>
    <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;