import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "KhfWyplt.BplgzanJdg6F1mgzeXqiEgKBGZhSPJmR",
    functionId: "3457a27b-a841-47fc-a85a-af8cd8dbae29",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
