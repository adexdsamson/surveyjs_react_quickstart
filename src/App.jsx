import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "KhfWyplt.BplgzanJdg6F1mgzeXqiEgKBGZhSPJmR",
    functionId: "87631f70-1d2e-48b0-a003-210fd964083a",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
