import React from "react";

const data = [
  {
    id: 1,
    title: "Meal",
    list: ["Breakfast", "Lunch", "Dinner"]
  },
  {
    id: 2,
    title: "Difficulty",
    list: ["Easy", "Medium", "Hard"]
  },
  {
    id: 3,
    title: "Serving",
    list: ["1 Person", "2 Person", "3 person", "4 person"]
  }
];

function Accordian({ activeId, setActiveId }) {

  const showItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-64 border rounded">
      {data.map((item) => (
        <div key={item.id} className="border-b">

          {/* Header */}
          <div className="flex justify-between px-3 py-2">
            <span className="">{item.title}</span>

            <button
              onClick={() => showItem(item.id)}
              className="text-orange-600 cursor-pointer"
            >
              {activeId === item.id ? "Hide" : "Show"}
            </button>
          </div>

          {/* List */}
          {activeId === item.id && (
            <ul className="">
              {item.list.map((li, index) => (
                <li key={index}
                className=""
                >{li}</li>
              ))}
            </ul>
          )}

        </div>
      ))}
    </div>
  );
}

export default Accordian;
