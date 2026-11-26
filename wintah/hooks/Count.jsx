import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const Count = () => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [buttonPresses, setButtonPresses] = useState(0)

  useEffect(() => {
    if (buttonPresses > 0) {
      console.log('useEffect called')
    }
  }, [buttonPresses])

  const handleCounterClick = (event) => {
    if (event.target.closest('button')) {
      setButtonPresses((presses) => presses + 1)
    }
  }

  return (
    <section aria-label="Counter" onClick={handleCounterClick}>
      <output className="block">Count:{count}</output>
      <div className="flex flex-wrap items-center gap-1">
        <Button type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>
          Increase
        </Button>
        <Button type="button" variant="destructive" onClick={() => setCount(0)}>
          reset
        </Button>
      </div>
      <Button
        type="button"
        aria-expanded={isVisible}
        onClick={() => setIsVisible((visible) => !visible)}
      >
        Toggle
      </Button>
      {isVisible && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolores minus omnis
          eligendi maiores id quam pariatur tempore et, quaerat minima nobis voluptatibus esse.
        </p>
      )}
      <div className="flex flex-wrap items-center">
        <Button
          type="button"
          variant="destructive"
          onClick={() => setCount((currentCount) => currentCount - 1)}
        >
          Delete
        </Button>
        <Button type="button" variant="outline">
          Outline
        </Button>
        <Button type="button" variant="secondary">
          secondary
        </Button>
        <Button type="button" variant="ghost">
          Ghost
        </Button>
      </div>
      <p>This is test</p>
      <p>Students</p>
      <p>I am user and age is 20</p>
    </section>
  )
}

export default Count
