import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "1MmcMgI4.2tukwmWvwca8AjOiU394m236pACaxop2",
    functionId: "f13b0382-234b-45b2-97f4-219c17ba03ed",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
