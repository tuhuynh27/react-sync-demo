import './styles.scss'

import { useState, lazy, Suspense } from 'react'

import SearchInput from './SearchInput'
import Tabs from './Tabs'

import WebResult from './WebResult'
const ImageResult = lazy(async () => {
  await fakeLoad(100)
  return import('./ImageResult')
}) // Fake large component

const fakeLoad = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const tabs = ['Webs', 'Images', 'Videos']

function App() {
  const [tab, setTab] = useState(0)
  const [content, setContent] = useState(0)

  function updateTab(index) {
    setTab(index)
    setContent(index)
  }

  return (
    <div className="app">
      <h1>Web Search</h1>
      <SearchInput onSubmit={() => {}} />
      <div className="result-page">
      <Tabs tabs={tabs} tab={tab} setTab={updateTab} />
        <TabContent isVisible={content === 0}>
          <WebResult />
        </TabContent>
        <Suspense fallback={<div className="loading">Loading Images Component...</div>}>
          <TabContent isVisible={content === 1}>
            <ImageResult />
          </TabContent>
        </Suspense>
      </div>
      <div className="title">React Sync Mode</div>
    </div>
  )
}

function TabContent({ isVisible, children }) {
  return (
    <div className="tab-content" hidden={!isVisible}>
      {isVisible ? children : null}
    </div>
  )
}

export default App
