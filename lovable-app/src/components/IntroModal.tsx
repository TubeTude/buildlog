import { useState, useCallback } from 'react'

const INTRO_PASSWORD = '2026'

interface IntroModalProps {
  onUnlock: () => void
}

export default function IntroModal({ onUnlock }: IntroModalProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [closed, setClosed] = useState(false)

  const handleSubmit = useCallback(() => {
    if (password === INTRO_PASSWORD) {
      setError('')
      setClosed(true)
      onUnlock()
    } else {
      setError('Wrong password')
    }
  }, [password, onUnlock])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit()
  }

  if (closed) return null

  return (
    <div className="intro-modal" aria-label="Welcome">
      <div className="intro-modal__box">
        <h1 className="intro-modal__title">Hello Juan!</h1>
      </div>
      <p className="intro-modal__subtitle">//building log</p>
      <div className="intro-modal__password-wrap">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          className="intro-modal__password"
          placeholder="Password"
          autoComplete="off"
          maxLength={10}
          aria-label="Enter password"
        />
        <p className="intro-modal__password-error" role="alert">
          {error}
        </p>
      </div>
      <button
        type="button"
        className="intro-modal__play"
        aria-label="Enter and play all videos"
        onClick={handleSubmit}
      >
        <img src="/assets/images/play.png" alt="Play all" />
      </button>
    </div>
  )
}
