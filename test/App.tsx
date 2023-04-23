
import {Suspense} from  'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import AllRoutes from './routes';
function App() {
  // 组件库首页展示路由
  // 跳转进去可以看到具体的组件 demo
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + complib</h1>
      <h2>组件开发时页面路由</h2>
      <h3>调试请点击组件路由。进入组件页面调试</h3>
      <ul>
        <li>
          <Link to="/button">button</Link>
        </li>
        <li>
          <Link to="/input">input</Link>
        </li>
      </ul>

      <Routes>
            {AllRoutes.map((item, i) => {
              return (
                <Route
                  key={i}
                  path={item.path}
                  element={
                    <Suspense fallback={<div>loading</div>}>
                      <item.component />
                    </Suspense>
                  }
                />
              );
            })}
          </Routes>

    </>
  )
}

export default App
