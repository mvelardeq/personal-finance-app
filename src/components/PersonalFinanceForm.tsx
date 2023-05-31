import { useContext } from "react";
import { useFinanceForm } from "../hooks/useFinanceForm";
import { personalFinanceContext } from "../context/personalFinanceContext copy";

const intialFinanceForm = {
  typeOperation: "",
  concept: "",
  price: 0,
  note: "",
  date: "",
};
const PersonalFinanceForm = () => {
  const { addFinance } = useContext(personalFinanceContext);

  const {
    formData,
    onInputChange,
    onResetForm,
    typeOperation,
    concept,
    price,
    date,
    note,
  } = useFinanceForm(intialFinanceForm);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFinance({
      ...formData,
      date: new Date(date).getTime(),
      deleted: false,
      id: new Date().getTime(),
      price: Number(formData.price),
    });
    onResetForm();
  };

  return (
    <form action="" onSubmit={onSubmitForm}>
      <div className="w-full max-w-md mt-2">
        <div className="bg-white shadow-lg rounded-md px-8 py-6 ml-auto mr-auto">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="typeOperation"
            >
              Tipo de operación
            </label>
            <select
              id="typeOperation"
              name="typeOperation"
              onChange={onInputChange}
              value={typeOperation}
              className="shadow-sm border border-gray-400 rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
            >
              <option>Ingrese tipo operación</option>
              <option value="Gastos" className="mt-1 px-3 text-slate-400">
                Gastos
              </option>
              <option value="Ingresos" className="mt-1 px-3 text-slate-400">
                Ingresos
              </option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="concept"
            >
              Concepto
            </label>
            <select
              id="concept"
              name="concept"
              onChange={onInputChange}
              value={concept}
              className="shadow-sm border border-gray-400 rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
            >
              <option defaultValue={"otro"}>Ingrese concepto</option>
              <option value="Gastos" className="mt-1 px-3 text-slate-400">
                Gastos
              </option>
              <option value="Ingresos" className="mt-1 px-3 text-slate-400">
                Ingresos
              </option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="price"
            >
              Precio
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
              id="price"
              name="price"
              type="number"
              value={price}
              onChange={onInputChange}
              placeholder="precio"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="date"
            >
              Fecha
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={onInputChange}
              placeholder="fecha"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="note">Nota</label>
            <textarea
              name="note"
              id="note"
              value={note}
              onChange={onInputChange}
              cols={30}
              rows={4}
              className="shadow-sm appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalFinanceForm;
