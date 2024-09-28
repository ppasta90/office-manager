interface Room {
  name: string;
  span?: number;
}

const rooms: Room[] = [
  { name: "Stanza 6" },
  { name: "Stanza 2" },
  { name: "Stanza 3" },
  { name: "Sala d'attesa", span: 3 },
  { name: "Stanza 5" },
  { name: "Stanza 1" },
  { name: "Segreteria" },
];

const RoomCell: React.FC<Room> = ({ name, span = 1 }) => (
  <div 
    className={`bg-gray-100 border border-gray-300 p-4 text-center py-14 ${span > 1 ? `col-span-${span}` : ''}`}
  >
    {name}
  </div>
);

const FloorPlan: React.FC = () => {
  return (
    <div className="mx-auto p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Floor Plan</h1>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room, index) => (
          <RoomCell key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default FloorPlan;