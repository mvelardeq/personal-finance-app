import PersonalFinanceForm from "./components/PersonalFinanceForm";
import TableInfo from "./components/TableInfo";
import { useFinance } from "./hooks/useFinance";

function App() {
  const { totalExpenses } = useFinance();
  console.log("render component");
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-indigo-500 font-bold text-3xl mb-4">
        Personal Finance Appp
      </h1>
      <hr />
      <div className="md:flex md:gap-8 flex-none">
        <div className="w-full md:w-3/5">
          <h3 className="text-xl mt-2">Vas gastando S/.{totalExpenses}</h3>
          <TableInfo />
        </div>
        <div className="w-full md:w-2/5">
          <h3 className="text-xl mt-2">Form</h3>
          <PersonalFinanceForm />
        </div>
      </div>
    </div>
  );
}

export default App;
