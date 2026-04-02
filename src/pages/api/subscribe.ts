import type { NextApiRequest, NextApiResponse } from 'next'

interface SubscriptionData {
  name: string
  email: string
  incomeRange?: string
  interest?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, incomeRange, interest } = req.body as SubscriptionData

    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required' 
      })
    }

    if (!email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      })
    }

    const timestamp = new Date().toISOString()
    
    // For now, just log
    console.log('New subscription:', { name, email, incomeRange, interest, timestamp })
    
    // When you build your NestJS backend, replace with:
    // await fetch('http://localhost:3001/api/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, incomeRange, interest, timestamp })
    // })

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    })
  } catch (error) {
    console.error('Subscription error:', error)
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
}