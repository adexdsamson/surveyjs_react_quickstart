import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "QAFulwmj.QozYaVwWzIyjlvbXzhX49ojQthAmLsbi",
    functionId: "f13b0382-234b-45b2-97f4-219c17ba03ed",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
