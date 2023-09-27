"use client";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Massages",
    "Number of threatened species": 3000,
  },
  {
    name: "Surgen",
    "Number of threatened species": 1445,
  },
  {
    name: "cardiologist",
    "Number of threatened species": 743,
  },
  {
    name: "neurologist",
    "Number of threatened species": 743,
  },
  {
    name: "ENT specialist",
    "Number of threatened species": 743,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const Barchart = () => (
  <Card>
    <Title>Number of species threatened with extinction (2021)</Title>
    <Subtitle>
      The IUCN Red List has assessed only a small share of the total known species in the world.
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Number of threatened species"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  </Card>
);
export default  Barchart