import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  RadialBar,
  RadialBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {IHorseDetail} from "../../../type/apiTypes";
import SharedTxt from "../../shared/sharedTxt";

export default function HorseDetailTotal(
  detailData: Pick<
    IHorseDetail,
    "winRateT" | "chaksunT" | "ord1CntT" | "ord2CntT" | "qnlRateT" | "rcCntT"
  >
) {
  const radialData = [
    {
      name: "통산총출주회수",
      value: detailData.rcCntT ? detailData.rcCntT : 0,
      fill: "#ffb700",
    },
    {
      name: "통산2착회수",
      value: detailData.ord2CntT ? detailData.ord2CntT : 0,
      fill: "#0099ff",
    },
    {
      name: "통산1착회수",
      value: detailData.ord1CntT ? detailData.ord1CntT : 0,
      fill: "#d20007",
    },
  ];
  const barData = [
    {
      name: "통산승률 / 통산복승률",
      winRateT: detailData.winRateT ? detailData.winRateT : 0,
      qnlRateT: detailData.qnlRateT ? detailData.qnlRateT : 0,
    },
  ];

  return (
    <div className="flex flex-col gap-5 border-2 border-indigo-500 p-5 rounded-md">
      <div className="flex items-center">
        <SharedTxt
          txtType="span"
          txt=""
          className="w-2 h-5 bg-indigo-500 mr-3"
        />
        <SharedTxt txtType="h3" txt="통산전적" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-end">
          <SharedTxt txtType="h4" txt="통산착순상금" />
          <SharedTxt
            txtType="h4"
            txt={
              detailData.chaksunT === "-"
                ? "0 원"
                : `${detailData.chaksunT.toLocaleString()} 원`
            }
          />
        </div>
        <div className="flex relative top-10 -left-10 h-96 overflow-y-hidden">
          <RadialBarChart
            width={720}
            height={600}
            innerRadius="40%"
            outerRadius="110%"
            startAngle={180}
            endAngle={0}
            data={radialData}
          >
            <RadialBar
              label={{fill: "#fff", position: "insideTop"}}
              background
              dataKey="value"
              legendType="circle"
            />
            <Legend
              iconSize={10}
              width={150}
              height={140}
              layout="horizontal"
              verticalAlign="top"
              align="right"
            />
            <Tooltip
              payload={radialData}
              labelFormatter={(_, payload) =>
                payload.map((item) => item.payload.name)
              }
              formatter={(value, _, item) => [value, item.payload.name]}
            />
          </RadialBarChart>
        </div>
        <div>
          <BarChart width={320} height={350} data={barData}>
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Legend
              formatter={(label) =>
                label === "winRateT" ? "통산승률" : "통산복승률"
              }
            />
            <Tooltip />
            <Bar
              dataKey="winRateT"
              fill="#8884d8"
              label={{
                fill: "white",
                fontSize: 25,
                formatter(label: number) {
                  label ? `${label} %` : 0;
                },
              }}
            />
            <Bar
              dataKey="qnlRateT"
              fill="#82ca9d"
              label={{
                fill: "white",
                fontSize: 25,
                formatter(label: number) {
                  label ? `${label} %` : 0;
                },
              }}
            />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
