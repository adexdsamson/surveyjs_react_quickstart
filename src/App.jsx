import { useClaim, SurveyClaim } from '@omniguard/claim-ai';

function App() {
  const claims = useClaim({
    apikey: "QAFulwmj.QozYaVwWzIyjlvbXzhX49ojQthAmLsbi",
    functionId:  "6e114b04-c73f-460e-9b82-38ff3cd61679",  // "f13b0382-234b-45b2-97f4-219c17ba03ed",
  });


  return (
    <>
     <SurveyClaim {...claims} />
    </>
  )
}

export default App
