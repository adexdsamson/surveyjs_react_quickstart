import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "FagicNts.VL3HA2L8oEclzYnTlWBAPZWd8kZl8CmN",
    functionId: "2e3a5377-745b-46af-b30f-88e28615f12b",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
