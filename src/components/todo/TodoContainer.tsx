import TodoCard from "./todoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 h-full w-full p-5 rounded-xl space-y-6">
        {/* <div className="bg-white text-xl font-semibold rounded-lg p-3 flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
