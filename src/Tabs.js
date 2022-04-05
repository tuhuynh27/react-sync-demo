function Tabs({ tabs, tab, setTab }) {
  return (
    <div className="tabs">
      {tabs.map((t, i) => (
        <div key={i} className={tab === i ? 'active' : null} onClick={() => setTab(i)}>
          {t}
        </div>
      ))}
    </div>
  )
}

export default Tabs
