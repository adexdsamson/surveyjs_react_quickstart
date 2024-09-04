import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "FagicNts.VL3HA2L8oEclzYnTlWBAPZWd8kZl8CmN",
    functionId: "b0640b6e-d803-4e1e-8988-fec49b588d45",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
