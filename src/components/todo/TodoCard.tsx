const TodoCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
        <input type="checkbox" />
        <p className="font-semibold">Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className="space-x-5">
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
