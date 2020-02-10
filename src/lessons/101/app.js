import React, { Suspense } from "react";
import ErrorBoundary from "./error-boundary";
// const PokemonDetail = React.lazy(
//   () =>
//     new Promise(resolve =>
//       setTimeout(
//         () => resolve({ default: () => <div>[Fake] pokemon</div> }),
//         1000
//       )
//     )
// );
const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

// pending
// rejected
// resolved

export default function App() {
  return (
    <div>
      <ErrorBoundary fallback="Couldn't catch them all.">
        <Suspense fallback="Loading pokemon...">
          <PokemonDetail />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
