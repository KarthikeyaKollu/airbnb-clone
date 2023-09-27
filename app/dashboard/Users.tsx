"use client";

import {
  Icon,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  Title,
  Flex,
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
  DeltaType,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
export type SalesPerson = {
  name: string;
  doctor: string;
  type: string;
  fair: string;
  status: string;
};

export const salesPeople: SalesPerson[] = [
  {
    name: "Peter Doe",
    doctor: "Phil",
    type: "surgen",
   fair: "120",
    status: "Done",
  },
  {
    name: "Lena Whitehouse",
    doctor: "sam",
    type: "Cardiologist",
   fair: "100",
    status: "Pending",
  },
  {
    name: "Phil Less",
    doctor: "jack",
    type: "ENT",
   fair: "50",
    status: "Done",
  },
  
  {
    name: "John Camper",
    doctor: "Peter",
    type: "dentist",
   fair: "90",
    status: "Pending",
  },
  {
    name: "Max Balmoore",
    doctor: "brin",
    type: "ENT",
   fair: "150",
    status: "Cancled",
  },
];

const deltaTypes: { [key: string]: DeltaType } = {
  Pending: "unchanged",
  Done: "moderateIncrease",
  Cancled: "moderateDecrease",
};

export default function SalesPeopleTable() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  return (
    <div className="border-2 rounded-xl p-5">
      <Title>New Appointments</Title>

      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Doctor</TableHeaderCell>
            <TableHeaderCell className="text-right">Type</TableHeaderCell>
            <TableHeaderCell className="text-right">Fair ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Date</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.doctor}</TableCell>
                <TableCell className="text-right">{item.type}</TableCell>
                <TableCell className="text-right">{item.fair}</TableCell>
           
                <TableCell className="text-right">
                  <BadgeDelta deltaType={deltaTypes[item.status]} size="xs">
                    {item.status}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}