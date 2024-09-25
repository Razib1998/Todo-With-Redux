import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useAddTodoMutation } from "../../redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"; // Import the correct Select components from shadcn/ui

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(""); // Keep track of the selected priority

  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();
  console.log("inside the component", data, isLoading, isError, isSuccess);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails = {
      title: task,
      description,
      priority,
      isCompleted: false,
    };

    addTodo(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add Your Task Here
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Add your task, which you want to do.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Task Input */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right text-sm font-medium">
                Task
              </Label>
              <Input
                value={task}
                onChange={(e) => setTask(e.target.value)} // onChange to track input
                id="task"
                className="col-span-3 p-2 border rounded-md"
                placeholder="Enter task"
              />
            </div>

            {/* Description Input */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="description"
                className="text-right text-sm font-medium"
              >
                Description
              </Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)} // onChange to track input
                id="description"
                className="col-span-3 p-2 border rounded-md"
                placeholder="Enter description"
              />
            </div>

            {/* Priority Select */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="priority"
                className="text-right text-sm font-medium"
              >
                Priority
              </Label>
              <Select onValueChange={setPriority}>
                {/* onValueChange directly updates state */}
                <SelectTrigger className="col-span-3 w-full p-2 border rounded-md">
                  <SelectValue placeholder={priority || "Select Priority"} />{" "}
                  {/* Reflect the selected priority */}
                </SelectTrigger>
                <SelectContent className="w-full bg-white border rounded-md shadow-lg">
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button
                type="submit"
                className="bg-black text-white p-2 rounded-md"
              >
                Save changes
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
