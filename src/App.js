import './App.css';
import AABBBCCAA from './components/AABBBCCAA';
import Anagrams from './components/Anagrams';
import ArrayInduction from './components/ArrayInduction';
import FindLargest from './components/ArrayLargest';
import Counter from './components/Counter';
import FabinocciSeries from './components/FabinocciSeries';
import FetchData from './components/FetchData';
import FindDuplicatesArray from './components/FindDuplicates';
import FlattenArray from './components/FlattenArray';
import FlattenArrayLoop from './components/FlattenArrayLoop';
import FormSubmit from './components/FormSubmit';
import MatrixTraspose from './components/MatrixTraspose';
import Plaindrome from './components/Plaindrome';
import RemoveDuplicates from './components/RemoveDuplicates';
import SumOfElements from './components/sumOfElementsOfArray';
import SumOfElemntsOfTwoArray from './components/SumOfElemntsOfTwoArray';
import Table from './components/Table';


function App() {
  return (
    <div className="App">
     <ArrayInduction/>
     <FabinocciSeries/>
     <Anagrams/>
     {/* <FetchData/> */}
     <FindLargest/>
     <Plaindrome/>
     <FindDuplicatesArray/>
     <RemoveDuplicates/>
     <SumOfElements/>
     <SumOfElemntsOfTwoArray/>
     <Counter/>
     <FormSubmit/>
     <FlattenArray/>
     <FlattenArrayLoop/>
     <Table/>
     <MatrixTraspose/>
     <AABBBCCAA/>
    </div>
  );
}

export default App;
