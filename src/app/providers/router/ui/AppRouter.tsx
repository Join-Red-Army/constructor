import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'


const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route 
            key={ path }
            path={ path }
            element={ element }
            // element={(
            //   <Suspense fallback={<div>Loading...</div>}>
            //     { element }
            //   </Suspense>
            // )}
          />
        ))}
      </Routes>
    </Suspense>
  )
}


export default AppRouter;