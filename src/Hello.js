const App = () => {
  return (
    <div>
      <p> Hello world</p>
    </div>
  );
};
const Hello = () => {
  return (
    <div>
      <h1> Greetings to you</h1>
      <App />
    </div>
  );
};
export default Hello;
