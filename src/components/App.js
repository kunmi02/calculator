import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const value = calculate({
    total: 2,
    next: 0,
    operation: '*',
  }, '=');

  return (
    <>
      <Display result={value.next} />
      <ButtonPanel />
    </>
  );
};

export default App;
