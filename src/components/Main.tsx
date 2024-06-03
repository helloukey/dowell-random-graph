import { useDispatch, useSelector } from "react-redux";
import {
  changeSide,
  changeSelection,
  changeChoice,
  changeValue,
  addGraphData,
} from "../redux/slices/commonSlice";
import { useGetRandomPointsMutation } from "../redux/api/graphApi";
import { useEffect } from "react";
import Graph from "./Graph";
import { CommonSlice } from "../types/common";

const Main = () => {
  const { type, side, selection, choice, value, graphData } = useSelector(
    (state: CommonSlice) => state.common
  );
  const dispatch = useDispatch();
  const [getRandomPoints, { data, isLoading }] = useGetRandomPointsMutation();

  // Handle Submit
  const handleSubmit = () => {
    if (type === "field") {
      getRandomPoints({
        type,
        data: {
          side: Number(side),
          selection: Number(selection),
          choice: Number(choice),
          value: Number(value),
        },
      });
    } else {
      getRandomPoints({
        type,
        data: {
          side: Number(side),
          selection: Number(selection),
        },
      });
    }
  };

  // Add Graph Data
  useEffect(() => {
    if (data?.response?.success) {
      dispatch(addGraphData(data?.response?.listOfPoints));
    }
  }, [data, dispatch]);

  return graphData ? (
    <Graph />
  ) : (
    <main className="flex-1 bg-gray-100 dark:bg-gray-950 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`space-y-4 ${type === "excel" ? "opacity-50 pointer-events-none" : ""}`}>
              <div>
                <label
                  htmlFor="side"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Side
                </label>
                <input
                  type="number"
                  id="side"
                  placeholder="Enter side value"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 py-2 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  value={side}
                  onChange={(e) => dispatch(changeSide(e.target.value))}
                  disabled={type === "excel"}
                />
              </div>
              <div>
                <label
                  htmlFor="selection"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Selection
                </label>
                <input
                  type="number"
                  id="selection"
                  placeholder="Enter selection value"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 py-2 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  value={selection}
                  onChange={(e) => dispatch(changeSelection(e.target.value))}
                  disabled={type === "excel"}
                />
              </div>
              <div>
                <label
                  htmlFor="choice"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Choice
                </label>
                <input
                  type="number"
                  id="choice"
                  placeholder="Enter choice value"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 py-2 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  value={choice}
                  onChange={(e) => dispatch(changeChoice(e.target.value))}
                  disabled={type === "excel"}
                />
              </div>
              <div>
                <label
                  htmlFor="value"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Value
                </label>
                <input
                  type="number"
                  id="value"
                  placeholder="Enter value"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 py-2 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => dispatch(changeValue(e.target.value))}
                  disabled={type === "excel"}
                />
              </div>
            </div>
            <div className={`space-y-4 ${type === "field" ? "opacity-50 pointer-events-none" : ""}`}>
              <div>
                <label
                  htmlFor="side"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Side (Excel)
                </label>
                <input
                  type="number"
                  id="side"
                  placeholder="Enter side value"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 py-2 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  value={side}
                  onChange={(e) => dispatch(changeSide(e.target.value))}
                  disabled={type === "field"}
                />
              </div>
              <div>
                <label
                  htmlFor="selection"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Selection (Excel)
                </label>
                <input
                  type="number"
                  id="selection"
                  placeholder="Enter selection value"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 py-2 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  value={selection}
                  onChange={(e) => dispatch(changeSelection(e.target.value))}
                  disabled={type === "field"}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-gray-800 text-white rounded-md px-6 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
