const HospitalTable = ({ data }) => {
    return (
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">District</th>
            <th className="px-4 py-2">Government</th>
            <th className="px-4 py-2">Private</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((district, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">{district.name}</td>
              <td className="border px-4 py-2">{district.government}</td>
              <td className="border px-4 py-2">{district.private}</td>
              <td className="border px-4 py-2">{district.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default HospitalTable;
  