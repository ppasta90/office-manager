const FloorPlan = () => {
  return (
    <div className="mx-auto p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Floor Plan</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 border border-gray-300 p-4 text-center py-14">Stanza 6</div>
        <div className="bg-gray-100 border border-gray-300 p-4 text-center py-14">Stanza 2</div>
        <div className="bg-gray-100 border border-gray-300 p-4 text-center py-14">Stanza 3</div>
        <div className="bg-gray-100 border border-gray-300 p-4 text-center py-14 col-span-3">Sala d'attesa</div>
        <div className="bg-gray-100 border border-gray-300 p-4 text-center py-14">Stanza 5</div>
        <div className="bg-gray-100 border border-gray-300 p-4 text-center py-14">Stanza 1</div>
        <div className="bg-gray-100 border border-gray-300 p-4 text-center py-14">Segreteria</div>
      </div>
    </div>
  );
};

export default FloorPlan;