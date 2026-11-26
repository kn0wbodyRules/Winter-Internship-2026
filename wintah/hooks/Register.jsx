import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {z} from 'zod'

const registerSchema = z.object({ name: z.string().min(3, { message: 'Name is required' }), email: z.string().email({ message: 'Invalid email address' }), password: z.string().min(6, { message: 'Password must be at least 6 characters long' }) })
const inputClassName = 'h-9 w-full rounded-md border bg-background px-3 text-sm'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [isValidated, setIsValidated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
    setIsValidated(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = registerSchema.safeParse(formData)
    if (!result.success) {
      console.error('Validation errors:', result.error.format())

    } else {
      setIsValidated(true)
    }
  }

  return (
    <section aria-labelledby="register-title">
      <h1 id="register-title" className="m-0 text-base font-normal tracking-normal">
        Register form
      </h1>
      <form className="grid" onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="name">Name:</label>
          <input
            className={inputClassName}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="email">Email:</label>
          <input
            className={inputClassName}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="password">Password:</label>
          <input
            className={inputClassName}
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button className="justify-self-start" type="submit">Submit</Button>
        <p role="status">{isValidated && 'Form validated.'}</p>
      </form>
    </section>
  )
}

export default Register


