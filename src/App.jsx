import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "QAFulwmj.QozYaVwWzIyjlvbXzhX49ojQthAmLsbi",
    functionId:  "286c2d01-24ea-43dc-bab4-827c36fb9a30",  // "f13b0382-234b-45b2-97f4-219c17ba03ed",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
