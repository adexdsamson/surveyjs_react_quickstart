import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "KhfWyplt.BplgzanJdg6F1mgzeXqiEgKBGZhSPJmR",
    functionId: "2a9fe68a-23ee-45f2-a2db-834891ba5723",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
