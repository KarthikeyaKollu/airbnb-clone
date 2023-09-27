"use client";
import React from 'react'
import KpiCardGrid from './KpiCardGrid';
import Barchart  from './Barchart';



import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import { useRouter } from "next/navigation";
import SalesPeopleTable from './Users';

export default function Dashboard() {
    const router = useRouter();
  return (
    <div className="p-12">
      <Title >Dashboard</Title>
      <Text>You can manage all things there..</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab >Dashboard</Tab>
          <Tab>Users</Tab>
          <Tab onClick={() => router.push('/properties')}>My Properties</Tab>
          <Tab onClick={() => router.push('/reservations')}>My Appointments</Tab>
        </TabList>
        <TabPanels>
            
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={4} className="gap-6 mt-6">
              <KpiCardGrid label='sales' price={20458}/>
              <KpiCardGrid label='sales' price={40458}/>
              <KpiCardGrid label='sales' price={6458}/>
              <KpiCardGrid label='sales' price={9458}/>
             
            </Grid>
            <div className="mt-6 gap-6 flex ">
            <Grid numItemsMd={5} numItemsLg={2} className="gap-6 mt-6">
             <SalesPeopleTable/> <Barchart/>
             
            </Grid>
            </div>
          </TabPanel>


          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>

        </TabPanels>
      </TabGroup>
    </div>
  );
}
