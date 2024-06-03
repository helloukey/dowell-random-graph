import { useDispatch, useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { transformData } from "../utils/transformData";
import { addGraphData } from "../redux/slices/commonSlice";
import { useEffect, useState } from "react";
import { CommonSlice } from "../types/common";

const Graph = () => {
  const { graphData } = useSelector((state: CommonSlice) => state.common);
  const data = transformData(graphData);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Clear Graph
  const handleClearGraph = () => {
    dispatch(addGraphData(null));
  };

  return (
    <main className="flex-1 bg-gray-100 dark:bg-gray-950 py-12 px-4 md:px-6">
      <button
        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 mb-4 ml-16"
        onClick={handleClearGraph}
      >
        Clear Graph
      </button>
      <LineChart
        width={0.9 * width}
        height={0.7 * height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </main>
  );
};

export default Graph;
