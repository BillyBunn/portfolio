import React from "react"
import { TabFilter, TabList, Tab, Card } from "components/tab-filter"
import Layout from "components/layout"

export default () => (
  <Layout>
    <h2>Look what I can do</h2>
    <p>
      Here's some of my work. You can click on the title to read more details
      about the project or view the source code.
    </p>
    <TabFilter tags={["React", "Express", "VanillaJS"]}>
      <TabList>
        <Tab>React</Tab>
        <Tab>Express</Tab>
        <Tab>VanillaJS</Tab>
        <Tab>Another thing</Tab>
      </TabList>

      <Card tags={["React"]} title={"React Only Project"}>
        <p>Some content in here perhaps</p>
      </Card>

      <Card tags={["React", "Express"]} title={"React & Express Project"}>
        <p>Some content in here perhaps</p>
      </Card>

      <Card tags={["Express"]} title={"Express Only Project"}>
        <p>Some content in here perhaps</p>
      </Card>

      <Card tags={["VanillaJS"]} title={"VanillaJS Only Project"}>
        <p>Some content in here perhaps</p>
      </Card>

      <Card title={"Project With No Tags"}>
        <p>Some content in here perhaps</p>
      </Card>
      
    </TabFilter>
  </Layout>
)
