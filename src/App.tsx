import Home from "./pages/Home";
import Row from "./styled_ui/Row";

export default function App() {
  return (
    <main>
      <Row type="vertical">
        <Row type="vertical">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </Row>
        <Row type="horizontal">
          <Home />
        </Row>
      </Row>
    </main>
  );
}
