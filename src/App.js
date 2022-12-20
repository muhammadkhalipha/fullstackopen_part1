const App = () => {
  const now = new Date();
  const a = 10;
  const b = 15;
  return (
    <div>
      <p>
        this is the valid information as regard the date in nigeria today;
        {now.toString()}
      </p>
      <p> {a * b}</p>
    </div>
  );
};
export default App;
