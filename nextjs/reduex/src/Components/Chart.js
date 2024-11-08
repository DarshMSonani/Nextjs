import axios from "axios"
import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function Chart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:6902/");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {/* Uncomment and use this section if you want to display the chart */}
            {/* If you went to bar chart then exchenge line chart to barchart and line to bar */}
            <ResponsiveContainer width={500} height={500}>
                <LineChart width={500} height={500} data={data}>
                    <Tooltip />
                    <YAxis dataKey={"value"} />
                    <XAxis dataKey={"range"} />
                    <Line type={"monotone"} stroke="red" dataKey={"value"} />
                </LineChart>
            </ResponsiveContainer>


        </>
    );
}
