import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoDropdown from "./TodoDropdown";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoDropdown />
      </div>
      <div className="bg-primary-gradient h-full w-full p-5 rounded-xl space-y-6">
        {/* <div className="bg-white text-xl font-semibold rounded-lg p-3 flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
