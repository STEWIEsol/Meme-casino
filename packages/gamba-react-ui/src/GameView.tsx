import React from 'react'
import { GameBundle } from './types'
import { ErrorBoundary } from './ErrorBoundary'

const DefaultLoadScreen = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      Loading...
    </div>
  )
}

const DefaultError = () => {
  return (
    <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', textAlign: 'center' }}>
      <div>
        <h1>Don't worry</h1>
        <p>
          This is only a client-side error and does not affect your user data.
        </p>
      </div>
    </div>
  )
}

interface Props {
  game: GameBundle
  /**
   * Component to show while the game is loading
   */
  loader?: JSX.Element
  /**
   * Component to show if an error occurs in the game
   */
  error?: JSX.Element
}

export function GameView({ game, loader, error }: Props) {
  return (
    <ErrorBoundary key={game.short_name} error={error ?? <DefaultError />}>
      <React.Suspense fallback={loader ?? <DefaultLoadScreen />}>
        <game.app />
      </React.Suspense>
    </ErrorBoundary>
  )
}