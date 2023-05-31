import { useContext } from "react";
import { personalFinanceContext } from "../context/personalFinanceContext copy";
const TableInfo = () => {
  const { financeSate, removeFinance } = useContext(personalFinanceContext);
  const { finances } = financeSate;
  return (
    <table className="table-auto w-full p-0 border border-separate border-slate-300 border-spacing-0 rounded-md mt-4">
      <thead className="">
        <tr className="">
          <th className="text-left border-b border-saeparate border-gray-300 bg-indigo-100 p-3">
            Tipo
          </th>
          <th className="text-left border-b border-saeparate border-gray-300 bg-indigo-100 p-3">
            Concepto
          </th>
          <th className="text-left border-b border-saeparate border-gray-300 bg-indigo-100 p-3">
            Precio
          </th>
          <th className="text-left border-b border-saeparate border-gray-300 bg-indigo-100 p-3">
            Fecha
          </th>
          <th className="text-left border-b border-saeparate border-gray-300 bg-indigo-100 p-3">
            Nota
          </th>
          <th className="text-left border-b border-saeparate border-gray-300 bg-indigo-100 p-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {finances?.map(({ id, typeOperation, concept, price, date, note }) => (
          <tr className="odd:bg-white even:bg-slate-100" key={id}>
            <td className="p-3">{typeOperation}</td>
            <td className="p-3">{concept}</td>
            <td className="p-3">{price}</td>
            <td className="p-3">{new Date(date).toLocaleDateString()}</td>
            <td className="p-3">{note}</td>
            <td className="p-3">
              <button
                className="bg-red-600 rounded-md text-white px-2 py-1"
                onClick={() => removeFinance(id)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableInfo;
