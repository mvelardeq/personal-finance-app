import { useForm } from "../hooks/useForm";

const SimpleForm = () => {
  const { formData, onInputChange } = useForm({});

  return (
    <div>
      <form action="" className="mt-6">
        <div className="mb-2">
          <label htmlFor="" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="name"
            className="block border px-2 py-1 rounded-md mb-3"
            name="name"
            onChange={onInputChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="block mb-2">
            Email
          </label>
          <input
            type="Email"
            placeholder="email"
            className="block border px-2 py-1 rounded-md mb-3"
            name="email"
            onChange={onInputChange}
          />
        </div>
        <button
          type="submit"
          className="mt-6 block bg-indigo-500 text-white px-4 py-1 rounded-md hover:bg-indigo-600"
        >
          save
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
