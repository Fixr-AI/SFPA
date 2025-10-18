import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { address, phone, email, situation } = body;

    // Validate required fields
    if (!address || !phone) {
      return NextResponse.json(
        { error: 'Address and phone are required' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
New Lead Submission from Stop Foreclosures PA

Property Address: ${address}
Phone Number: ${phone}
Email: ${email || 'Not provided'}
Situation: ${situation}

Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
    `.trim();

    // Send email using Web3Forms API (free, no backend needed)
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        subject: `New Lead: ${address}`,
        from_name: 'Stop Foreclosures PA',
        email: 'mszwed9696@gmail.com',
        message: emailContent,
      }),
    });

    if (!web3formsResponse.ok) {
      console.error('Web3Forms error:', await web3formsResponse.text());

      // Fallback: Log to console for now
      console.log('LEAD SUBMISSION:', {
        address,
        phone,
        email,
        situation,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
