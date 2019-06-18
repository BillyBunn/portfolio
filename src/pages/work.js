import React from "react"
import { TabFilter, TabFilterItem } from "components/tab-filter"
import Layout from "components/layout"

export default () => (
  <Layout>
    <h2>Look what I can do</h2>
    <p>
      Here's some of my work. You can click on the title to read more details
      about the project or view the source code.
    </p>
    <TabFilter tags={["React", "Express", "VanillaJS"]}>
      <TabFilterItem tags={["React"]} title={"React Only Project"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem>

      <TabFilterItem tags={["React", "Express"]} title={"React & Express Project"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem>

      <TabFilterItem tags={["Express"]} title={"Express Only Project"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem>

      <TabFilterItem tags={["VanillaJS"]} title={"VanillaJS Only Project"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem>

      <TabFilterItem title={"Project With No Tags"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem>
    </TabFilter>
  </Layout>
)
