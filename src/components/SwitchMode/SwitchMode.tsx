import './SwitchMode.scss'
import Icon from '@/components/Icon'
import { useEffect, useState } from 'react'
import { storage } from '@/utils'

function changeBodyTheme(theme: string) {
  const body = document.body
  if (!body) return
  body.setAttribute('theme', theme)
}

export default function SwitchMode() {
  const [mode, setMode] = useState('light')

  function handleMode() {
    setMode((previousMode) => {
      const newMode = previousMode === 'light' ? 'dark' : 'light'
      storage.set('mode', newMode)
      changeBodyTheme(newMode)
      return newMode
    })
  }

  useEffect(() => {
    const themeMode = storage.get('mode')
    if (!themeMode) return
    setMode(themeMode)
    changeBodyTheme(themeMode)
  }, [])

  return (
    <div className="switch-mode" onClick={handleMode}>
      {mode === 'light' ? (
        <Icon type="icon" name="dark_mode" />
      ) : (
        <Icon type="icon" name="light_mode" />
      )}
    </div>
  )
}
