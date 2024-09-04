import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "1MmcMgI4.2tukwmWvwca8AjOiU394m236pACaxop2",
    functionId: "b0640b6e-d803-4e1e-8988-fec49b588d45",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
