const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} {b} is {a + b}
      </p>
    </div>
  );
};
console.log(" Hello from component");
export default App;
